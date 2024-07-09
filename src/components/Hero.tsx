// components/Hero.js
import React from 'react';

export const Hero = () => {
  return (
    <header className="relative bg-hero-pattern bg-cover bg-center min-h-screen flex items-center justify-center">
       <div className="absolute inset-0 bg-black opacity-50"></div>
       <div className="relative text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white">Entrega Rápida y Segura</h1>
        <p className="mt-4 text-lg md:text-xl text-slate-100">Llevamos tus pedidos a la puerta de tu casa en tiempo récord.</p>
      </div>
    </header>
  );
};
