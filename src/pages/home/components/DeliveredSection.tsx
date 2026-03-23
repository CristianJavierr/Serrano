export default function DeliveredSection() {
  return (
    <section className="bg-white px-6 md:px-10 lg:px-14 py-4 md:py-5">
      <div className="relative w-full h-[320px] md:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden">
        <img
          src="https://readdy.ai/api/search-image?query=stunning%20top%20down%20aerial%20photograph%20Dominican%20Republic%20Hispaniola%20island%20lush%20tropical%20jungle%20mountains%20coastline%20turquoise%20Caribbean%20sea%20glowing%20sunset%20light%20warm%20golden%20tones%20airport%20runway%20visible%20near%20Santo%20Domingo%20Santiago%20Punta%20Cana%20coastal%20cities%20lights%20cinematic%20wide%20panoramic%20geography&width=1400&height=480&seq=serrano-rdmap-v3&orientation=landscape"
          alt="Entregas en aeropuertos 24/7"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-end px-7 md:px-12 pb-7 md:pb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-[#C41E3A] text-white text-xs px-3 py-1 rounded-full font-medium">✈️ Disponible 24/7</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-2 md:mb-3">
              Entregas seguras<br />en todos los aeropuertos
            </h2>
            <p className="text-white/80 text-sm md:text-base flex items-center gap-2">
              <span className="w-4 h-4 flex items-center justify-center shrink-0">
                <i className="ri-map-pin-line" />
              </span>
              SDQ · PUJ · STI · POP · AZS — República Dominicana 🇩🇴
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
