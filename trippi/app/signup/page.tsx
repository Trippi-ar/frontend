'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import mbxGeocoding from '@mapbox/mapbox-sdk/services/geocoding';
import Image from 'next/image';


const geocodingClient = mbxGeocoding({ accessToken: "pk.eyJ1Ijoiam9hcXVpbnJleWVybyIsImEiOiJjbHF5ZDg1MXgwMHFvMmlqdm10ODB0ZnMwIn0.vy66fr2Q5U2dK4rX3WjDmQ" });

export default function SignUp() {
    const [userType, setUserType] = useState(null);
    const router = useRouter();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validation
        if (!username || username.length < 8) {
            alert("Username must be at least 8 characters long.");
            return;
        }

        if (!password || password.length < 8) {
            alert("Password must be at least 8 characters long.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!userType) {
            alert("Please select a user type.");
            return;
        }

        if (!address) {
            alert("Please enter an address.");
            return;
        }

        const response = await fetch('http://0.0.0.0:8001/api/users/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userType,
                username,
                email,
                password,
            }),
        });
        const data = await response.json();
        console.log(data);

        if (response.status === 200) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('role', data.role);
            router.push('/home')
        }
        else {
            alert("Signup failed");
        }
    };

    const handleAddressChange = async (value) => {
        setAddress(value);

        const response = await geocodingClient.forwardGeocode({
            query: value,
            autocomplete: true,
            limit: 5,
        }).send();

        setSuggestions(response.body.features.map(feature => feature.place_name));
    };

    const handleSelect = (value) => {
        setAddress(value);
        setSuggestions([]);
    };

    const handleCurrentLocation = async () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const response = await geocodingClient.reverseGeocode({
                    query: [position.coords.longitude, position.coords.latitude],
                }).send();

                setAddress(response.body.features[0].place_name);
            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    };


    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 text-black">
            <div className="p-8 space-y-4 bg-white rounded-3xl shadow-2xl w-1/2 ">

                <div className="flex justify-center space-x-4 pt-4">
                    <Image src="/logo.svg" alt="Logo" width={200} height={200}/>
                </div>

                <h1 className="text-2xl font-bold text-left pb-5 pl-2">Sign Up</h1>

                <form onSubmit={handleSubmit} className="space-y-4 pt-1">

                    <label className="block">
                        <span className="text-gray-700">Username</span>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="block w-full mt-2 rounded-md shadow-sm focus:ring-0 focus:border-gray-300 outline-none sm:text-sm"
                        />
                    </label>

                    <label className="block">
                        <span className="text-gray-700">Email</span>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="block w-full mt-2 rounded-md shadow-sm focus:ring-0 focus:border-gray-300 outline-none sm:text-sm"
                        />
                    </label>

                    <label className="block">
                        <span className="text-gray-700">Password</span>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="block w-full mt-2 rounded-md shadow-sm focus:ring-0 focus:border-gray-300 outline-none sm:text-sm"
                        />
                    </label>

                    <div className="flex justify-center space-x-4 pt-4">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                value="client"
                                checked={userType === 'client'}
                                onChange={(e) => setUserType(e.target.value)}
                                className="form-radio "
                            />
                            <span className="ml-2">Client</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                value="guide"
                                checked={userType === 'guide'}
                                onChange={(e) => setUserType(e.target.value)}
                                className="form-radio"
                            />
                            <span className="ml-2">Guide</span>
                        </label>
                    </div>


                    <label className="block">
                        <span className="text-gray-700">Address</span>

                        <div className="flex justify-center mt-4">
                            <button onClick={handleCurrentLocation}
                                    className="px-4 py-2 text-black bg-gray-100 rounded-2xl hover:bg-green-500 hover:text-white">
                                Use Current Location
                            </button>
                        </div>

                        <input
                            type="text"
                            value={address}
                            onChange={(e) => handleAddressChange(e.target.value)}
                            className="block w-full mt-5 rounded-md shadow-sm focus:ring-0 focus:border-gray-300 outline-none sm:text-sm"
                        />

                    </label>
                    {suggestions.map((suggestion, index) => (
                        <div key={index} onClick={() => handleSelect(suggestion)}>
                            {suggestion}
                        </div>
                    ))}

                    <div className="flex justify-center space-x-4 pt-4">

                        <button
                            type="submit"
                            className="w-1/2 px-3 py-2 text-white bg-green-400 rounded-2xl hover:bg-green-500"
                        >
                            Sign Up
                        </button>

                    </div>

                </form>
            </div>
        </div>
    );
}