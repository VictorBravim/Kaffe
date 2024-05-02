// Sobre.tsx
'use client'
import React from 'react';
import Image from 'next/image';
import cafeImage from '@/assets/cafe.png';

interface CardData {
    titulo: string;
    descricao: string;
}

const Sobre: React.FC = () => {
    const cardsData: CardData[] = [
        {
            titulo: 'Coffee',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies nibh sit amet nisi tempor porta. Quisque id consectetur augue. Mauris laoreet sodales lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer augue lacus, commodo ut auctor vel, laoreet vitae massa. Aenean id leo ligula. Ut tincidunt orci id mi placerat, a congue magna sodales. Phasellus euismod sed lectus ut vestibulum.',
        },
        {
            titulo: 'Cake',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies nibh sit amet nisi tempor porta. Quisque id consectetur augue. Mauris laoreet sodales lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer augue lacus, commodo ut auctor vel, laoreet vitae massa. Aenean id leo ligula. Ut tincidunt orci id mi placerat, a congue magna sodales. Phasellus euismod sed lectus ut vestibulum.',
        },
        {
            titulo: 'Chocolate',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies nibh sit amet nisi tempor porta. Quisque id consectetur augue. Mauris laoreet sodales lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer augue lacus, commodo ut auctor vel, laoreet vitae massa. Aenean id leo ligula. Ut tincidunt orci id mi placerat, a congue magna sodales. Phasellus euismod sed lectus ut vestibulum.',
        },
    ];

    return (
        <div className="mx-12 py-8">
            <h2 className="text-white  text-3xl font-bold mb-8">Sobre Nós</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 shadow-lg">
                {cardsData.map((card, index) => (
                    <div key={index} className="bg-brown-custom overflow-hidden flex">
                        <div className="p-4">
                            <h3 className="text-white text-xl font-semibold mb-2 flex items-center">
                                <Image
                                    src={cafeImage}
                                    alt="Logo"
                                    width={40}
                                    height={40}
                                    className="mr-2"
                                />
                                {card.titulo}
                            </h3>
                            <p className="text-white mb-4">{card.descricao}</p>
                            <button className="text-white hover:text-black border-b-2 border-white pb-2">
                                Leia mais
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sobre;
