
import React from 'react';

const Location: React.FC = () => {
  return (
    <section id="ubicacion" className="section-spacing bg-[#F5EFE7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row rounded-[3rem] overflow-hidden bg-white shadow-xl ring-1 ring-black/5">
          <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
            <h2 className="text-3xl lg:text-5xl font-extrabold text-[#3A4A4F] mb-8 tracking-tight">
              Visítanos.
            </h2>
            <div className="space-y-10 mb-12">
              <div className="flex gap-6">
                <div className="text-[#11B7B5]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#3A4A4F]/40 mb-2">Ubicación</h4>
                  <p className="text-lg font-bold text-[#3A4A4F]">
                    Del Maestro esq. Defensa Nacional<br />
                    Salto del Guairá, Paraguay
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-[#11B7B5]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#3A4A4F]/40 mb-2">Horarios</h4>
                  <p className="text-lg font-bold text-[#3A4A4F]">Lunes a Viernes<br />Bajo agendamiento</p>
                </div>
              </div>
            </div>
            <a 
              href="https://www.google.com/maps/search/Del+Maestro+esq.+Defensa+Nacional+Salto+del+Guaira" 
              target="_blank" 
              className="btn-primary py-5 rounded-full font-bold uppercase tracking-widest text-[13px] text-center"
            >
              Cómo llegar
            </a>
          </div>
          <div className="lg:w-1/2 h-[400px] lg:h-auto grayscale hover:grayscale-0 transition-all duration-1000">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14614.949397940263!2d-54.305609!3d-24.032174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDAxJzU1LjgiUyA1NMKwMTgnMjAuMiJX!5e0!3m2!1ses!2spy!4v1614123456789!5m2!1ses!2spy" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Google Maps DASAN"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
