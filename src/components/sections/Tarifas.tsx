

"use client";
import React from "react";
import { motion } from "framer-motion";

const Tarifas = () => {
  const cordon1 = ['Avellaneda','Lanús','Lomas de Zamora','Morón','Tres de Febrero','San Martín','Vicente López','San Isidro','San Fernando','Ituzaingó','La Matanza Norte','Hurlingham'];
  const cordon2 = ['Almirante Brown','Berazategui','Esteban Echeverría','Florencio Varela','La Matanza Sur','Quilmes','Tigre','José C. Paz','Malvinas Argentinas','Merlo','San Miguel','Moreno'];
  const cordon3 = ['Lujan','San Vicente','Campana','Zarate','Nordelta','La Plata','Cañuelas','Pilar','Escobar','General Rodríguez','Ingeniero Matswisch','San Vicente'];

  // Animación para cards
  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="min-h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(56,189,248,0.25),rgba(255,255,255,0))] py-20">
      <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
        Tarifas Planas y Accesibles
      </h2>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pt-14 p-4">
        
        {/* Capital Federal */}
        <motion.div
          className="bg-zinc-900 rounded-2xl shadow-md p-6 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/30 transition"
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-slate-200 text-center py-4">Capital Federal</h3>
          <p className="text-slate-400 text-center mb-4">Ciudad Autónoma de Buenos Aires</p>
          <div className="text-center">
            <span className="inline-block py-3 px-6 bg-gradient-to-r from-blue-600 to-sky-400 text-white text-lg font-bold rounded-full shadow-lg hover:scale-110 transition">
              $3500
            </span>
          </div>
        </motion.div>

        {/* Cordon 1 */}
        <motion.div
          className="bg-zinc-900 rounded-2xl shadow-md p-6 md:col-span-2 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/30 transition"
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-slate-200 text-center py-4">Cordón 1</h3>
          <ul className="text-gray-300 text-center">
            {cordon1.map((localidad, index) => (
              <li key={index} className="inline-block px-2 py-1 bg-gray-800 text-sm rounded-md mx-1 my-1 hover:bg-sky-600 hover:text-white transition">
                {localidad}
              </li>
            ))}
          </ul>
          <div className="text-center mt-6">
            <span className="inline-block py-3 px-6 bg-gradient-to-r from-blue-600 to-sky-400 text-white text-lg font-bold rounded-full shadow-lg hover:scale-110 transition">
              $5000
            </span>
          </div>
        </motion.div>

        {/* Cordon 2 */}
        <motion.div
          className="bg-zinc-900 rounded-2xl shadow-md p-6 md:col-span-2 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/30 transition"
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-slate-200 text-center py-4">Cordón 2</h3>
          <ul className="text-gray-300 text-center">
            {cordon2.map((localidad, index) => (
              <li key={index} className="inline-block px-2 py-1 bg-gray-800 text-sm rounded-md mx-1 my-1 hover:bg-sky-600 hover:text-white transition">
                {localidad}
              </li>
            ))}
          </ul>
          <div className="text-center mt-6">
            <span className="inline-block py-3 px-6 bg-gradient-to-r from-blue-600 to-sky-400 text-white text-lg font-bold rounded-full shadow-lg hover:scale-110 transition">
              $6500
            </span>
          </div>
        </motion.div>

        {/* Cordon 3 */}
        <motion.div
          className="bg-zinc-900 rounded-2xl shadow-md p-6 md:col-span-1 md:col-start-3 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/30 transition"
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-slate-200 text-center py-4">Cordón 3</h3>
          <ul className="text-gray-300 text-center">
            {cordon3.map((localidad, index) => (
              <li key={index} className="inline-block px-2 py-1 bg-gray-800 text-sm rounded-md mx-1 my-1 hover:bg-sky-600 hover:text-white transition">
                {localidad}
              </li>
            ))}
          </ul>
          <div className="text-center mt-6">
            <span className="inline-block py-3 px-6 bg-gradient-to-r from-blue-600 to-sky-400 text-white text-lg font-bold rounded-full shadow-lg hover:scale-110 transition">
              $7500
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tarifas;
