'use client'

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { getCartCookie, Publication, removeFromCart, setCartCookie } from '@/utils/cookiesUtils';
import axios from 'axios';
import { getCookie } from 'cookies-next';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';


function Cart() {
    const [cartItems, setCartItems] = useState<Publication[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const router = useRouter();


    useEffect(() => {
        const cart = getCartCookie();
        if (cart) {
            setCartItems(cart);
            calculateTotalPrice(cart);
        }
    }, []);

    const calculateTotalPrice = (cart: Publication[]) => {
        const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotalPrice(total);
    };

    const handleDecreaseQuantity = (index: number) => {
        const updatedCart = [...cartItems];
        if (updatedCart[index].quantity > 1) {
            updatedCart[index].quantity -= 1;
            setCartItems(updatedCart);
            calculateTotalPrice(updatedCart);
            setCartCookie(updatedCart); // Actualizar la cookie
        }
    };

    const handleIncreaseQuantity = (index: number) => {
        const updatedCart = [...cartItems];
        updatedCart[index].quantity += 1;
        setCartItems(updatedCart);
        calculateTotalPrice(updatedCart);
        setCartCookie(updatedCart); // Actualizar la cookie
    };

    const handleRemoveFromCart = (index: number) => {
        const updatedCart = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedCart);
        calculateTotalPrice(updatedCart);
        setCartCookie(updatedCart); // Actualizar la cookie
        removeFromCart(cartItems[index].name); 
    };

    const handleCheckout = async () => {
        try {
            const token = getCookie('token')
            if (!token) {
                console.error('Token not provide');
                return;
            }
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            for (const item of cartItems) {
                console.log(item.date)
                const formattedDate = format(new Date(item.date), 'yyyy-MM-dd');


                const createBookingResponse = await axios.post('http://localhost:8003/api/booking/', {
                    publication_id: item.id,
                    date: formattedDate,
                    participant: item.quantity,
                },
                config
                );
                console.log('Reserva creada:', createBookingResponse.data);
            };
            setCartItems([]);
            setTotalPrice(0);
            setCartCookie([]); 
            alert('¡Reservas creadas con éxito!');
            router.push('/bookings')
        } catch (error) {
            console.error('Error al crear las reservas:', error);
            alert('Ocurrió un error al crear las reservas. Por favor, inténtalo de nuevo más tarde.');
        }
    };

    // @ts-ignore
    return (
        <div className="antialiased tracking-wider mx-auto" style={{maxWidth: '1400px', minWidth: '1024px'}}>
        <Navbar isSticky={false} />
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-4">Cart Items</h2>
                <div className="grid grid-cols-1 gap-4">
                    {cartItems.map((item, index) => (
                        <div key={index} className="border rounded-md p-4 ">
                            <div className="flex justify-between ">
                                <div>
                                    <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md"/>
                                </div>
                                <div className="mt-10">{item.name}</div>

                                <div className="flex flex-col items-end mt-9 ">
                                    <div className="flex items-center">
                                        <button onClick={() => handleDecreaseQuantity(index)} className="bg-gray-300 rounded-l px-2 focus:outline-none">-</button>
                                        <div className="px-2">{item.quantity}</div>
                                        <button onClick={() => handleIncreaseQuantity(index)} className="bg-gray-300 rounded-r px-2 focus:outline-none">+</button>
                                    </div>
                                </div>
                                <div className="mt-10">Price: ${item.price.toFixed(2)}</div>
                                <div className="mt-10"> Total: ${(item.price * item.quantity).toFixed(2)}</div>
                                <button onClick={() => handleRemoveFromCart(index)} className="text-red-500 mt-2">Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-end mt-4">
                    <div className="text-lg font-bold">Total: ${totalPrice.toFixed(2)}</div>
                </div>
                <div className="flex justify-end mt-4">
                    <button onClick={handleCheckout} className="bg-green-500 text-white py-2 px-4 rounded">Checkout</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
