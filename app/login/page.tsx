'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { setCookie } from 'cookies-next';

interface FormFieldProps {
    label: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormField: React.FC<FormFieldProps> = ({ label, type, value, onChange }) => {
    return (
        <label className="block">
            <span className="text-gray-700">{label}</span>
            <input
                type={type}
                value={value}
                onChange={onChange}
                className="block w-full mt-2 border-gray-300 rounded-md shadow-sm focus:ring-0 outline-none sm:text-sm"
            />
        </label>
    );
};

export default function LoginPage() {
    const router = useRouter();
    const API_LOGIN_URL = "https://users-3bsgyuggyq-ue.a.run.app/api/login";

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch(API_LOGIN_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();
            if (response.status === 200) {
                setCookie(
                    'token',
                    data,
                    {
                        // httpOnly: true,
                        maxAge: 2 * 60 * 60,
                        path: '/',
                    });
                router.push('/home');
            } else {
                alert("Wrong credentials");
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert("Login failed");
        }
    };

    return (
        <div className="antialiased tracking-wider mx-auto" style={{ maxWidth: '1400px' , minWidth: '1024px'}}>
            <div className="flex items-center justify-center">
                <div className="p-8 space-y-4 bg-white rounded-2xl  w-1/3">
                    <div className="flex justify-center space-x-4 pt-4">
                        <Image src="/logo.svg" alt="Logo" width={200} height={200}/>
                    </div>
                    <h1 className="flex justify-center text-2xl font-bold pl-2">Sign in to your account</h1>
                    <form onSubmit={handleSubmit} className="space-y-4 pt-5 text">
                        <FormField label="Username" type="text" value={username} onChange={e => setUsername(e.target.value)}  />
                        <p className="text-right"><Link href="/forgot-password" className="font-semibold">Forgot Password?</Link></p>
                        <FormField label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                        <button type="submit" className="w-full px-3 py-2 text-white bg-[rgb(74,188,105)] rounded hover:bg-[rgb(74,188,50)]">Login</button>
                    </form>
                    <hr/>
                    <p className="text-center">Need an account? <Link href="/signup" className="font-bold">SIGN UP</Link></p>
                </div>
            </div>
        </div>
    );
}
