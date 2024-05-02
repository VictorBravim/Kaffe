// Hero.tsx
'use client'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image";
import cafe from '@/assets/cafe.png'

export default function Hero() {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        adaptiveHeight: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                },
            },
        ],
    };

    return (
        <div className="w-full px-8 lg:px-12">
            <Slider {...sliderSettings}>
                <div className='shadow-lg'>
                    <Image src={cafe} className="bg-white w-full h-1/2 object-cover pointer-events-none" alt="Slide 1" />
                </div>
                <div className='shadow-lg'>
                    <Image src={cafe} className="bg-white w-full h-1/2 object-cover pointer-events-none" alt="Slide 2" />
                </div>
                <div className='shadow-lg'>
                    <Image src={cafe} className="bg-white w-full h-1/2 object-cover pointer-events-none" alt="Slide 3" />
                </div>
            </Slider>
        </div>
    );
}