"use client"
import Link from "next/link";
import Image from "next/image";
import Me from '../../public/Illustration3.png'
import { useState } from "react";

export const Navigation: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        {
            label: "Home",
            route: "/",
        },
        {
            label: "About",
            route: "/about",
        },
        {
            label: "Portfolio",
            route: "/portfolio"
        },
        {
            label: "Stack",
            route: "/stack"
        }
    ];


    return (
        <header>
            <nav className=" w-full flex items-center justify-between bg-gradient-to-r from-violet-300 to-pink-300 p-6">
                <div className="block">
                    <div className="h-[50px] w-[90px] -mt-10 -ml-6">
                        <Image src={Me} alt="Me" />
                    </div>
                </div>
                <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white focus:outline-none">
                    {isOpen ? (
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>
                <div className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? '' : 'hidden'}`}>
                    <ul className="text-lg lg:flex-grow lg:flex lg:justify-center lg:gap-8">
                        {links.map(({ label, route }) => (
                            <li key={route} className="block mt-4 lg:inline-block lg:mt-0 text-white">
                                <Link href={route}>{label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex justify-center mt-4 lg:mt-0">
                    <button className="bg-transparent hover:bg-pink-500 font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded text-white">
                        <a href="/marianellaGomezLuna.pdf" download="MarianellaGomezLuna.pdf">CV</a>
                    </button>
                </div>
            </nav>
        </header>
    )
};