
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-[100vh] flex items-center pt-32 lg:pt-0 overflow-hidden bg-[#F5EFE7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 z-10">
            <div className="inline-flex items-center space-x-3 mb-8">
              <span className="w-12 h-[1px] bg-[#11B7B5]"></span>
              <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-[#11B7B5]">
                15 años de experiencia
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-[5.5rem] font-extrabold text-[#3A4A4F] mb-8 tracking-tighter leading-[1.1]">
              Una sonrisa <br />
              <span className="inline-block text-white italic px-4 py-1 bg-[#11B7B5] rounded-2xl transform -skew-x-2">saludable</span> <br />
              es bienestar.
            </h1>
            
            <p className="text-lg text-[#6F6F6F] mb-10 max-w-lg leading-relaxed font-medium">
              Atención profesional con enfoque en prevención, estética y resultados duraderos para toda tu familia en Salto del Guairá.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href="https://wa.me/595983583122" 
                className="btn-primary px-10 py-5 rounded-full font-bold text-[14px] uppercase tracking-widest text-center shadow-lg shadow-[#11B7B5]/20"
              >
                Agendar por WhatsApp
              </a>
              <a 
                href="tel:+595983583122" 
                className="flex items-center justify-center border-2 border-[#3A4A4F]/10 text-[#3A4A4F] px-8 py-5 rounded-full font-bold text-[14px] uppercase tracking-widest hover:bg-[#3A4A4F]/5 transition-all"
              >
                Llamar ahora
              </a>
            </div>

            <div className="mt-12 flex items-center space-x-4 opacity-50">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#3A4A4F]">
                R. T.: Dra. Ana Paula Dávalos — R.P.: 4.303
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-all duration-700 bg-[#3A4A4F]/10">
              {/* High resolution clinical image */}
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=90&w=1200" 
                alt="Clínica DASAN Sonrisa" 
                className="w-full h-full object-cover brightness-[1.02]"
              />
              {/* Subtle cinematic overlay to mask any potential scaling artifacts */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3A4A4F]/30 to-transparent pointer-events-none"></div>
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
            </div>
            
            {/* Soft badge element */}
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-[2rem] shadow-xl max-w-[200px] border border-black/5 hidden sm:block -rotate-3 z-20">
              <div className="text-[#11B7B5] font-black text-4xl mb-1 tracking-tighter">98%</div>
              <div className="text-[12px] font-bold text-[#3A4A4F] leading-tight uppercase tracking-widest">
                Pacientes satisfechos
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Background soft decoration */}
      <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-[#ffffff] rounded-full blur-[120px] opacity-60 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
