import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      {/* CDN de FontAwesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      <footer className="relative bg-blueGray-200 pt-8 pb-6" id = "contacto">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center md:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold text-blueGray-700">GlobalFlex</h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                Solución logística para eCommerce
              </h5>

              <div className="mt-6 lg:mb-0 mb-6 flex justify-center md:justify-start space-x-2">
                {/* Correo */}
                <a
                  href="mailto:Globalflex00@gmail.com"
                  className="bg-white shadow-lg h-10 w-10 flex items-center justify-center rounded-full text-gray-700 hover:scale-110 transition"
                >
                  <i className="fas fa-envelope"></i>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/5491178492420" // Reemplaza con tu número
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white shadow-lg h-10 w-10 flex items-center justify-center rounded-full text-green-500 hover:scale-110 transition"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/globalflex00" // Reemplaza con tu usuario
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white shadow-lg h-10 w-10 flex items-center justify-center rounded-full text-pink-500 hover:scale-110 transition"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            {/* Enlaces y contacto */}
            <div className="w-full lg:w-6/12 px-4 mt-6 md:mt-0">
              <div className="flex flex-wrap items-top justify-center md:justify-between">
                <div className="w-full md:w-6/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Enlaces útiles</span>
                  <ul>
                    <li><Link href="#inicio" className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Inicio</Link></li>
                    <li><Link href="#servicios" className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Servicios</Link></li>
                    <li><Link href="#tarifas" className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Tarifas</Link></li>
                  </ul>
                </div>

                <div className="w-full md:w-6/12 px-4">
                  <span className="pt-3 md:pt-0 block uppercase text-blueGray-500 text-sm font-semibold mb-2">Contáctanos</span>
                  <ul>
                    <li><p className="text-blueGray-600 font-semibold block pb-2 text-sm">1178492420</p></li>
                    <li><p className="text-blueGray-600 font-semibold block pb-2 text-sm">Globalflex00@gmail.com</p></li>
                    <li><p className="text-blueGray-600 font-semibold block pb-2 text-sm">Chacarita</p></li>
                    <li><p className="text-blueGray-600 font-semibold block pb-2 text-sm">Capital Federal, Argentina</p></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-6 border-blueGray-300" />

          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © 2024
                <a href="#" className="text-blueGray-500 hover:text-gray-800"> GlobalFlex</a> by
                <a href="#" className="text-blueGray-500 hover:text-blueGray-800"> Mackaroots</a>.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
