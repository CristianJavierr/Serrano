const footerLinks = [
  {
    title: 'Nuestros servicios',
    links: ['Renta de carros', 'Entrega en aeropuertos', 'Renta corporativa', 'Renta por días', 'Renta mensual'],
  },
  {
    title: 'Aeropuertos RD',
    links: ['Las Américas SDQ', 'Punta Cana PUJ', 'Cibao STI', 'Gregorio Luperón POP', 'El Catey AZS'],
  },
  {
    title: 'Flota',
    links: ['Sedanes', 'SUVs', 'Pickups', 'Vehículos de lujo', 'Todos los carros'],
  },
  {
    title: 'Información',
    links: ['Sobre nosotros', 'Cómo funciona', 'Preguntas frecuentes', 'Políticas de renta', 'Contacto'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-12 md:pt-16 pb-8 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10 mb-10 md:mb-14">
          <div className="md:col-span-1">
            <img
              src="https://static.readdy.ai/image/93dccc8c4b401910d4e20992b860a0e5/de98e468f876be90505b617013e49860.png"
              alt="Serrano Rent Car"
              className="h-16 w-auto object-contain mb-3"
            />
            <p className="text-sm text-[#888] leading-relaxed mb-2">
              Tu mejor elección al momento de rentar en República Dominicana 🇩🇴
            </p>
            <p className="text-sm font-bold text-[#1A1A1A] mb-1">
              <a href="tel:8299740294" className="hover:text-[#C41E3A] transition-colors cursor-pointer">
                829-974-0294
              </a>
            </p>
            <p className="text-xs text-[#888] mb-5">Disponible 24/7 · Todos los aeropuertos</p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/serranorentcar/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center text-[#888] hover:text-[#C41E3A] transition-colors cursor-pointer"
              >
                <i className="ri-instagram-line text-lg" />
              </a>
              <a
                href="https://wa.me/18299740294"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center text-[#888] hover:text-[#25D366] transition-colors cursor-pointer"
              >
                <i className="ri-whatsapp-line text-lg" />
              </a>
              <a
                href="https://www.facebook.com/serranorentcar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center text-[#888] hover:text-[#1A1A1A] transition-colors cursor-pointer"
              >
                <i className="ri-facebook-circle-line text-lg" />
              </a>
            </div>
          </div>

          <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            {footerLinks.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-4">
                  {col.title}
                </p>
                <ul className="space-y-2.5 md:space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-[#888] hover:text-[#C41E3A] transition-colors cursor-pointer">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-[#E0DDD5] pt-6 md:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#AAA]">
            © 2025 Serrano Rent Car. Todos los derechos reservados. República Dominicana 🇩🇴
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="#" className="text-xs text-[#AAA] hover:text-[#666] transition-colors cursor-pointer">Política de privacidad</a>
            <a href="#" className="text-xs text-[#AAA] hover:text-[#666] transition-colors cursor-pointer">Términos de uso</a>
            <a href="#" className="text-xs text-[#AAA] hover:text-[#666] transition-colors cursor-pointer">Política de renta</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
