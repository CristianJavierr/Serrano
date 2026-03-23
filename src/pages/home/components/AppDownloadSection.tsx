export default function AppDownloadSection() {
  return (
    <section id="contacto" className="bg-white py-16 md:py-20 px-5 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
          <div className="flex-1 w-full">
            <p className="text-[#C41E3A] text-xs tracking-widest uppercase mb-3 md:mb-4 font-semibold">Contáctanos</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-tight mb-5 md:mb-6">
              ¿Listo para<br />tu próxima<br />aventura?
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-4">
              Contáctanos por WhatsApp, llámanos o síguenos en Instagram. Estamos disponibles las 24 horas para atender tu reserva en cualquier aeropuerto de República Dominicana.
            </p>
            <div className="flex items-center gap-3 mb-8 md:mb-10">
              <span className="w-10 h-10 flex items-center justify-center bg-red-50 rounded-full text-[#C41E3A]">
                <i className="ri-verified-badge-line text-xl" />
              </span>
              <div>
                <p className="text-sm font-bold text-[#1A1A1A]">Aceptamos tarjetas de crédito</p>
                <p className="text-xs text-[#888]">Visa, Mastercard, AmEx y más</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a
                href="https://wa.me/18299740294"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:opacity-90 transition-opacity"
              >
                <div className="bg-[#25D366] text-white rounded-xl px-5 py-3.5 flex items-center gap-3 whitespace-nowrap">
                  <span className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-whatsapp-line text-xl" />
                  </span>
                  <div>
                    <p className="text-[10px] text-white/80 leading-none mb-0.5">Escríbenos al</p>
                    <p className="text-sm font-bold">829-974-0294</p>
                  </div>
                </div>
              </a>
              <a
                href="https://www.instagram.com/serranorentcar/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:opacity-90 transition-opacity"
              >
                <div className="bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] text-white rounded-xl px-5 py-3.5 flex items-center gap-3 whitespace-nowrap">
                  <span className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-instagram-line text-xl" />
                  </span>
                  <div>
                    <p className="text-[10px] text-white/80 leading-none mb-0.5">Síguenos en</p>
                    <p className="text-sm font-bold">@serranorentcar</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Desktop: 3 service cards staggered */}
          <div className="hidden md:flex flex-1 items-end justify-center gap-4 h-[500px]">
            <div className="w-[175px] h-[360px] rounded-[2rem] overflow-hidden border border-gray-100 flex-shrink-0 translate-y-8">
              <img
                src="https://readdy.ai/api/search-image?query=white%20SUV%20rental%20car%20interior%20clean%20leather%20seats%20steering%20wheel%20modern%20dashboard%20Caribbean%20Dominican%20Republic%20tropical%20destination%20road%20trip%20perspective%20view%20lifestyle%20photography%20bright%20natural%20light&width=350&height=720&seq=serrano-contact-card-1&orientation=portrait"
                alt="Interior carro de renta"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="w-[175px] h-[420px] rounded-[2rem] overflow-hidden border border-gray-100 flex-shrink-0">
              <img
                src="https://readdy.ai/api/search-image?query=car%20rental%20agent%20in%20red%20polo%20shirt%20handing%20car%20keys%20to%20customer%20at%20tropical%20airport%20exterior%20Dominican%20Republic%20sunny%20day%20professional%20service%20rental%20car%20parked%20background%20lifestyle%20commercial%20photography&width=350&height=840&seq=serrano-contact-card-2&orientation=portrait"
                alt="Entrega de llaves en aeropuerto"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="w-[175px] h-[360px] rounded-[2rem] overflow-hidden border border-gray-100 flex-shrink-0 translate-y-8">
              <img
                src="https://readdy.ai/api/search-image?query=sleek%20black%20SUV%20Toyota%20RAV4%20driving%20on%20tropical%20coastal%20road%20Dominican%20Republic%20Caribbean%20palm%20trees%20ocean%20view%20dramatic%20golden%20hour%20sunset%20cinematic%20automotive%20photography%20lifestyle&width=350&height=720&seq=serrano-contact-card-3&orientation=portrait"
                alt="SUV en carretera del Caribe"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Mobile: single centered image */}
          <div className="md:hidden flex justify-center w-full">
            <div className="w-[200px] h-[400px] rounded-[2rem] overflow-hidden border border-gray-100">
              <img
                src="https://readdy.ai/api/search-image?query=car%20rental%20agent%20in%20red%20polo%20shirt%20handing%20car%20keys%20to%20customer%20at%20tropical%20airport%20exterior%20Dominican%20Republic%20sunny%20day%20professional%20service%20rental%20car%20parked%20background%20lifestyle%20commercial%20photography&width=350&height=840&seq=serrano-contact-card-2&orientation=portrait"
                alt="Entrega de llaves en aeropuerto"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
