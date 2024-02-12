'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface FormData {
    username: string;
    email: string;
    password: string;
    user_type: string | null;
}

interface FormFieldProps {
    label: string;
    name: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormField: React.FC<FormFieldProps> = ({ label, name, type, value, onChange }) => {
    return (
        <label className="block">
            <span className="text-gray-700">{label}</span>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className="block w-full mt-2 rounded-md shadow-sm focus:ring-0 focus:border-gray-300 outline-none sm:text-sm"
            />
        </label>
    );
};

interface RadioInputProps {
    name: string;
    value: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioInput: React.FC<RadioInputProps> = ({ name, value, checked, onChange }) => {
    return (
        <label className="flex items-center">
            <input
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                className="form-radio"
            />
            <span className="ml-2">{/* Eliminamos 'children' ya que no está definido en RadioInputProps */}</span>
        </label>
    );
};

export default function SignUp() {
    const router = useRouter();
    const API_SIGNUP_URL = "http://localhost:8001/api/signup";

    const [formData, setFormData] = useState<FormData>({
        username: '',
        email: '',
        password: '',
        user_type: null
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validation
        const { username, email, password, user_type } = formData;
        if (username.length < 8) {
            alert("Username must be at least 8 characters long.");
            return;
        }
        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        if (!user_type) {
            alert("Please select a user type.");
            return;
        }

        try {
            console.log(JSON.stringify(formData))
            const response = await fetch(API_SIGNUP_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();

            if (response.status === 201) {
                router.push('/login');
            } else {
                alert("Signup failed");
            }
        } catch (error) {
            console.error('Error during signup:', error);
            alert("Signup failed");
        }
    };

    return (
        <div className="antialiased tracking-wider mx-auto" style={{ maxWidth: '1400px' , minWidth: '1024px'}}>
            <div className="flex items-center justify-center text-black">
                <div className="p-4 space-y-4 bg-white rounded-3xl w-1/3 ">
                    <div className="flex justify-center space-x-4 pt-4">
                        <Image src="/logo.svg" alt="Logo" width={200} height={200} />
                    </div>
                    <h1 className="flex justify-center text-2xl font-bold text-left pb-3 pl-2">Create an account</h1>
                    <p className="flex justify-center">
                        Already a member?
                        <a href="/login" className="font-bold  hover:text-green-400 pl-1"> Login</a>
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4 pt-1">
                        <FormField label="Username" name="username" type="text" value={formData.username} onChange={handleChange} />
                        <FormField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} />
                        <FormField label="Password" name="password" type="password" value={formData.password} onChange={handleChange} />
                        <div className="flex justify-center space-x-4 pt-4">
                            <RadioInput name="user_type" value="client" checked={formData.user_type === 'client'} onChange={handleChange} />
                            <RadioInput name="user_type" value="guide" checked={formData.user_type === 'guide'} onChange={handleChange} />
                        </div>
                        <div className="flex justify-center space-x-4 pt-4">
                            <button type="submit" className="w-1/2 px-3 py-2 text-white bg-green-400 rounded-2xl hover:bg-green-500">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}
