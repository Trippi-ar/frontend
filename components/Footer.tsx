'use client'

import React from "react";
import {
    RiCheckboxBlankCircleFill,
    RiInstagramLine,
    RiFacebookLine,
    RiLinkedinFill,
    RiGithubLine,
} from "react-icons/ri";

const Footer: React.FC = () => {
    return (
        <footer className="bg-footer p-8 xl:p-20 font-primary">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-500 pb-8">
                <a href="#home">
                    <img
                        src="logo.svg"
                        alt="Logo"
                        className="w-36 h-auto lg:w-48 lg:h-auto"
                    />
                </a>
                <nav className="flex items-center gap-4">
                    <a
                        href="#"
                        className="block text-whiteCustom p-4 bg-primary rounded-full"
                    >
                        {" "}
                        <RiInstagramLine />{" "}
                    </a>
                    <a
                        href="#"
                        className="block text-whiteCustom p-4 bg-primary rounded-full"
                    >
                        {" "}
                        <RiFacebookLine />{" "}
                    </a>
                    <a
                        href="https://www.linkedin.com/company/trippi-ar/"
                        className="block text-whiteCustom p-4 bg-primary rounded-full"
                    >
                        {" "}
                        <RiLinkedinFill />{" "}
                    </a>
                    <a
                        href="https://github.com/Trippi-ar"
                        className="block text-whiteCustom p-4 bg-primary rounded-full"
                    >
                        {" "}
                        <RiGithubLine />{" "}
                    </a>
                </nav>
            </div>
            <div className="mt-8">
                <nav className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
                    <a
                        href="#"
                        className="text-whiteCustom mt-4 hover:text-primary transition-colors"
                    >
                        Nosotros
                    </a>
                    <a
                        href="#"
                        className="text-whiteCustom mt-4 hover:text-primary transition-color"
                    >
                        Inversores
                    </a>
                    <a
                        href="#"
                        className="text-whiteCustom mt-4 hover:text-primary transition-color"
                    >
                        Eventos
                    </a>
                    <a
                        href="#"
                        className="text-whiteCustom mt-4 hover:text-primary transition-color"
                    >
                        Terminos de uso
                    </a>
                    <a
                        href="#"
                        className="text-whiteCustom mt-4 hover:text-primary transition-color"
                    >
                        Politicas de privacidad
                    </a>
                    <a
                        href="#contact"
                        className=" py-2 px-6 bg-primary text-whiteCustom rounded-xl"
                    >
                        Contacto
                    </a>
                </nav>
            </div>
            <div className="mt-20">
                <p className="text-whiteCustom text-center">
                    © Trippi 2023 - All Rights Reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
