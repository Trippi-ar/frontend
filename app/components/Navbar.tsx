import React, { useState } from 'react';
import Image from 'next/image';
import { UserCircleIcon, LocationMarkerIcon, SearchIcon, AdjustmentsIcon } from '@heroicons/react/solid';
import Link from "next/link";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState<boolean | null>(null);

    const handleMenuClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault();
        setOpenMenu(prevState => !prevState);
    };

    return (
        <nav className="flex items-center justify-between p-4 bg-white px-10">

            <div className="flex items-center">
                <Image src="/logo.svg" alt="Logo" width={150} height={150}/>
            </div>

            <div className="flex border rounded-3xl shadow-xl p-2">

                <form className="flex items-center space-x-4">
                    <input
                        type="text"
                        placeholder="Where"
                        className="w-1/3 py-2 ml-10 focus:outline-none border-r-2 border-green-400"/>
                    <input
                        type="date"
                        placeholder="When"
                        className="w-1/3 py-2 ml-10 focus:outline-none border-r-2 border-green-400 pr-1"/>
                    <input
                        type="number"
                        min="1"
                        max="50"
                        placeholder="How many"
                        className="w-1/3 py-2 ml-10 border-none focus:outline-none border-r-2 border-black"
                    />
                    <div className="flex items-center ml-2">
                        <div className="rounded-full p-2 bg-green-400">
                            <SearchIcon className="h-6 text-white"/>
                        </div>
                    </div>
                </form>

            </div>

            <div className="flex items-center space-x-20">

                <p className="text-lg hover:underline hover:text-green-400"><Link href="/signup" className="font-primary">I am a Guide</Link></p>

                <div className="relative">
                    <div className="flex items-center space-x-2 border p-2 rounded-3xl shadow-sm cursor-pointer" onClick={handleMenuClick}>
                        <AdjustmentsIcon className="h-8"/>
                        <UserCircleIcon className="h-8"/>
                    </div>
                    {openMenu && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-xl shadow-xl z-10 ">
                            <Link href="/signup">
                                <p className="block px-4 py-2 text-gray-800 hover:bg-green-400 hover:text-white cursor-pointer">Sign up</p>
                            </Link>
                            <Link href="/profile">
                                <p className="block px-4 py-2 text-gray-800 hover:bg-green-400 hover:text-white cursor-pointer">My profile</p>
                            </Link>
                            <Link href="/signup">
                                <p className="block px-4 py-2 text-gray-800 hover:bg-green-400 hover:text-white cursor-pointer">I am a guide</p>
                            </Link>
                        </div>
                    )}
                </div>

            </div>

        </nav>
    );
};

export default Navbar;
