import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface Activity {
    id: string;
    name: string;
    locality: string;
    administrative_area_level_1: string;
    country: string;
    images: string[];
    price: number;
    difficulty: string;
}

interface ActivityItemProps {
    activity: Activity;
}

interface ItemsProps {
    currentItems: Activity[];
}

interface PaginatedItemsProps {
    itemsPerPage: number;
}

function ActivityItem({ activity }: ActivityItemProps) {
    const router = useRouter();

    const handleItemClick = () => {
        router.push(`/activities/${activity.id}`);
    };

    return (
        <div onClick={handleItemClick} className="overflow-hidden hover:scale-105 transition duration-200 rounded-2xl cursor-pointer" >
            <img
                src={activity.images[0]}
                alt="Activity"
                className="w-full h-48 object-cover"
            />

            <div className="bg-opacity-60 w-full p-4 rounded-lg">
                <p className="font-bold text-xl">{activity.name}</p>
                <p className="text-md">{activity.locality}, {activity.administrative_area_level_1}, {activity.country}</p>
            </div>

            <div className="flex px-3">
                <div className="flex text-green-400">
                    <FaStar />
                    <p className="text-sm text-black">5</p>
                </div>
                <p className="text-sm px-2">${activity.price}</p>
                <p className="text-sm px-2">{activity.difficulty}</p>
            </div>
        </div>
    );
}

function Items({ currentItems }: ItemsProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {currentItems.map((activity: Activity) => (
                <ActivityItem key={activity.id} activity={activity} />
            ))}
        </div>
    );
}

function PaginatedItems({ itemsPerPage }: PaginatedItemsProps) {
    const [activities, setActivities] = useState<Activity[]>([]);
    const [itemOffset, setItemOffset] = useState(0);
    const router = useRouter();

    useEffect(() => {
        axios.get('https://publications-3bsgyuggyq-ue.a.run.app/api/?page=1&per_page=40')
            .then(response => setActivities(response.data))
            .catch(error => console.error('Error fetching activities:', error));
    }, []);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = activities.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(activities.length / itemsPerPage);

    const handlePageClick = (event: { selected: number }) => {
        const newOffset = event.selected * itemsPerPage;
        setItemOffset(newOffset);
    };

    return (
        <div className="mt-8">
            <Items currentItems={currentItems} />
            <div className="flex justify-center mt-4">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="Next"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="Previous"
                    containerClassName="flex"
                    pageClassName="mx-2"
                    activeClassName="font-bold"
                />
            </div>
        </div>
    );
}

export default function Home() {
    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-center">Adventures</h1>
            <PaginatedItems itemsPerPage={12} />
        </div>
    );
}
