// Hero.tsx
'use client'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Hero() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
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
    <div className="w-full h-1/2 relative">
      <Slider {...sliderSettings}>
        <div>
          <img src="/image1.jpg" className="bg-white w-full h-full object-cover" alt="Slide 1" />
        </div>
        <div>
          <img src="/image2.jpg" className="bg-white w-full h-full object-cover" alt="Slide 2" />
        </div>
        <div>
          <img src="/image3.jpg" className="bg-white w-full h-full object-cover" alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
}