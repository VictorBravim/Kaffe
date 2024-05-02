// Nav.tsx
'use client'
import { useState, useEffect } from 'react';
import Image from "next/image";
import logo from '@/assets/logo.png'

export default function Nav() {
    const [activeSection, setActiveSection] = useState('home');

    const handleScroll = () => {
        const scrollPosition = window.scrollY;

        if (scrollPosition < window.innerHeight - 100) {
            setActiveSection('home');
        } else if (scrollPosition < 2 * window.innerHeight - 100) {
            setActiveSection('sobre');
        } else if (scrollPosition < 3 * window.innerHeight - 100) {
            setActiveSection('locais');
        } else {
            setActiveSection('cambio');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="bg-transparent p-8 absolut w-full z-20">
            <div className="mx-5 flex items-center justify-between">
                <div className="flex items-center">
                    <Image src={logo} alt="Texto" width={150} height={32} />
                </div>
                <div className="flex items-center text-white space-x-6 lg:space-x-12">
                    <button
                        className={`text-base md:text-lg ${activeSection === 'home' ? 'bg-transparent text-white py-2 border-b-2 border-white' : ''}`}
                        onClick={() => scrollToSection('home')}>
                        HOME
                    </button>
                    <button
                        className={`text-base md:text-lg ${activeSection === 'produtos' ? 'bg-transparent text-white py-2 border-b-2 border-white' : ''}`}
                        onClick={() => scrollToSection('produtos')}>
                        PRODUTOS
                    </button>
                    <button
                        className={`text-base md:text-lg ${activeSection === 'sobre' ? 'bg-transparent text-white py-2 border-b-2 border-white' : ''}`}
                        onClick={() => scrollToSection('sobre')}>
                        SOBRE
                    </button>
                    <button
                        className={`text-base md:text-lg ${activeSection === 'contato' ? 'bg-transparent text-white py-2 border-b-2 border-white' : ''}`}
                        onClick={() => scrollToSection('contato')}>
                        CONTATO
                    </button>
                </div>
            </div>
        </nav>
    );
}