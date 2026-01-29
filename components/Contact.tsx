
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="section-spacing bg-[#F5EFE7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="card-soft p-12 lg:p-24 flex flex-col lg:flex-row items-center justify-between gap-16 border-2 border-[#11B7B5]/5">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-4xl lg:text-7xl font-extrabold text-[#3A4A4F] mb-8 tracking-tighter leading-tight italic">
              Sonríe con <br />
              <span className="text-[#11B7B5]">confianza.</span>
            </h2>
            <p className="text-xl text-[#6F6F6F] font-medium mb-12">
              Inicia tu tratamiento hoy mismo. Agenda una consulta diagnóstica vía WhatsApp o llámanos directamente.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <a 
                href="https://wa.me/595983583122" 
                className="btn-primary px-12 py-5 rounded-full font-bold text-[14px] uppercase tracking-widest text-center shadow-lg shadow-[#11B7B5]/20"
              >
                Escribir ahora
              </a>
              <div className="flex flex-col gap-3">
                <a href="tel:+595983583122" className="text-[#3A4A4F] font-bold text-lg hover:text-[#11B7B5] transition-colors">
                  +595 983 583 122
                </a>
                <a href="tel:+595984793000" className="text-[#3A4A4F] font-bold text-lg hover:text-[#11B7B5] transition-colors">
                  +595 984 793 000
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-10">
            <a href="https://instagram.com/dasanodontologia" target="_blank" className="flex flex-col items-center group">
              <div className="w-16 h-16 rounded-full bg-[#3A4A4F]/5 flex items-center justify-center text-[#3A4A4F] group-hover:bg-[#3A4A4F] group-hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </div>
              <span className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#3A4A4F]/40">Instagram</span>
            </a>
            <a href="https://facebook.com/DasanOdontologia" target="_blank" className="flex flex-col items-center group">
              <div className="w-16 h-16 rounded-full bg-[#3A4A4F]/5 flex items-center justify-center text-[#3A4A4F] group-hover:bg-[#3A4A4F] group-hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </div>
              <span className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#3A4A4F]/40">Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
