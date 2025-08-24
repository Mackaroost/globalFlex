'use client'
import Link from "next/link";
import { HomeIcon, CurrencyDollarIcon, EnvelopeIcon, RocketLaunchIcon, Bars4Icon, XCircleIcon } from '@heroicons/react/24/outline';
import { useState } from "react";
import Image from "next/image";

export const Nav = () => {
  const navLinks = [
    { name: 'Inicio', href: '#inicio', icon: HomeIcon },
    { name: 'Servicios', href: '#servicios', icon: RocketLaunchIcon },
    { name: 'Tarifas', href: '#tarifas', icon: CurrencyDollarIcon },
    { name: 'Contacto', href: '#contacto', icon: EnvelopeIcon }
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-50 fixed w-full z-10 shadow">
      <div className="container mx-auto p-4 md:flex md:items-center md:justify-between">
        
        {/* Logo y botón hamburguesa */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link href="#inicio">
            <div className="px-4">
              {
              /*
                <Image 
    src="/imagenes/logo.jpg" 
    alt="GlobalFlex Logo" 
    width={80}      // ancho en px
    height={80} 
    className="rounded-full"    // alto en px
    />
*/
      <h2 className="text-3xl font-bold text-gray-900">
  GlobalFlex{" "}
  <span className="block text-lg font-medium text-blue-600 mt-1">
    Servicio de Logística
  </span>
</h2>
              }
  
            </div>
          </Link>
          <button 
            className="text-gray-500 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <XCircleIcon className="h-6 w-6" /> : <Bars4Icon className="h-6 w-6" />}
          </button>
        </div>

        {/* Menú */}
        <div className={`flex-col md:flex md:flex-row md:items-center w-full md:w-auto transition-all duration-300 ${isOpen ? 'flex' : 'hidden'}`}>
          {
            navLinks.map((link) => {
              const LinkIcon = link.icon;
              return (
                <Link 
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-x-2 rounded-md bg-gray-50 p-3 text-sm font-medium my-2 md:my-0 md:mx-4 hover:bg-sky-100 hover:text-blue-600 transition"
                  onClick={() => setIsOpen(false)} // cierra menú al hacer click
                >
                  <LinkIcon className="w-5 h-5"/>
                  <span>{link.name}</span>
                </Link>
              );
            })
          }
        </div>

      </div>
    </nav>
  );
};

