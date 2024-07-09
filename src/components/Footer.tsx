import React from 'react';
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="relative bg-blueGray-200 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-center md:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-blueGray-700">GlobalFlex</h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Solución logística para eCommerce
            </h5>
            <div className="mt-6 lg:mb-0 mb-6 flex justify-center md:justify-start">
              <button className="bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <FontAwesomeIcon icon={['fab', 'twitter']} />
              </button>
              <button className="bg-white text-blue-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <FontAwesomeIcon icon={['fab', 'facebook']} />
              </button>
              <button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <FontAwesomeIcon icon={['fab', 'square-instagram']} />
              </button>
              <button className="bg-white text-gray-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <FontAwesomeIcon icon={['fab', 'telegram']} />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4 mt-6 md:mt-0">
            <div className="flex flex-wrap items-top justify-center md:justify-between">
              <div className="w-full md:w-6/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Enlaces útiles</span>
                <ul className="list-unstyled">
                  <li>
                    <Link href="#inicio" className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Inicio</Link>
                  </li>
                  <li>
                    <Link href="#servicios" className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Servicios</Link>
                  </li>
                  <li>
                    <Link href="#tarifas" className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Tarifas</Link>
                  </li>
                  <li>
                    <Link href="#contacto" className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Contacto</Link>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-6/12 px-4">
                <span className="pt-3 md:pt-0 block uppercase text-blueGray-500 text-sm font-semibold mb-2">Contáctanos</span>
                <ul className="list-unstyled">
                  <li>
                    <p className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">00549117483920</p>
                  </li>
                  <li>
                    <p className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Globalflex@gmail.com</p>
                  </li>
                  <li>
                    <p className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Fraga 100</p>
                  </li>
                  <li>
                    <p className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Buenos Aires, Argentina</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2024</span> <a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank"> GlobalFlex</a> by
              <a href="https://www.creative-tim.com?ref=njs-profile" className="text-blueGray-500 hover:text-blueGray-800"> Mackaroots</a>.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

