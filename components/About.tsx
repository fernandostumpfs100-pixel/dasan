
import React from 'react';

const About: React.FC = () => {
  const trustItems = [
    { title: '15 años', desc: 'Salud bucal garantizada.' },
    { title: 'Personalizado', desc: 'Trato humano y cálido.' },
    { title: 'Prevención', desc: 'Foco en el largo plazo.' },
    { title: 'Dra. Ana Paula', desc: 'R.P. 4.303' }
  ];

  return (
    <section id="sobre-dasan" className="section-spacing bg-[#3A4A4F] text-white rounded-[4rem] mx-4 my-20">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="order-2 lg:order-1">
            <div className="relative rounded-[3rem] overflow-hidden aspect-square shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000" 
                alt="Profesional Dental DASAN" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl lg:text-7xl font-extrabold mb-10 italic tracking-tighter text-white">
              El cuidado que <br />
              <span className="text-[#11B7B5]">mereces.</span>
            </h2>
            <p className="text-xl text-white/60 font-medium leading-relaxed mb-12">
              Somos tu aliado en bienestar. Combinamos tecnología avanzada con un trato personalizado para que cada visita sea una experiencia tranquila.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              {trustItems.map((item, i) => (
                <div key={i} className="border-l-2 border-[#11B7B5] pl-6 py-2">
                  <h4 className="font-extrabold text-white text-lg mb-1">{item.title}</h4>
                  <p className="text-sm text-white/40 font-bold uppercase tracking-wider">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-white/5 p-8 rounded-[2rem] border border-white/10 italic text-white/80">
              "¡Prevenir es cuidar tu futuro! En DASAN nos enfocamos en que tu sonrisa sea duradera y brille con confianza."
              <div className="mt-4 flex items-center space-x-3 not-italic">
                <div className="w-8 h-8 rounded-full bg-[#11B7B5] flex items-center justify-center font-bold text-white text-xs">A</div>
                <span className="text-[12px] font-bold uppercase tracking-widest text-white">Dra. Ana Paula Dávalos</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
