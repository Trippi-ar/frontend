import React, { useState } from 'react';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { parseISO } from 'date-fns';
import axios from "axios";
import { addToCart } from '@/utils/cookiesUtils'; // Importa la función addToCart desde el archivo de utilidades de cookies


interface ActivityData {
    price: number;
    dates: string[];
    name: string;
    images: string[];
}

interface BookingsProps {
    activityData: ActivityData;
    activityId: string; 
    router: any;
}


const Bookings: React.FC<BookingsProps> = ({ activityData, activityId, router }) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [quantity, setQuantity] = useState<number>(1);
    const [errorMessage, setErrorMessage] = useState<string>('');
    
    const dates = activityData.dates.map(dateString => parseISO(dateString));

    const tileContent = ({ date, view }: { date: Date; view: string }) => {
        if (view === 'month' && dates.some(d => isSameDay(d, date))) {
            return <div className="bg-green-400 rounded-full h-7 w-7 flex justify-center items-center"></div>;
        }
        return null;
    };

    const isSameDay = (date1: Date, date2: Date) => {
        return date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate();
    };

    const handleIncreaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const handleReserve = async () => {
        if (!selectedDate || !dates.some(d => isSameDay(d, selectedDate))) {
            setErrorMessage('No se puede elegir esa fecha.');
        } else {
            setErrorMessage('');
            try {
                const response = await axios.post('http://localhost:8003/api/booking/availability', {
                    publication_id: activityId,
                    date: selectedDate.toISOString().split('T')[0],
                    participant: quantity,
                });
                if (response.data === true) {
                    addToCart({
                        id: activityId,
                        name: activityData.name, 
                        quantity: quantity,
                        price: activityData.price,
                        date: selectedDate,
                        image: activityData.images[0],
                    });
                    router.push('/cart/');  
                } else {
                    console.log('No hay disponibilidad en la fecha seleccionada.');
                }
            } catch (error) {
                console.error('Error al verificar la disponibilidad:', error);
            }
        }
    };


    // @ts-ignore
    // @ts-ignore
    return (
        <div className="flex justify-center w-full">
            <div className="flex flex-col justify-center items-center p-4 border rounded-xl shadow-2xl w-1/2">
                <div>
                    <h2 className="text-2xl font-bold mb-4 pb-2">Make a reservation</h2>
                </div>

                <div className="mb-4">
                    <ReactCalendar
                        onChange={(date: Date | Date[]) => setSelectedDate(Array.isArray(date) ? date[0] : date)}
                        value={selectedDate}
                        tileContent={tileContent}
                    />
                </div>
                <div className="flex justify-center w-5/6 mt-2">
                    <div className="flex flex-row mb-4 items-center w-4/7">
                        <label htmlFor="quantity" className="mr-2">Adventurers</label>
                        <div className="flex items-center">
                            <button onClick={handleDecreaseQuantity}
                                    className="px-2 py-1 bg-gray-200 rounded-l focus:outline-none">
                                -
                            </button>
                            <input
                                id="quantity"
                                value={quantity}
                                onChange={(e) => setQuantity(parseInt(e.target.value))}
                                className="w-20 px-2 py-1 border rounded focus:outline-none focus:border-blue-500 text-center"
                            />
                            <button onClick={handleIncreaseQuantity}
                                    className="px-2 py-1 bg-gray-200 rounded-r focus:outline-none">
                                +
                            </button>
                        </div>
                    </div>
                    <div className="ml-3 w-3/7 text-right text-xl ">$ {activityData.price} ARS</div>
                </div>
                {errorMessage && <div className="text-red-500">{errorMessage}</div>}
                <div className="flex justify-center mt-4">
                    <button onClick={handleReserve}
                            className="bg-green-400 hover:scale-105 text-white font-bold py-2 px-4 rounded">
                        Book now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Bookings;
