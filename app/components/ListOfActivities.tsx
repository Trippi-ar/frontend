'use client'

import React, { useState, useEffect } from 'react';
import { FaStar } from "react-icons/fa";


const ListOfActivities = () => {
    const [activities, setActivities] = useState([
        { image: '/image-1.jpg', name:"Everrest", rating: 4.5, price: '$10230', difficulty: 'Medium', location: 'New York', description: 'Appending currency sign to a purchase form in your e-commerce site using plain JavaScript.', headline: 'w3js.com - web front-end studio' },
        { image: '/image-2.jpg', name:"El Morro",rating: 5, price: '$12220', difficulty: 'Hard', location: 'Los Angeles', description: 'React Carousel with Server Side Rendering Support – Part 1', headline: 'w3js.com - web front-end studio' },
        { image: '/image-3.jpg', name:"La cueva del terror",rating: 4, price: '$80', difficulty: 'Easy', location: 'San Francisco', description: 'React Carousel with Server Side Rendering Support – Part 2', headline: 'w3js.com - web front-end studio' },
        { image: '/image-4.jpeg', name:"Aconcagua",rating: 4.5, price: '$10220', difficulty: 'Medium', location: 'New York', description: 'Appending currency sign to a purchase form in your e-commerce site using plain JavaScript.', headline: 'w3js.com - web front-end studio' },
        { image: '/image-5.jpg', name:"Las piedras", rating: 5, price: '$13320', difficulty: 'Hard', location: 'Los Angeles', description: 'React Carousel with Server Side Rendering Support – Part 1', headline: 'w3js.com - web front-end studio' },
        { image: '/images.jpg', name:"El cerrito",rating: 4, price: '$80213', difficulty: 'Easy', location: 'San Francisco', description: 'React Carousel with Server Side Rendering Support – Part 2', headline: 'w3js.com - web front-end studio'},
        { image: '/image-1.jpg', name:"Everrest", rating: 4.5, price: '$10230', difficulty: 'Medium', location: 'New York', description: 'Appending currency sign to a purchase form in your e-commerce site using plain JavaScript.', headline: 'w3js.com - web front-end studio' },
        { image: '/image-2.jpg', name:"El Morro",rating: 5, price: '$12220', difficulty: 'Hard', location: 'Los Angeles', description: 'React Carousel with Server Side Rendering Support – Part 1', headline: 'w3js.com - web front-end studio' },
        { image: '/image-3.jpg', name:"La cueva del terror",rating: 4, price: '$80', difficulty: 'Easy', location: 'San Francisco', description: 'React Carousel with Server Side Rendering Support – Part 2', headline: 'w3js.com - web front-end studio' },
        { image: '/image-4.jpeg', name:"Aconcagua",rating: 4.5, price: '$10220', difficulty: 'Medium', location: 'New York', description: 'Appending currency sign to a purchase form in your e-commerce site using plain JavaScript.', headline: 'w3js.com - web front-end studio' },
        { image: '/image-5.jpg', name:"Las piedras", rating: 5, price: '$13320', difficulty: 'Hard', location: 'Los Angeles', description: 'React Carousel with Server Side Rendering Support – Part 1', headline: 'w3js.com - web front-end studio' },
        { image: '/images.jpg', name:"El cerrito",rating: 4, price: '$80213', difficulty: 'Easy', location: 'San Francisco', description: 'React Carousel with Server Side Rendering Support – Part 2', headline: 'w3js.com - web front-end studio'},
        { image: '/image-1.jpg', name:"Everrest", rating: 4.5, price: '$10230', difficulty: 'Medium', location: 'New York', description: 'Appending currency sign to a purchase form in your e-commerce site using plain JavaScript.', headline: 'w3js.com - web front-end studio' },
        { image: '/image-2.jpg', name:"El Morro",rating: 5, price: '$12220', difficulty: 'Hard', location: 'Los Angeles', description: 'React Carousel with Server Side Rendering Support – Part 1', headline: 'w3js.com - web front-end studio' },
        { image: '/image-3.jpg', name:"La cueva del terror",rating: 4, price: '$80', difficulty: 'Easy', location: 'San Francisco', description: 'React Carousel with Server Side Rendering Support – Part 2', headline: 'w3js.com - web front-end studio' },
        { image: '/image-4.jpeg', name:"Aconcagua",rating: 4.5, price: '$10220', difficulty: 'Medium', location: 'New York', description: 'Appending currency sign to a purchase form in your e-commerce site using plain JavaScript.', headline: 'w3js.com - web front-end studio' },
        { image: '/image-5.jpg', name:"Las piedras", rating: 5, price: '$13320', difficulty: 'Hard', location: 'Los Angeles', description: 'React Carousel with Server Side Rendering Support – Part 1', headline: 'w3js.com - web front-end studio' },
        { image: '/images.jpg', name:"El cerrito",rating: 4, price: '$80213', difficulty: 'Easy', location: 'San Francisco', description: 'React Carousel with Server Side Rendering Support – Part 2', headline: 'w3js.com - web front-end studio'},
        { image: '/image-1.jpg', name:"Everrest", rating: 4.5, price: '$10230', difficulty: 'Medium', location: 'New York', description: 'Appending currency sign to a purchase form in your e-commerce site using plain JavaScript.', headline: 'w3js.com - web front-end studio' },
        { image: '/image-2.jpg', name:"El Morro",rating: 5, price: '$12220', difficulty: 'Hard', location: 'Los Angeles', description: 'React Carousel with Server Side Rendering Support – Part 1', headline: 'w3js.com - web front-end studio' },
        { image: '/image-3.jpg', name:"La cueva del terror",rating: 4, price: '$80', difficulty: 'Easy', location: 'San Francisco', description: 'React Carousel with Server Side Rendering Support – Part 2', headline: 'w3js.com - web front-end studio' },

    ]);

    const [loading, setLoading] = useState(false);
    const [showLoadMoreButton, setShowLoadMoreButton] = useState(true);


    const loadMoreActivities = () => {
        // Simula la carga de más actividades (deberías cargar más datos desde una fuente externa)
        setLoading(true);
        setTimeout(() => {
            setActivities((prevActivities) => [
                ...prevActivities,
                // Nuevas actividades
            ]);
            setLoading(false);
            setShowLoadMoreButton(false); // Oculta el botón después de cargar más actividades
        }, 1000); // Simula una carga asincrónica
    };


    useEffect(() => {
        const handleScroll = () => {
            // Verifica si el usuario ha llegado al final de la página
            if (
                window.innerHeight + document.documentElement.scrollTop ===
                document.documentElement.offsetHeight
            ) {
                // Carga más actividades
                loadMoreActivities();
            }
        };

        // Agrega un event listener para el evento de scroll
        window.addEventListener('scroll', handleScroll);

        // Limpia el event listener cuando el componente se desmonta
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Se ejecuta solo en el montaje inicial

    return (
        <div className="bg-gray-100 px-10 ">
            <h1 className="text-2xl font-bold mx-44 flex text-left pt-10">Activities</h1>

            <div className="flex flex-wrap pt-10">
                {activities.map((activity, index) => (
                    <div key={index} className="w-1/5 mb-4 p-3  ">
                        <div className="overflow-hidden hover:scale-105 transition duration-200 rounded-2xl shadow-sm">
                            <img
                                src={activity.image}
                                alt="Activity"
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-4">
                                <p className="font-bold text-xl">{activity.name}</p>
                                <p className="text-md">{activity.location}</p>
                            </div>

                            <div className="flex justify-between p-4 border-t border-green-400">
                                <div className="flex items-center text-green-400">
                                    <FaStar />
                                    <p className="text-sm ml-2 text-black">{activity.rating}</p>
                                </div>
                                <p className="text-sm font-bold">{activity.price}</p>
                                <p className="text-sm">{activity.difficulty}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {showLoadMoreButton && (
                <div className="flex justify-center mt-4 py-3">
                    <button
                        className="py-2 px-4 bg-green-400 text-white rounded-md hover:scale-105 duration-150"
                        onClick={loadMoreActivities}
                    >
                        Get more activities
                    </button>
                </div>
            )}
        </div>
    );
};

export default ListOfActivities;
