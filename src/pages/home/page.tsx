import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AppPromoSection from './components/AppPromoSection';
import DeliveredSection from './components/DeliveredSection';
import DriveFreeSection from './components/DriveFreeSection';
import HowItWorksSection from './components/HowItWorksSection';
import CarsSection from './components/CarsSection';
import ReviewsSection from './components/ReviewsSection';
import SustainabilitySection from './components/SustainabilitySection';
import BusinessSection from './components/BusinessSection';
import AppDownloadSection from './components/AppDownloadSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF8F4]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      <Navbar />
      <HeroSection />
      <AppPromoSection />
      <DeliveredSection />
      <DriveFreeSection />
      <HowItWorksSection />
      <CarsSection />
      <ReviewsSection />
      <SustainabilitySection />
      <BusinessSection />
      <AppDownloadSection />
      <Footer />
    </div>
  );
}
