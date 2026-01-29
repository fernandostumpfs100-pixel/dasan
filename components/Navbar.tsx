
import React from 'react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Sobre DASAN', href: '#sobre-dasan' },
    { name: 'Contacto', href: '#contacto' },
    { name: 'Ubicación', href: '#ubicacion' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'py-4 nav-glass border-b border-black/5' : 'py-8 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#inicio" className="flex items-center group">
            <img 
              src="https://i.ibb.co/KjPWyZ84/Dasan-Logo.png" 
              alt="DASAN Clínica Odontológica" 
              className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (!target.src.includes('i.ibb.co')) {
                   target.src = 'https://i.ibb.co/KjPWyZ84/Dasan-Logo.png';
                }
              }}
            />
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[13px] font-semibold uppercase tracking-wider text-[#2F2F2F]/70 hover:text-[#11B7B5] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/595983583122"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-3 rounded-full text-[13px] font-bold uppercase tracking-wider"
          >
            Agendar cita
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="md:hidden">
          <a
            href="https://wa.me/595983583122"
            className="w-10 h-10 rounded-full bg-[#11B7B5] flex items-center justify-center text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
