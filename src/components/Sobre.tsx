// Sobre.tsx
'use client'
import React from 'react';
import Image from 'next/image';
import imagem1 from '@/assets/cafe.png';

const Sobre: React.FC = () => {
    const cardsData = [
        {
            titulo: 'Missão',
            descricao: 'Nossa missão é fornecer produtos de alta qualidade para todos os clientes.',
            imagem: imagem1,
        },
        {
            titulo: 'Visão',
            descricao: 'Nossa visão é ser a empresa líder no mercado em inovação e excelência.',
            imagem: imagem1,
        },
        {
            titulo: 'Valores',
            descricao: 'Nossos valores incluem integridade, compromisso e satisfação do cliente.',
            imagem: imagem1,
        },
    ];

    return (
        <div className="mx-12 py-8">
            <h2 className="text-white text-3xl font-bold text-left mb-8">Sobre Nós</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 shadow-lg">
                {cardsData.map((card, index) => (
                    <div key={index} className="bg-brown-custom overflow-hidden">
                        <div className="relative h-40">
                            <Image
                                src={card.imagem}
                                alt={card.titulo}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-t-lg"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-white text-xl font-semibold mb-2">{card.titulo}</h3>
                            <p className="text-white">{card.descricao}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sobre;
