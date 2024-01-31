import React, { useState } from 'react';

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



const ActivityBar = () => {

    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const handleFilterClick = () => {
        setIsFilterOpen(!isFilterOpen);
    };


    return (

        <div className="relative">
            <div className="flex justify-around  bg-white text-gray-400 pb-5 shadow-xl cursor-pointer">
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
                    <label>
                        Tipo de actividad:
                        <input type="text" className="block w-full mt-1" />
                    </label>
                    <label>
                        Opciones de reserva:
                        <input type="text" className="block w-full mt-1" />
                    </label>
                    <label>
                        Tipo de guía:
                        <input type="text" className="block w-full mt-1" />
                    </label>
                </div>
            )}
        </div>
    );
};

export default ActivityBar;