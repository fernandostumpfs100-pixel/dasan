
import React, { useState } from 'react';

const faqs = [
  {
    q: "¿Cómo agendo una cita?",
    a: "Puedes agendar fácilmente haciendo clic en el botón de WhatsApp o llamando a nuestros números directos. Atendemos con agenda previa para tu mayor comodidad."
  },
  {
    q: "¿Ofrecen tratamientos de Ortodoncia?",
    a: "Sí, contamos con especialistas en Ortodoncia y Ortopedia maxilar para pacientes de todas las edades, con planes personalizados."
  },
  {
    q: "¿Las carillas dentales dañan el diente?",
    a: "No, utilizamos técnicas modernas de mínima invasión (Lentes de contacto dental) que preservan la estructura natural de tu pieza dental."
  },
  {
    q: "¿Cuál es el horario de atención?",
    a: "Estamos ubicados en Salto del Guairá y atendemos de lunes a viernes. Contáctanos para confirmar disponibilidad horaria."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-spacing bg-[#F5EFE7]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#3A4A4F] tracking-tight">
            Consultas Comunes
          </h2>
          <p className="mt-4 text-[#11B7B5] font-bold uppercase tracking-[0.2em] text-xs">
            Despeja tus dudas sobre DASAN
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className={`rounded-[2rem] transition-all duration-300 ${openIndex === i ? 'bg-white shadow-xl ring-1 ring-black/5' : 'bg-transparent'}`}>
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-10 py-8 flex items-center justify-between group"
              >
                <span className={`text-lg font-bold transition-colors ${openIndex === i ? 'text-[#3A4A4F]' : 'text-[#2F2F2F]/70 group-hover:text-[#11B7B5]'}`}>
                  {faq.q}
                </span>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === i ? 'bg-[#11B7B5] text-white rotate-180' : 'bg-[#3A4A4F]/5 text-[#3A4A4F]'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </span>
              </button>
              <div className={`transition-all duration-500 ease-in-out ${openIndex === i ? 'max-h-60 opacity-100 pb-10' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <p className="px-10 text-[#6F6F6F] font-medium leading-relaxed text-md">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
