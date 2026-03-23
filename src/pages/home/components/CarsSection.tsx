import { useState, useEffect } from 'react';

const cars = [
  {
    name: 'Toyota Corolla',
    price: '45',
    image: 'https://readdy.ai/api/search-image?query=Toyota%20Corolla%20white%20sedan%20car%20isolated%20clean%20studio%20dark%20background%20professional%20automotive%20photography%20sharp%20detail%20front%20angle%20view%20modern%20clean&width=400&height=260&seq=serrano-fleet-001&orientation=landscape',
    seats: 5,
    transmission: 'Auto',
    doors: 4,
    tag: 'Más popular',
    ac: true,
  },
  {
    name: 'Hyundai Tucson',
    price: '65',
    image: 'https://readdy.ai/api/search-image?query=Hyundai%20Tucson%20silver%20SUV%20crossover%20isolated%20dark%20studio%20background%20professional%20automotive%20photography%20three%20quarter%20angle%20view%20sharp%20modern%20elegant&width=400&height=260&seq=serrano-fleet-002&orientation=landscape',
    seats: 5,
    transmission: 'Auto',
    doors: 5,
    tag: null,
    ac: true,
  },
  {
    name: 'Toyota RAV4',
    price: '75',
    image: 'https://readdy.ai/api/search-image?query=Toyota%20RAV4%20black%20premium%20SUV%20isolated%20dark%20charcoal%20studio%20background%20professional%20automotive%20photography%20three%20quarter%20angle%20modern%20sophisticated&width=400&height=260&seq=serrano-fleet-003&orientation=landscape',
    seats: 5,
    transmission: 'Auto',
    doors: 5,
    tag: 'Ideal familias',
    ac: true,
  },
  {
    name: 'Kia Sportage',
    price: '60',
    image: 'https://readdy.ai/api/search-image?query=Kia%20Sportage%20red%20sporty%20SUV%20isolated%20dark%20studio%20background%20professional%20automotive%20photography%20front%20three%20quarter%20angle%20modern%20sleek&width=400&height=260&seq=serrano-fleet-004&orientation=landscape',
    seats: 5,
    transmission: 'Auto',
    doors: 5,
    tag: null,
    ac: true,
  },
  {
    name: 'Toyota Hilux',
    price: '90',
    image: 'https://readdy.ai/api/search-image?query=Toyota%20Hilux%20pickup%20truck%20white%20dark%20studio%20background%20professional%20automotive%20photography%20front%20angle%20powerful%20rugged&width=400&height=260&seq=serrano-fleet-005&orientation=landscape',
    seats: 5,
    transmission: 'Manual',
    doors: 4,
    tag: 'Todo terreno',
    ac: true,
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

export default function CarsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = useVisibleCount();
  const maxIndex = Math.max(cars.length - visibleCount, 0);

  const handlePrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));

  const cardWidth = 100 / visibleCount;
  const gapPx = visibleCount === 1 ? 0 : 20;

  return (
    <section id="flota" className="bg-[#1A1A1A] py-16 md:py-20 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-8 md:mb-10">
          <div>
            <p className="text-[#C41E3A] text-xs font-semibold uppercase tracking-widest mb-2">Nuestra Flota</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-1.5 md:mb-2">
              Carros disponibles
            </h2>
            <p className="text-[#888] text-sm">República Dominicana · Todo el año</p>
          </div>
          <div className="flex gap-2 md:gap-3">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full border transition-all cursor-pointer ${
                currentIndex === 0 ? 'border-[#444] text-[#444]' : 'border-[#C41E3A] text-[#C41E3A] hover:bg-[#C41E3A]/10'
              }`}
            >
              <i className="ri-arrow-left-s-line text-xl" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className={`w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full border transition-all cursor-pointer ${
                currentIndex >= maxIndex ? 'border-[#444] text-[#444]' : 'border-[#C41E3A] text-[#C41E3A] hover:bg-[#C41E3A]/10'
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
            {cars.map((car) => (
              <div
                key={car.name}
                className="flex-none bg-[#252525] rounded-2xl overflow-hidden cursor-pointer group hover:bg-[#2E2E2E] transition-colors"
                style={{ width: `calc(${cardWidth}% - ${gapPx * (visibleCount - 1) / visibleCount}px)` }}
              >
                <div className="relative">
                  {car.tag && (
                    <span className="absolute top-3 left-3 z-10 bg-[#C41E3A] text-white text-xs px-3 py-1 rounded-full font-medium">
                      {car.tag}
                    </span>
                  )}
                  <div className="w-full h-[160px] md:h-[180px] overflow-hidden">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="p-4 md:p-5">
                  <div className="flex items-start justify-between mb-3 md:mb-4">
                    <div>
                      <p className="text-[#888] text-xs mb-1">desde</p>
                      <p className="text-xl md:text-2xl font-bold text-white">
                        ${car.price} <span className="text-sm md:text-base font-normal text-[#888]">USD/día</span>
                      </p>
                    </div>
                    <h3 className="text-sm font-semibold text-white text-right leading-tight">{car.name}</h3>
                  </div>
                  <div className="flex items-center gap-3 md:gap-4 text-[#888] text-xs">
                    <span className="flex items-center gap-1">
                      <span className="w-4 h-4 flex items-center justify-center"><i className="ri-user-line" /></span>
                      {car.seats}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-4 h-4 flex items-center justify-center"><i className="ri-settings-3-line" /></span>
                      {car.transmission}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-4 h-4 flex items-center justify-center"><i className="ri-door-open-line" /></span>
                      {car.doors}p
                    </span>
                    {car.ac && (
                      <span className="flex items-center gap-1">
                        <span className="w-4 h-4 flex items-center justify-center"><i className="ri-temp-cold-line" /></span>
                        A/C
                      </span>
                    )}
                  </div>
                  <a
                    href="https://wa.me/18299740294"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full bg-[#C41E3A] hover:bg-[#A01830] text-white text-sm py-2.5 rounded-xl transition-colors cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
                  >
                    <i className="ri-whatsapp-line" />
                    Reservar este carro
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
