"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";

export const Servicios = () => {
  const servicios = [
    {
      titulo: 'Servicio de Mensajería Flex',
      descripcion: 'Entregas rápidas y seguras para vendedores de MercadoLibre. Optimiza tus envíos con una amplia flota de vehiculos, tecnología avanzada, software de seguimiento en tiempo real y rutas eficientes. Cuidamos tu reputación como la nuestra',
      imagen: '/imagenes/mercadoenvio.avif'
    },
    {
      titulo: 'Envíos eCommerce',
      descripcion: 'Soluciones de entrega especializadas para emprendedores y tiendas que venden en cualquier plataforma online.Aceptamos contraentrega, controlamos los pago y coordinamos los envios segun los tiemposcoordinados.',
      imagen: '/imagenes/plataformas-ecommerce.webp'
    },
    {
      titulo: 'Mensajería Empresarial',
      descripcion: 'Servicios integrales de mensajería para empresas: trámites, cobranzas, entrega y retiro de encomiendas, con eficiencia y puntualidad.',
      imagen: '/imagenes/mensajeria_empresarial.png'
    },
  ];

const cardVariant: Variants | undefined = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { duration: 0.6, ease: "easeOut" } // ✔ "easeOut" es válido
  }
};


  return (
    <section id="servicios" className="min-h-screen bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 dark:from-dark dark:via-dark-1 dark:to-dark-2 py-20">
      <h2 className="text-4xl font-extrabold text-center mb-16 bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
        Soluciones Logísticas para eCommerce
      </h2>

      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-wrap -mx-4">
          {servicios.map((servicio, index) => (
            <motion.div
              key={index}
              className="w-full px-4 sm:w-1/2 lg:w-1/3 mb-12"
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
            >
              <div className="relative bg-white dark:bg-dark-2 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
                
                {/* Imagen con efecto parallax ligero */}
                <motion.div
                  className="relative overflow-hidden h-56"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={servicio.imagen}
                    alt={servicio.titulo}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">Ver más</span>
                  </div>
                </motion.div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">
                    {servicio.titulo}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 flex-1">{servicio.descripcion}</p>
                
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
