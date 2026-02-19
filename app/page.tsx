import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Biography from "@/components/Biography";
import Gallery from "@/components/Gallery";
import HighlightsSection from "@/components/HighlightsSection";
import TechnicalRider from "@/components/TechnicalRider";
import PressKitSection from "@/components/PressKitSection";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#000000] grain-overlay">
      <Navigation />
      <HeroSection />
      <Biography />
      <Gallery />
      <HighlightsSection />
      <TechnicalRider />
      <PressKitSection />
      <Footer />
    </div>
  );
}
