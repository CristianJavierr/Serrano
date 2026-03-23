export default function DriveFreeSection() {
  const benefits = [
    { icon: 'ri-whatsapp-line', text: 'Reserva por WhatsApp o teléfono en minutos' },
    { icon: 'ri-flight-takeoff-line', text: 'Entrega directa en el aeropuerto 24/7' },
    { icon: 'ri-bank-card-line', text: 'Aceptamos todas las tarjetas de crédito' },
    { icon: 'ri-shield-check-line', text: 'Vehículos en perfectas condiciones garantizados' },
  ];

  const advantages = [
    { icon: 'ri-time-line', text: 'Atención personalizada sin esperas largas' },
    { icon: 'ri-map-pin-2-line', text: 'Cobertura en toda la República Dominicana' },
    { icon: 'ri-customer-service-2-line', text: 'Soporte al cliente durante todo tu viaje' },
    { icon: 'ri-price-tag-3-line', text: 'Precios competitivos y transparentes' },
  ];

  return (
    <section className="bg-white">
      <div className="px-5 md:px-8 pt-16 md:pt-20 pb-6 md:pb-8 max-w-6xl mx-auto">
        <div className="mb-10 md:mb-16">
          <p className="text-[#C41E3A] text-sm font-semibold uppercase tracking-widest mb-3">Por qué elegirnos</p>
          <h2 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] tracking-tight">
            Tu mejor elección<br />al rentar.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-10 md:mb-16">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-[#1A1A1A] mb-3 md:mb-4 tracking-tight">
              La renta de carros que te encantará
            </h3>
            <p className="text-[#666] text-sm leading-relaxed mb-6 md:mb-8">
              En Serrano Rent Car hacemos que rentar sea fácil y sin complicaciones. Contáctanos, elige tu carro y lo recibimos donde lo necesites en República Dominicana.
            </p>
            <ul className="space-y-4">
              {benefits.map((b) => (
                <li key={b.text} className="flex items-start gap-3">
                  <span className="w-8 h-8 flex items-center justify-center bg-red-50 text-[#C41E3A] rounded-lg mt-0.5 shrink-0">
                    <i className={`${b.icon} text-lg`} />
                  </span>
                  <span className="text-sm text-[#444] leading-relaxed">{b.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold text-[#1A1A1A] mb-3 md:mb-4 tracking-tight">
              Servicio de confianza desde el primer día
            </h3>
            <p className="text-[#666] text-sm leading-relaxed mb-6 md:mb-8">
              Con años de experiencia en el mercado dominicano, Serrano Rent Car se ha consolidado como tu aliado número uno para movilizarte con comodidad y seguridad.
            </p>
            <ul className="space-y-4">
              {advantages.map((o) => (
                <li key={o.text} className="flex items-start gap-3">
                  <span className="w-8 h-8 flex items-center justify-center bg-red-50 text-[#C41E3A] rounded-lg mt-0.5 shrink-0">
                    <i className={`${o.icon} text-lg`} />
                  </span>
                  <span className="text-sm text-[#444] leading-relaxed">{o.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-8 pb-4 md:pb-6">
        <div className="w-full h-[240px] md:h-[420px] rounded-2xl md:rounded-3xl overflow-hidden">
          <img
            src="https://readdy.ai/api/search-image?query=modern%20clean%20luxury%20SUV%20Toyota%20or%20Hyundai%20parked%20on%20tropical%20boulevard%20palm%20trees%20Dominican%20Republic%20Caribbean%20coastline%20golden%20hour%20warm%20sunset%20scenic%20road%20photography%20lifestyle%20automotive&width=1400&height=420&seq=serrano-car-main-001&orientation=landscape"
            alt="Flota Serrano Rent Car"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
