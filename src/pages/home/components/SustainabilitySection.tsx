export default function SustainabilitySection() {
  return (
    <section className="bg-white px-5 md:px-8 py-4 md:py-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative w-full h-[480px] md:h-[520px] rounded-2xl md:rounded-3xl overflow-hidden">
          <img
            src="https://readdy.ai/api/search-image?query=fleet%20of%20premium%20clean%20rental%20cars%20lined%20up%20in%20a%20modern%20parking%20lot%20at%20a%20Caribbean%20Dominican%20Republic%20airport%20white%20SUV%20sedan%20pickup%20truck%20shiny%20polished%20vehicles%20ready%20for%20rental%20golden%20hour%20warm%20sunlight%20professional%20automotive%20photography%20wide%20angle%20cinematic&width=1400&height=520&seq=serrano-fleet-safety-001&orientation=landscape"
            alt="Seguridad y confianza Serrano Rent Car"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/35" />

          <div className="relative z-10 h-full flex items-center px-5 md:px-12">
            <div className="w-full max-w-xs md:max-w-sm bg-[#C41E3A]/90 backdrop-blur-sm rounded-2xl p-6 md:p-10">
              <div className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center bg-white rounded-full mb-4 md:mb-6">
                <i className="ri-shield-star-line text-[#C41E3A] text-lg md:text-xl" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug mb-3 md:mb-4">
                Tu seguridad,<br />nuestra prioridad.
              </h2>
              <p className="text-white/85 text-sm leading-relaxed mb-5 md:mb-7">
                Cada vehículo pasa por una inspección completa antes de cada renta. Entregas puntuales, carros en perfectas condiciones y atención personalizada 24/7. 🇩🇴
              </p>
              <a
                href="https://wa.me/18299740294"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#C41E3A] text-sm font-bold px-5 py-2.5 rounded-full cursor-pointer hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                <span className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-whatsapp-line" />
                </span>
                Reservar ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
