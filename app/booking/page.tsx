'use client'

import BookingList from '@/components/BookingList';
import Navbar from '@/components/Navbar';
import React from 'react';



const Booking: React.FC = () => {
  return (
    <div className="container mx-auto mt-8">
        <Navbar isSticky={true} />
        <h1 className='text-xl font-bold py-10'> My bookings </h1>
        <BookingList />
        
    </div>
  );
};

export default Booking;
