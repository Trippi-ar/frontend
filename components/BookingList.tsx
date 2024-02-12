import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getCookie } from 'cookies-next';

interface Booking {
  id: string;
  name: string;
  date: string;
  participant: number;
  price: number;
  state: string;
  created_at: string;
}

const BookingList: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = getCookie('token');
        const response = await axios.get('https://publications-3bsgyuggyq-ue.a.run.app/api/booking/', {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td className="px-4 py-2">{booking.name}</td>
              <td className="px-4 py-2">{booking.date}</td>
              <td className="px-4 py-2">${booking.price}</td>
              <td className="px-4 py-2">{booking.state}</td>
              <td className="px-4 py-2">{booking.participant}</td>
              <td className="px-4 py-2">{booking.created_at}</td>
              <td className="px-4 py-2">
                <button className="ml-16 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                  Cancelar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingList;
