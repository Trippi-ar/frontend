'use client'

import React, { useState, useEffect } from 'react';
import { FaStar } from "react-icons/fa";
import { GiHiking } from "react-icons/gi";
import { FaHiking } from "react-icons/fa";
import { GiMountainClimbing } from "react-icons/gi";
import { GiForest } from "react-icons/gi";
import { GiCaveEntrance } from "react-icons/gi";
import { FaScrewdriver } from "react-icons/fa";
import { GiCampingTent } from "react-icons/gi";
import { FaSkiing } from "react-icons/fa";
import { MdOutlineParagliding } from "react-icons/md";
import { FaFilter } from "react-icons/fa";


const ListOfActivities = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const handleFilterClick = () => {
        setIsFilterOpen(!isFilterOpen);
    };

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
        <div className=" px-10 ">
            <h1 className="text-2xl font-bold mx-44 flex text-left pt-10 pb-12">Activities</h1>

            <div className="relative border-b">
            <div className="flex justify-around  bg-white text-gray-400 pb-5 cursor-pointer">
                <div className="hover:text-green-400">
                    <FaHiking size={25}/>
                </div>
                <div className="hover:text-green-400 cursor-pointer">
                    <GiHiking size={25}/>
                </div>
                <div className="hover:text-green-400 cursor-pointer">
                    <GiMountainClimbing size={25}/>
                </div>
                <div className="hover:text-green-400 cursor-pointer">
                    <GiForest size={25}/>
                </div>
                <div className="hover:text-green-400 cursor-pointer">
                    <GiCaveEntrance size={25}/>
                </div>
                <div className="hover:text-green-400 cursor-pointer">
                    <FaScrewdriver size={25}/>
                </div>
                <div className="hover:text-green-400 cursor-pointer">
                    <GiCampingTent size={25}/>
                </div>
                <div className="hover:text-green-400 cursor-pointer">
                    <FaSkiing size={25}/>
                </div>
                <div className="hover:text-green-400 cursor-pointer">
                    <MdOutlineParagliding size={25}/>
                </div>

                <div className=" border px-4 py-2 rounded-xl shadow-2xl cursor-pointer text-green-400" onClick={handleFilterClick}>
                    <FaFilter size={20} />
                </div>

            </div>
            {isFilterOpen && (
                <div className="absolute right-0 w-64 p-4 mt-2 bg-white border rounded shadow-xl z-10">
                    <label>
                        Rango de precio:
                        <input type="text" className="block w-full mt-1" />
                    </label>
                    <label>
                        Idioma de actividades:
                        <input type="text" className="block w-full mt-1" />
                    </label>
                </div>
            )}
        </div>    

            <div className="flex flex-wrap pt-10">
                {activities.map((activity, index) => (
                    <div key={index} className="w-1/5 mb-4 p-3">
                        <div className="overflow-hidden hover:scale-105 transition duration-200 rounded-2xl">
                            <img
                                src={activity.image}
                                alt="Activity"
                                className="w-full h-48 object-cover"
                            />

                            <div className="bg-opacity-60 w-full p-4 rounded-lg p-4">
                                <p className="font-bold text-xl">{activity.name}</p>
                                <p className="text-md">{activity.location}</p>
                            </div>

                            <div className="flex px-3">
                                <div className="flex text-green-400">
                                    <FaStar />
                                    <p className="text-sm text-black">{activity.rating}</p>
                                </div>
                                <p className="text-sm px-2">{activity.price}</p>
                                <p className="text-sm px-2">{activity.difficulty}</p>
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
