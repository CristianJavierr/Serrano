import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const airports = [
  'Aeropuerto Las Américas (SDQ)',
  'Aeropuerto Punta Cana (PUJ)',
  'Aeropuerto del Cibao (STI)',
  'Aeropuerto Gregorio Luperón (POP)',
  'Aeropuerto El Catey (AZS)',
];

export default function Navbar() {
  const [airportOpen, setAirportOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const logoRef    = useRef<HTMLAnchorElement>(null);
  const linksRef   = useRef<HTMLDivElement>(null);
  const ctaRef     = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ease = 'cubic-bezier(0.52, 0.00, 0.48, 1.00)';
    gsap.set(logoRef.current,  { xPercent: -110 });
    gsap.set(linksRef.current, { xPercent:  110 });
    gsap.set(ctaRef.current,   { xPercent:  110 });

    const onHeroDone = () => {
      gsap.to([logoRef.current, linksRef.current, ctaRef.current], {
        xPercent: 0,
        duration: 1.4,
        ease,
      });
    };

    window.addEventListener('heroAnimationDone', onHeroDone);
    return () => window.removeEventListener('heroAnimationDone', onHeroDone);
  }, []);

  return (
    <nav className="top-0 left-0 right-0 z-50 bg-white">
      <div className="px-5 md:px-8 lg:px-10 h-16 flex items-center">
        <div className="max-w-6xl mx-auto w-full flex items-center justify-between">

          {/* Logo */}
          <div style={{ overflow: 'hidden' }}>
            <a ref={logoRef} href="/" className="cursor-pointer flex items-center shrink-0">
              <img
                src="https://static.readdy.ai/image/93dccc8c4b401910d4e20992b860a0e5/de98e468f876be90505b617013e49860.png"
                alt="Serrano Rent Car"
                className="h-10 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop nav links */}
          <div style={{ overflow: 'hidden' }}>
            <div ref={linksRef} className="hidden md:flex items-center gap-6 text-sm font-semibold text-[#444]">
            <div className="relative">
              <button
                className="flex items-center gap-1 cursor-pointer hover:text-[#1A1A1A] transition-colors whitespace-nowrap"
                onClick={() => setAirportOpen(!airportOpen)}
              >
                Tengo una reserva
                <span className="w-4 h-4 flex items-center justify-center">
                  <i className={`ri-arrow-down-s-line transition-transform ${airportOpen ? 'rotate-180' : ''}`} />
                </span>
              </button>
              {airportOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-xl py-2 min-w-[260px] z-50 shadow-lg border border-gray-100">
                  {airports.map((airport) => (
                    <a key={airport} href="#hero" className="block px-4 py-2.5 text-sm hover:bg-red-50 hover:text-[#C41E3A] transition-colors cursor-pointer" onClick={() => setAirportOpen(false)}>
                      <span className="mr-2">✈️</span>{airport}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a href="#flota" className="hover:text-[#1A1A1A] transition-colors cursor-pointer whitespace-nowrap">Nuestra Flota</a>
            <a href="#como-funciona" className="hover:text-[#1A1A1A] transition-colors cursor-pointer whitespace-nowrap">Cómo Funciona</a>
            <a href="#contacto" className="hover:text-[#1A1A1A] transition-colors cursor-pointer whitespace-nowrap">Contacto</a>
          </div>
          </div>

          {/* Desktop CTA */}
          <div style={{ overflow: 'hidden' }}>
            <div ref={ctaRef} className="hidden md:flex items-center gap-3">
            <a
              href="tel:8299740294"
              className="text-sm font-semibold text-[#444] hover:text-[#1A1A1A] transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5"
            >
              <span className="w-4 h-4 flex items-center justify-center">
                <i className="ri-phone-line" />
              </span>
              829-974-0294
            </a>
            <a
              href="https://wa.me/18299740294"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C41E3A] text-white text-sm px-5 py-2 rounded-full cursor-pointer whitespace-nowrap hover:bg-[#a01830] transition-colors flex items-center gap-2"
            >
              <span className="w-4 h-4 flex items-center justify-center">
                <i className="ri-whatsapp-line" />
              </span>
              Reservar ahora
            </a>
          </div>
          </div>
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center text-[#1A1A1A] cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className={`${menuOpen ? 'ri-close-line' : 'ri-menu-line'} text-xl`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-5 flex flex-col gap-4">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">Aeropuertos con entrega 24/7</p>
            <div className="flex flex-col gap-1">
              {airports.map((airport) => (
                <a key={airport} href="#hero" className="text-sm text-[#444] py-2 hover:text-[#C41E3A] cursor-pointer" onClick={() => setMenuOpen(false)}>
                  ✈️ {airport}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-100 pt-4 flex flex-col gap-2.5">
            <a href="#flota" className="text-sm text-[#444] cursor-pointer hover:text-[#C41E3A]" onClick={() => setMenuOpen(false)}>Nuestra Flota</a>
            <a href="#como-funciona" className="text-sm text-[#444] cursor-pointer hover:text-[#C41E3A]" onClick={() => setMenuOpen(false)}>Cómo Funciona</a>
            <a href="#contacto" className="text-sm text-[#444] cursor-pointer hover:text-[#C41E3A]" onClick={() => setMenuOpen(false)}>Contacto</a>
          </div>
          <div className="border-t border-gray-100 pt-4 flex flex-col gap-3">
            <a href="tel:8299740294" className="text-sm text-[#444] text-center border border-gray-200 py-2.5 rounded-full cursor-pointer flex items-center justify-center gap-2">
              <i className="ri-phone-line" /> 829-974-0294
            </a>
            <a
              href="https://wa.me/18299740294"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C41E3A] text-white text-sm text-center py-2.5 rounded-full cursor-pointer flex items-center justify-center gap-2 hover:bg-[#a01830] transition-colors"
            >
              <i className="ri-whatsapp-line" /> Reservar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
