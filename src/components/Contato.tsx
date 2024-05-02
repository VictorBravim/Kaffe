// Contato.tsx
'use client'
import React, { useState } from 'react';

const Contato: React.FC = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        mensagem: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Formulário enviado:', formData);
        setFormData({ nome: '', email: '', mensagem: '' });
    };

    return (
        <div id='contato' className="mx-12 py-8">
            <h2 className="text-white text-3xl font-bold mb-8">Contato</h2>
            <div className='w-full flex flex-row justify-between gap-6'>
                <div className='w-1/2 bg-brown-custom flex flex-col'>
                    <h1>Sobre</h1>
                    <p>Coffee</p>
                </div>
                <form onSubmit={handleSubmit} className="w-1/2">
                    <div className="mb-4">
                        <label htmlFor="nome" className="block text-sm font-semibold text-white">Nome</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            placeholder="Digite seu nome"
                            className="w-full px-4 py-2 mt-1 focus:outline-none focus:transparent"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-semibold text-white">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Digite seu e-mail"
                            className="w-full px-4 py-2 mt-1 focus:transparent"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="mensagem" className="block text-sm font-semibold text-white">Mensagem</label>
                        <textarea
                            id="mensagem"
                            name="mensagem"
                            value={formData.mensagem}
                            onChange={handleChange}
                            placeholder="Digite sua mensagem"
                            className="w-full px-4 py-2 mt-1 focus:transparent"
                            rows={4}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-black hover:bg-white text-white hover:text-black font-semibold px-4 py-2"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contato;
