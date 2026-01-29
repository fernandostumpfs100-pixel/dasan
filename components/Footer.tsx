
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F5EFE7] text-[#3A4A4F] py-20 pb-36 lg:pb-20 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col items-center">
        
        <div className="mb-12 text-center group">
          <img 
            src="https://i.ibb.co/KjPWyZ84/Dasan-Logo.png" 
            alt="DASAN Logo" 
            className="h-24 md:h-32 w-auto mx-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        <div className="flex flex-wrap justify-center gap-12 mb-12 text-[12px] font-bold uppercase tracking-widest text-[#2F2F2F]/50">
          <a href="#inicio" className="hover:text-[#11B7B5] transition-colors">Inicio</a>
          <a href="#servicios" className="hover:text-[#11B7B5] transition-colors">Servicios</a>
          <a href="#contacto" className="hover:text-[#11B7B5] transition-colors">Contacto</a>
          <a href="#ubicacion" className="hover:text-[#11B7B5] transition-colors">Ubicación</a>
        </div>

        <div className="text-center space-y-4 max-w-sm">
          <p className="text-[#6F6F6F] text-xs font-medium leading-relaxed">
            Del Maestro esq. Defensa Nacional, Salto del Guairá, Canindeyú, Paraguay
          </p>
          <div className="pt-8 border-t border-black/5 w-full">
            <p className="text-[10px] tracking-[0.1em] font-black text-[#2F2F2F]/30 uppercase">
              © {new Date().getFullYear()} DASAN — R. T. Dra. Ana Paula Dávalos — R.P. 4.303
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
