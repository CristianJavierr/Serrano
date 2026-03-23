const stats = [
  { value: '+500', label: 'Clientes satisfechos' },
  { value: '24/7', label: 'Disponibilidad' },
  { value: '5', label: 'Aeropuertos' },
  { value: '100%', label: 'Vehículos inspeccionados' },
];

export default function BusinessSection() {
  return (
    <section className="bg-[#1A1A1A] py-16 md:py-20 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-12 md:mb-16">
          <div>
            <p className="text-[#C41E3A] text-xs tracking-widest uppercase mb-3 md:mb-4 font-semibold">Empresas y grupos</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-5 md:mb-6">
              Renta corporativa<br />y grupos
            </h2>
            <p className="text-[#AAA] text-sm md:text-base leading-relaxed mb-6 md:mb-8">
              ¿Necesitas varios vehículos para tu empresa, grupo de turismo o evento? Ofrecemos tarifas especiales, facturación a empresas y coordinación logística completa para grupos en toda la República Dominicana.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a
                href="https://wa.me/18299740294"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#C41E3A] text-white text-sm px-6 py-3 rounded-full cursor-pointer hover:bg-[#A01830] transition-colors whitespace-nowrap text-center flex items-center justify-center gap-2"
              >
                <i className="ri-whatsapp-line" />
                Cotizar para mi empresa
              </a>
              <a
                href="tel:8299740294"
                className="border border-[#555] text-white text-sm px-6 py-3 rounded-full cursor-pointer hover:bg-white/10 transition-colors whitespace-nowrap text-center flex items-center justify-center gap-2"
              >
                <i className="ri-phone-line" />
                Llamar ahora
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-[#252525] rounded-2xl p-4 md:p-6 text-center border border-[#333]">
                <p className="text-2xl md:text-3xl font-bold text-[#C41E3A] mb-1">{stat.value}</p>
                <p className="text-[#888] text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-[#2A2A2A] pt-8 md:pt-10">
          <p className="text-[#666] text-xs tracking-widest uppercase text-center mb-6 md:mb-8">
            Aceptamos todos estos métodos de pago
          </p>
          <div className="flex items-center justify-center gap-6 md:gap-12 flex-wrap">
            {['VISA', 'Mastercard', 'American Express', 'Discover', 'Efectivo RD$'].map((p) => (
              <span key={p} className="text-[#888] hover:text-white transition-colors cursor-pointer font-semibold text-sm md:text-base">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
