'use client'

import React, { useEffect, useState } from 'react';
import axios from "axios";
import TrekkingPostPage from "@/components/TrekkingPostPage";
import Bookings from "@/components/Bookings";
import Footer from "@/components/Footer";
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/navigation';
import Carousel from '@/components/Carousel';


function ActivityPage({ params }: { params: { activityId: string } }) {
    const [activityData, setActivityData] = useState<any>(null);
    const router = useRouter();


    useEffect(() => {
        const fetchActivity = async (activityId: string) => {
            try {
                const response = await axios.get(`http://localhost:8003/api/${activityId}`);
                console.log(response.data);
                setActivityData(response.data); // Almacena la respuesta como un objeto en el estado activityData
            } catch (error) {
                console.error(error);
            }
        };

        fetchActivity(params.activityId);
    }, [params.activityId]);

    return (
        <div>
            {activityData ? (
                <div className="antialiased tracking-wider mx-auto" style={{maxWidth: '1400px', minWidth: '1024px'}}>
                    <Navbar isSticky={false}/>
                    <h1 className='text-2xl font-bold'>{activityData.name}</h1>
                    <Carousel activityData={activityData}/>
                    <div className="flex">
                        <div className="w-1/2">
                            <TrekkingPostPage activityData={activityData}/>
                        </div>
                        <div className="w-1/2">
                            <Bookings activityData={activityData} activityId={params.activityId} router={router}/>
                        </div>
                    </div>
                    <Footer />
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
}

export default ActivityPage;
