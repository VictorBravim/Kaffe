// Footer.tsx
'use client'
import { useState } from 'react';
import Image from "next/image";
import logo from '@/assets/logo.png'

export default function Footer() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        if (menuOpen) {
            setMenuOpen(false);
        }
    };

    return (
        <footer className="bg-transparent text-white p-8">
            <div className="mx-5 flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                <div className="flex items-center mb-2 lg:mb-0">
                <Image src={logo} alt="Texto" width={150} height={32} />
                </div>
                <div className="md:flex space-x-8 lg:space-x-12 mt-4 md:mt-0">
                    <button className="text-white text-base md:text-lg" onClick={() => scrollToSection('home')}>Home</button>
                    <button className="text-white text-base md:text-lg" onClick={() => scrollToSection('sobre')}>Sobre</button>
                    <button className="text-white text-base md:text-lg" onClick={() => scrollToSection('locais')}>Locais</button>
                    <button className="text-white text-base md:text-lg" onClick={() => scrollToSection('recursos')}>Recursos</button>
                </div>
            </div>
        </footer>
    );
}