'use client'

import React, { useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from "next/image";
export default function Page() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch('http://0.0.0.0:8001/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
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
            alert("Wrong password");
        }
    };





    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 text-black">
            <div className="p-8 space-y-4 bg-white rounded-2xl shadow-2xl w-1/2">

                <div className="flex justify-center space-x-4 pt-4">
                    <Image src="/logo.svg" alt="Logo" width={200} height={200}/>
                </div>

                <h1 className="text-2xl font-bold pl-2">Login</h1>

                <form onSubmit={handleSubmit} className="space-y-4 pt-5">
                    <label className="block">
                        <span className="text-gray-700">Username</span>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="block w-full mt-2 border-gray-300 rounded-md shadow-sm focus:ring-0 outline-none sm:text-sm"
                        />
                    </label>
                    <label className="block">
                        <span className="text-gray-700">Password</span>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="block w-full mt-2 border-gray-300 rounded-md shadow-sm focus:ring-0 outline-none sm:text-sm"
                        />
                    </label>
                    <button
                        type="submit"
                        className="w-full px-3 py-2 text-white bg-[rgb(74,188,105)] rounded hover:bg-[rgb(74,188,50)]"
                    >
                        Login
                    </button>
                </form>

                <p className="text-right"><Link href="/forgot-password" className="font-semibold">Forgot
                    Password?</Link></p>

                <hr/>
                <p className="text-center">Need an account? <Link href="/signup" className="font-bold">SIGN UP</Link>
                </p>
            </div>
        </div>
    );
}
