// Produtos.tsx
'use client'
import React from 'react';
import Image from 'next/image';
import produtoA from '@/assets/cafe.png';

const produtos = [
    { id: 1, nome: 'Produto A', preco: 50, imagem: produtoA },
    { id: 2, nome: 'Produto B', preco: 70, imagem: produtoA },
    { id: 3, nome: 'Produto C', preco: 90, imagem: produtoA },
    { id: 4, nome: 'Produto D', preco: 120, imagem: produtoA },
    { id: 5, nome: 'Produto A', preco: 50, imagem: produtoA },
    { id: 6, nome: 'Produto B', preco: 70, imagem: produtoA },
    { id: 7, nome: 'Produto C', preco: 90, imagem: produtoA },
    { id: 8, nome: 'Produto D', preco: 120, imagem: produtoA },
];

const Produtos: React.FC = () => {
    return (
        <div id='produtos' className="mx-12 py-6">
            <h2 className="text-white text-2xl font-bold mb-6">Produtos à Venda</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {produtos.map((produto) => (
                    <div key={produto.id} className="flex flex-col items-center bg-brown-custom shadow-lg overflow-hidden">
                        <div className="relative w-48 h-48 p-8">
                            <Image
                                src={produto.imagem}
                                alt={produto.nome}
                                layout="fill"
                                objectFit="cover"
                                className='my-8'
                            />
                        </div>
                        <div className="w-full flex flex-row justify-between p-8 mt-8">
                            <div>
                                <h3 className="text-white text-lg font-semibold mb-2">{produto.nome}</h3>
                                <p className="text-white">${produto.preco}</p>
                            </div>
                            <div>
                                <button className="mt-4 bg-white hover:bg-black hover:text-white text-black py-2 px-4">
                                    add
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Produtos;
