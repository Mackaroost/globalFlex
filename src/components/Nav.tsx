'use client'
import Link from "next/link";
import { HomeIcon, CurrencyDollarIcon, EnvelopeIcon, RocketLaunchIcon, Bars4Icon, XCircleIcon} from '@heroicons/react/24/outline';
import { useState } from "react";

export const Nav = () => {
  const navLinks = [
    { name: 'Inicio', href: '#', icon: HomeIcon },
    { name: 'Servicios', href: '#servicios', icon: RocketLaunchIcon },
    { name: 'Tarifas', href: '#tarifas', icon: CurrencyDollarIcon },
    { name: 'Contacto', href: '#contacto', icon: EnvelopeIcon }
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-50 fixed w-full z-10">
      <div className="container mx-auto p-4 md:flex md:items-center md:justify-between ">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link href="#inicio">
            <div className='px-4'>
              Logotipo
            </div>
          </Link>
          <button 
            className="text-lg md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <XCircleIcon className="h-6 w-6 text-gray-500" /> : <Bars4Icon className="h-6 w-6 text-gray-500" />}
          </button>
        </div>
        <div className={`flex-col md:flex md:flex-row ${isOpen ? 'flex' : 'hidden'} md:flex`}>
          {
            navLinks.map((link) => {
              const LinkIcon = link.icon;
              return (
                <Link 
                  className="flex my-4 items-center justify-center gap-x-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:my-0 md:mx-4" 
                  key={link.name}
                  href={link.href}
                >
                  <LinkIcon className="w-6 h-6"/> 
                  <p>{link.name}</p>
                </Link>
              );
            })
          }
        </div>
      </div>
    </nav>
  );
};
