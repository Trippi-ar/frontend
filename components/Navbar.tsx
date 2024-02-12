import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { UserCircleIcon, ShoppingCartIcon, SearchIcon, AdjustmentsIcon } from '@heroicons/react/solid';
import Link from "next/link";
import { getCartCookie } from '@/utils/cookiesUtils';

const Navbar = ({ isSticky }: { isSticky: boolean }) => {
    const [openMenu, setOpenMenu] = useState(false);
    const [cartItemCount, setCartItemCount] = useState(0);

    useEffect(() => {
        const cart = getCartCookie();
        if (cart) {
            setCartItemCount(cart.length);
        }
    }, []);

    const handleMenuClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        setOpenMenu(!openMenu);
    };

    return (
        <nav className={`flex items-center justify-between p-4 px-10 ${isSticky ? 'sticky top-0 z-50' : ''}`} style={{ backgroundColor: 'white' }}>
             <div className="flex items-center">
                <Link href="/home">
                    <Image src="/logo.svg" alt="Logo" width={150} height={150}/>
                </Link>
            </div>

            <div className="flex border rounded-3xl shadow-xl p-2 w-1/2" >
                <form className="flex items-center space-x-4 w-full">
                    <input
                        type="text"
                        placeholder="Where"
                        className="w-1/4 py-2 ml-10 text-xs border-none focus:outline-none border-r-2 border-green-400 w-2/4" />
                    <input
                        type="date"
                        placeholder="When"
                        className="w-1/4 py-2 ml-10 text-xs border-none focus:outline-none border-r-2 border-green-400 pr-1 w-1/4" />
                    <input
                        type="number"
                        min="1"
                        max="50"
                        placeholder="How many"
                        className="w-1/4 py-2 ml-10 text-xs border-none focus:outline-none border-r-2 border-black w-1/4" 
                        inputMode="numeric"
                    />
                </form>
                <div className="flex items-center ml-2">
                    <div className="rounded-full p-2 bg-green-400">
                        <SearchIcon className="h-6 text-white"/>
                    </div>
                </div>
            </div>
            <div className="flex items-center space-x-10">
                <Link href="/cart">
                    <div className="relative transition-transform duration-100 transform hover:-translate-x-1 hover:rotate-3">
                        <ShoppingCartIcon className="h-7 "/>
                        {cartItemCount > 0 && (
                            <div className="absolute bottom-5 right-0 -mt-1 -mr-1 bg-green-400 text-white text-xs rounded-full px-1">
                                {cartItemCount}
                            </div>
                        )}
                    </div>
                </Link>
                <div className="relative">
                    <div className="flex items-center space-x-2 border p-2 rounded-3xl shadow-sm cursor-pointer" onClick={handleMenuClick}>
                        <AdjustmentsIcon className="h-8"/>
                        <UserCircleIcon className="h-8"/>
                    </div>
                    {openMenu && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-xl shadow-xl z-10 ">
                            <Link href="/signup">
                                <p className="block px-4 py-2 text-sm text-gray-800 hover:bg-green-400 hover:text-white cursor-pointer">Sign up</p>
                            </Link>
                            <Link href="/login">
                                <p className="block px-4 py-2 text-sm text-gray-800 hover:bg-green-400 hover:text-white cursor-pointer">Login</p>
                            </Link>
                            <Link href="/booking">
                                <p className="block px-4 py-2 text-sm text-gray-800 hover:bg-green-400 hover:text-white cursor-pointer">Bookings</p>
                            </Link>
                            <Link href="/signup">
                                <p className="block px-4 py-2 text-sm text-gray-800 hover:bg-green-400 hover:text-white cursor-pointer">I am a guide</p>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
