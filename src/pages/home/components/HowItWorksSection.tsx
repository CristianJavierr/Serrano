import { useState } from 'react';

const steps = [
  {
    number: '01',
    title: 'Contáctanos',
    description: 'Escríbenos por WhatsApp al 829-974-0294 o llámanos. Dinos las fechas, el aeropuerto o lugar de entrega y el tipo de carro que necesitas.',
    icon: 'ri-whatsapp-line',
  },
  {
    number: '02',
    title: 'Elige tu carro',
    description: 'Te mostramos nuestra flota disponible con precios claros. Sedanes, SUVs, pickups y más. Sin costos ocultos ni sorpresas.',
    icon: 'ri-car-line',
  },
  {
    number: '03',
    title: 'Recibe tu carro',
    description: 'En la fecha acordada te entregamos el carro en el aeropuerto o lugar que elijas, disponibles las 24 horas del día, los 7 días de la semana.',
    icon: 'ri-flight-takeoff-line',
  },
  {
    number: '04',
    title: 'Disfruta y devuelve',
    description: 'Viaja con total libertad. Al terminar, devuelves el carro en el punto acordado. Sin complicaciones, sin papeleos innecesarios.',
    icon: 'ri-check-double-line',
  },
];

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="como-funciona" className="bg-white py-16 md:py-24 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-[#C41E3A] text-sm font-semibold uppercase tracking-widest mb-3">Proceso simple</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-3 md:mb-4">
            Cómo funciona Serrano Rent Car
          </h2>
          <p className="text-[#666] text-sm md:text-base">
            En solo 4 pasos, tu carro listo donde lo necesites
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          {steps.map((step, idx) => (
            <button
              key={step.number}
              onClick={() => setActiveStep(idx)}
              className={`text-left p-5 md:p-6 rounded-2xl transition-all duration-300 cursor-pointer ${
                activeStep === idx
                  ? 'bg-[#C41E3A] text-white'
                  : 'bg-white hover:bg-red-50 border border-gray-100'
              }`}
            >
              <span className={`text-xs font-medium tracking-widest mb-3 block ${activeStep === idx ? 'text-white/60' : 'text-[#999]'}`}>
                {step.number}
              </span>
              <span className={`w-7 h-7 flex items-center justify-center mb-2 ${activeStep === idx ? 'text-white' : 'text-[#C41E3A]'}`}>
                <i className={`${step.icon} text-xl`} />
              </span>
              <h3 className={`text-sm md:text-base font-bold mb-1.5 ${activeStep === idx ? 'text-white' : 'text-[#1A1A1A]'}`}>
                {step.title}
              </h3>
              <p className={`text-xs md:text-sm leading-relaxed ${activeStep === idx ? 'text-white/75' : 'text-[#888]'}`}>
                {step.description}
              </p>
            </button>
          ))}
        </div>

        <div className="flex justify-center gap-2">
          {steps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${activeStep === idx ? 'w-8 bg-[#C41E3A]' : 'w-4 bg-[#CCC]'}`}
            />
          ))}
        </div>

        <div className="mt-10 md:mt-12 text-center">
          <a
            href="https://wa.me/18299740294"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#C41E3A] text-white px-8 py-4 rounded-full text-base font-bold hover:bg-[#A01830] transition-colors cursor-pointer whitespace-nowrap"
          >
            <span className="w-5 h-5 flex items-center justify-center">
              <i className="ri-whatsapp-line text-xl" />
            </span>
            Iniciar mi reserva ahora
          </a>
        </div>
      </div>
    </section>
  );
}
