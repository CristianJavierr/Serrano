export default function AppPromoSection() {
  const features = [
    {
      icon: 'ri-timer-line',
      title: 'Reserva en minutos',
      desc: 'Escríbenos por WhatsApp y recibe confirmación al instante, sin formularios',
    },
    {
      icon: 'ri-file-check-line',
      title: 'Trámites simples',
      desc: 'Sin colas ni mostradores, todo se resuelve por chat desde tu celular',
    },
    {
      icon: 'ri-map-pin-2-line',
      title: 'Entrega 24/7',
      desc: 'Te llevamos el carro a cualquier aeropuerto de la República Dominicana',
    },
    {
      icon: 'ri-car-line',
      title: 'Calidad garantizada',
      desc: 'Inspección completa, cobertura incluida y aceptamos tarjetas de crédito',
    },
  ];

  return (
    <section className="bg-white py-5 px-6 md:px-10 lg:px-14">
      {/* Dark rounded card */}
      <div className="bg-[#151515] rounded-3xl overflow-hidden px-10 md:px-14 py-12 md:py-14 flex flex-col lg:flex-row items-center gap-10 lg:gap-0">

        {/* LEFT — Text content */}
        <div className="flex-1 lg:pr-12">
          <h2
            className="text-white font-black leading-tight mb-8"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontFamily: '"Space Grotesk", sans-serif' }}
          >
            Renta tu carro desde<br />donde estés, en minutos
          </h2>

          {/* 2x2 features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#C41E3A]/15 border border-[#C41E3A]/30 shrink-0 mt-0.5">
                  <i className={`${f.icon} text-[#f4677e] text-sm`} />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold mb-0.5">{f.title}</p>
                  <p className="text-white/45 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 mb-8" />

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/18299740294"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 bg-white text-[#151515] text-sm font-bold px-5 py-2.5 rounded-full cursor-pointer hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              <span className="w-4 h-4 flex items-center justify-center text-[#25D366]">
                <i className="ri-whatsapp-line text-base" />
              </span>
              <div>
                <p className="text-[9px] text-gray-400 leading-none mb-0.5 font-normal">Escríbenos por</p>
                <p className="text-sm font-bold leading-none">WhatsApp</p>
              </div>
            </a>
            <a
              href="tel:8299740294"
              className="flex items-center gap-2.5 bg-white/8 border border-white/15 text-white text-sm font-bold px-5 py-2.5 rounded-full cursor-pointer hover:bg-white/15 transition-colors whitespace-nowrap"
            >
              <span className="w-4 h-4 flex items-center justify-center">
                <i className="ri-phone-line text-base" />
              </span>
              <div>
                <p className="text-[9px] text-white/40 leading-none mb-0.5 font-normal">Llámanos al</p>
                <p className="text-sm font-bold leading-none">829-974-0294</p>
              </div>
            </a>
          </div>
        </div>

        {/* RIGHT — Phone mockup */}
        <div className="flex-shrink-0 flex items-center justify-center lg:justify-end w-full lg:w-auto">
          {/* Outer phone shell */}
          <div className="relative" style={{ width: '272px' }}>

            {/* Side buttons left (volume) */}
            <div className="absolute left-0 top-24 w-1 h-7 bg-white/20 rounded-l-sm -translate-x-1" />
            <div className="absolute left-0 top-36 w-1 h-10 bg-white/20 rounded-l-sm -translate-x-1" />
            <div className="absolute left-0 top-48 w-1 h-10 bg-white/20 rounded-l-sm -translate-x-1" />
            {/* Side button right (power) */}
            <div className="absolute right-0 top-32 w-1 h-14 bg-white/20 rounded-r-sm translate-x-1" />

            {/* Phone body */}
            <div
              className="relative rounded-[44px] overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #2a2a2a, #111)',
                padding: '3px',
                boxShadow: '0 40px 100px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.12), 0 0 40px rgba(196,30,58,0.25)',
                height: '560px',
              }}
            >
              {/* Inner screen bezel */}
              <div className="w-full h-full rounded-[42px] overflow-hidden bg-[#ECE5DD] flex flex-col relative" style={{ fontFamily: '"Roboto", sans-serif' }}>

                {/* Dynamic Island */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-black rounded-full z-20" style={{ width: '84px', height: '25px' }} />

                {/* Status bar */}
                <div className="flex items-center justify-between px-6 pt-3 pb-1 bg-[#075E54] relative z-10" style={{ paddingTop: '14px' }}>
                  <span className="text-white text-[10px] font-semibold">10:24</span>
                  <div className="flex items-center gap-1">
                    <i className="ri-signal-wifi-3-line text-white text-[10px]" />
                    <i className="ri-signal-tower-line text-white text-[10px]" />
                    <div className="flex items-center gap-0.5">
                      <div className="w-5 h-2.5 border border-white/80 rounded-sm relative">
                        <div className="absolute inset-0.5 right-1 bg-white rounded-sm" />
                        <div className="absolute -right-0.5 top-1/2 -translate-y-1/2 w-0.5 h-1 bg-white/80 rounded-r-sm" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Header */}
                <div className="bg-[#075E54] px-3 pb-3 pt-2 flex items-center gap-2.5">
                  <button className="w-5 h-5 flex items-center justify-center text-white/80 cursor-pointer">
                    <i className="ri-arrow-left-s-line text-base" />
                  </button>
                  <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white/20 shrink-0">
                    <img
                      src="https://readdy.ai/api/search-image?query=car%20rental%20company%20logo%20icon%20minimalist%20red%20black%20simple%20clean%20professional&width=80&height=80&seq=serrano-wa-avatar&orientation=squarish"
                      alt="Serrano"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-xs font-semibold leading-none truncate">Serrano Rent Car</p>
                    <p className="text-[#b2dfdb] text-[9px] mt-0.5">en línea ahora</p>
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <i className="ri-vidicon-line text-sm" />
                    <i className="ri-phone-line text-sm" />
                    <i className="ri-more-2-fill text-sm" />
                  </div>
                </div>

                {/* Chat wallpaper background */}
                <div
                  className="flex-1 flex flex-col gap-2 px-2.5 py-3 overflow-hidden relative"
                  style={{
                    backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)`,
                    backgroundSize: '14px 14px',
                    backgroundColor: '#E5DDD5',
                  }}
                >
                  {/* Date badge */}
                  <div className="flex justify-center mb-1">
                    <span className="bg-white/70 text-[#555] text-[8px] px-2.5 py-0.5 rounded-full">HOY</span>
                  </div>

                  {/* User message */}
                  <div className="self-end flex flex-col items-end max-w-[82%]">
                    <div className="bg-[#DCF8C6] rounded-2xl rounded-tr-sm px-2.5 py-1.5 relative">
                      <p className="text-[10px] text-[#1A1A1A] leading-relaxed">Hola! Quiero rentar un SUV para Punta Cana del 5 al 10 enero 🙏</p>
                      <div className="flex items-center justify-end gap-0.5 mt-0.5">
                        <span className="text-[7.5px] text-[#8696a0]">10:24</span>
                        <i className="ri-check-double-line text-[#53bdeb] text-[9px]" />
                      </div>
                    </div>
                  </div>

                  {/* Serrano reply */}
                  <div className="self-start max-w-[85%]">
                    <div className="bg-white rounded-2xl rounded-tl-sm px-2.5 py-1.5">
                      <p className="text-[9px] text-[#C41E3A] font-bold mb-0.5">Serrano Rent Car</p>
                      <p className="text-[10px] text-[#1A1A1A] leading-relaxed">¡Hola! Tenemos una Toyota RAV4 2024 disponible. Entrega en PUJ sin costo ✈️</p>
                      <span className="text-[7.5px] text-[#8696a0] block text-right mt-0.5">10:25</span>
                    </div>
                  </div>

                  {/* Car card */}
                  <div className="self-start bg-white rounded-2xl overflow-hidden max-w-[88%] shadow-sm">
                    <div className="w-full overflow-hidden" style={{ height: '72px' }}>
                      <img
                        src="https://readdy.ai/api/search-image?query=Toyota%20RAV4%202024%20white%20clean%20white%20background%20studio%20automotive%20photography%20side%20profile%20elegant&width=320&height=140&seq=rav4-wa-card-v2&orientation=landscape"
                        alt="RAV4"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="px-2.5 py-2 border-t border-gray-50">
                      <p className="text-[10px] font-bold text-[#1A1A1A]">Toyota RAV4 2024</p>
                      <div className="flex items-center justify-between mt-0.5">
                        <p className="text-[9px] text-[#C41E3A] font-semibold">$65 USD / día</p>
                        <span className="text-[7px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full">Disponible</span>
                      </div>
                    </div>
                  </div>

                  {/* User confirm */}
                  <div className="self-end max-w-[70%]">
                    <div className="bg-[#DCF8C6] rounded-2xl rounded-tr-sm px-2.5 py-1.5">
                      <p className="text-[10px] text-[#1A1A1A]">Perfecto, la reservo! 🎉</p>
                      <div className="flex items-center justify-end gap-0.5 mt-0.5">
                        <span className="text-[7.5px] text-[#8696a0]">10:26</span>
                        <i className="ri-check-double-line text-[#53bdeb] text-[9px]" />
                      </div>
                    </div>
                  </div>

                  {/* Serrano final */}
                  <div className="self-start max-w-[85%]">
                    <div className="bg-white rounded-2xl rounded-tl-sm px-2.5 py-1.5">
                      <p className="text-[9px] text-[#C41E3A] font-bold mb-0.5">Serrano Rent Car</p>
                      <p className="text-[10px] text-[#1A1A1A] leading-relaxed">¡Listo! Reserva confirmada. Te esperamos el 5 de enero en PUJ 🚗✅</p>
                      <span className="text-[7.5px] text-[#8696a0] block text-right mt-0.5">10:26</span>
                    </div>
                  </div>
                </div>

                {/* Input bar */}
                <div className="bg-[#F0F2F5] px-2.5 py-2 flex items-center gap-2">
                  <div className="flex-1 bg-white rounded-full px-3 py-2 flex items-center gap-2">
                    <i className="ri-emotion-line text-[#8696a0] text-xs" />
                    <span className="text-[9px] text-[#8696a0] flex-1">Mensaje</span>
                    <i className="ri-attachment-2 text-[#8696a0] text-xs" />
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#00a884] shrink-0">
                    <i className="ri-mic-line text-white text-xs" />
                  </div>
                </div>

                {/* Home indicator */}
                <div className="bg-[#F0F2F5] pb-1 flex justify-center">
                  <div className="w-24 h-1 bg-black/20 rounded-full" />
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
