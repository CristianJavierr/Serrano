import { useState, useEffect } from 'react';

const reviews = [
  {
    name: 'Carlos M.',
    rating: 5,
    date: 'Hace 3 días',
    text: 'Excelente servicio. Me entregaron el carro en el aeropuerto de Punta Cana a las 2 de la madrugada sin ningún problema. El carro estaba limpio y en perfectas condiciones. 100% recomendado.',
    avatar: 'CM',
    trips: 4,
    location: 'Punta Cana',
  },
  {
    name: 'Patricia R.',
    rating: 5,
    date: 'Hace 1 semana',
    text: 'Contraté Serrano Rent Car para mi viaje de negocios a Santiago. Proceso súper fácil por WhatsApp, precio justo y el Hyundai Tucson estaba impecable. Sin duda los mejores.',
    avatar: 'PR',
    trips: 7,
    location: 'Santiago',
  },
  {
    name: 'José A.',
    rating: 5,
    date: 'Hace 2 días',
    text: 'Me sorprendió lo fácil que fue rentar con ellos. Me respondieron en minutos por WhatsApp, confirmaron mi reserva y el carro estuvo puntual en el SDQ. Volveré a usarlos siempre.',
    avatar: 'JA',
    trips: 12,
    location: 'Santo Domingo',
  },
  {
    name: 'Melissa G.',
    rating: 5,
    date: 'Hace 5 días',
    text: 'Vine de vacaciones con mi familia y necesitaba un SUV grande. Serrano Rent Car nos consiguió exactamente lo que pedimos al mejor precio. Atención personalizada y muy profesional.',
    avatar: 'MG',
    trips: 3,
    location: 'Puerto Plata',
  },
  {
    name: 'Roberto S.',
    rating: 5,
    date: 'Hace 2 semanas',
    text: 'La entrega fue a las 6am en el aeropuerto de Las Américas. Puntuales, amables y el carro perfectamente preparado. Aceptan tarjeta lo cual es muy conveniente. Los recomiendo totalmente.',
    avatar: 'RS',
    trips: 9,
    location: 'La Romana',
  },
];

function useVisibleCount() {
  const [count, setCount] = useState(3);
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setCount(1);
      else if (window.innerWidth < 1024) setCount(2);
      else setCount(3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return count;
}

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = useVisibleCount();
  const maxIndex = Math.max(reviews.length - visibleCount, 0);

  const handlePrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));

  const cardWidth = 100 / visibleCount;
  const gapPx = visibleCount === 1 ? 0 : 20;

  return (
    <section className="bg-white py-16 md:py-20 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 md:mb-10">
          <div>
            <p className="text-[#C41E3A] text-xs font-semibold uppercase tracking-widest mb-2">Reseñas</p>
            <h2 className="text-2xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-2">
              Lo que dicen nuestros clientes
            </h2>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="w-4 h-4 flex items-center justify-center text-[#D4AF37]">
                    <i className="ri-star-fill text-sm" />
                  </span>
                ))}
              </div>
              <span className="text-sm text-[#666]">5.0 · +500 clientes satisfechos 🇩🇴</span>
            </div>
          </div>
          <div className="flex gap-2 md:gap-3 shrink-0">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full border transition-all cursor-pointer ${
                currentIndex === 0 ? 'border-[#DDD] text-[#DDD]' : 'border-[#C41E3A] text-[#C41E3A] hover:bg-red-50'
              }`}
            >
              <i className="ri-arrow-left-s-line text-xl" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className={`w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full border transition-all cursor-pointer ${
                currentIndex >= maxIndex ? 'border-[#DDD] text-[#DDD]' : 'border-[#C41E3A] text-[#C41E3A] hover:bg-red-50'
              }`}
            >
              <i className="ri-arrow-right-s-line text-xl" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex gap-5 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(calc(-${currentIndex * cardWidth}% - ${currentIndex * gapPx}px))` }}
          >
            {reviews.map((review) => (
              <div
                key={review.name}
                className="flex-none bg-[#FAFAFA] rounded-2xl p-5 md:p-6 border border-gray-100"
                style={{ width: `calc(${cardWidth}% - ${gapPx * (visibleCount - 1) / visibleCount}px)` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#C41E3A] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      {review.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-sm text-[#1A1A1A]">{review.name}</p>
                      <p className="text-xs text-[#999]">{review.location} · {review.trips} viajes</p>
                    </div>
                  </div>
                  <span className="text-xs text-[#BBB] whitespace-nowrap">{review.date}</span>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} className="w-3.5 h-3.5 flex items-center justify-center text-[#D4AF37]">
                      <i className="ri-star-fill text-xs" />
                    </span>
                  ))}
                </div>
                <p className="text-sm text-[#555] leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
