"use client";
import React from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <header className="relative bg-hero-pattern bg-cover bg-center min-h-screen flex items-center justify-center">
      {/* Overlay degradado */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

      {/* Contenido */}
      <div className="relative z-10 text-center px-4 md:px-0">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Entrega Rápida y Segura
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-slate-200 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Llevamos tus ventas a la puerta de tus clientes en tiempo récord, con seguimiento en tiempo real.
        </motion.p>

        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <a
            href="#servicios"
            className="inline-block bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
          >
            Conoce nuestros servicios
          </a>
        </motion.div>
      </div>
    </header>
  );
};
