
import React from 'react';

const services = [
  {
    title: 'Odontología Preventiva',
    description: 'Revisiones periódicas y limpiezas profesionales para mantener tu boca sana.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M7 7h10"/><path d="M9 12h6"/><path d="M11 17h2"/></svg>
    )
  },
  {
    title: 'Restauraciones',
    description: 'Devolvemos la funcionalidad y estética a tus dientes con materiales de alta calidad.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18h12"/><path d="M6 14h12"/><path d="M6 10h12"/><path d="M12 2v4"/><path d="M12 18v4"/></svg>
    )
  },
  {
    title: 'Ortodoncia y Ortopedia',
    description: 'Corrección de la alineación dental para una sonrisa perfecta y funcional.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/><path d="m9 10 2 2 4-4"/></svg>
    )
  },
  {
    title: 'Blanqueamiento dental',
    description: 'Tratamientos seguros para iluminar tu sonrisa en pocas sesiones.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813L4.225 9.043l4.945 3.593L7.33 18.5 12 14.82l4.67 3.68-1.84-5.864 4.945-3.593-5.863-.23z"/></svg>
    )
  },
  {
    title: 'Carillas (Lentes)',
    description: 'Transformación estética instantánea con láminas cerámicas de alta precisión.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12a4 4 0 0 1 8 0"/></svg>
    )
  },
  {
    title: 'Implantes',
    description: 'Recupera piezas perdidas con tecnología de vanguardia y resultados naturales.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></svg>
    )
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicios" className="section-spacing bg-[#F5EFE7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl lg:text-6xl font-extrabold text-[#3A4A4F] mb-6 tracking-tight italic">
              Nuestros Servicios
            </h2>
            <p className="text-[#6F6F6F] text-lg font-medium">
              Tratamientos modernos diseñados para cuidar, mejorar y transformar tu sonrisa con el profesionalismo que mereces.
            </p>
          </div>
          <div className="hidden md:block">
            <a href="#contacto" className="text-[#11B7B5] font-bold uppercase tracking-widest text-[13px] border-b-2 border-[#11B7B5] pb-1 hover:text-[#0E8F8D] hover:border-[#0E8F8D] transition-all">
              Ver todos los tratamientos
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group card-soft p-12 hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-14 h-14 bg-[#F5EFE7] text-[#11B7B5] rounded-2xl flex items-center justify-center mb-10 group-hover:bg-[#11B7B5] group-hover:text-white transition-colors duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#3A4A4F] mb-4 tracking-tight leading-tight">
                {service.title}
              </h3>
              <p className="text-[#6F6F6F] leading-relaxed font-medium">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
