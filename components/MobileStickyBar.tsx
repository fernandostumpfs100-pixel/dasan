
import React from 'react';

const MobileStickyBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-8 left-6 right-6 z-50">
      <div className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-[2rem] p-3 flex gap-4 border border-white/50">
        <a 
          href="https://wa.me/595983583122" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 btn-primary py-4 rounded-2xl font-bold text-center text-[12px] uppercase tracking-widest shadow-lg shadow-[#11B7B5]/20 active:scale-95 transition-all"
        >
          Agendar
        </a>
        <a 
          href="tel:+595983583122" 
          className="flex-1 btn-neutral py-4 rounded-2xl font-bold text-center text-[12px] uppercase tracking-widest shadow-lg shadow-[#3A4A4F]/20 active:scale-95 transition-all"
        >
          Llamar
        </a>
      </div>
    </div>
  );
};

export default MobileStickyBar;
