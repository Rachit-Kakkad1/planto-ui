import Navbar from "../layout/Navbar";
import HeroContent from "./HeroContent";
import TestimonialCard from "./TestimonialCard";
import PlantSliderCard from "./PlantSliderCard";
import TrendyPlantsSection from "../products/TrendyPlantsSection";

const HERO_BG_URL =
  "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/n4iBIQ3cmY/zz0ukgya_expires_30_days.png";

function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center pt-0 pb-8 lg:pb-10 xl:pb-[51px] mb-10 md:mb-[143px]"
      style={{ backgroundImage: `url(${HERO_BG_URL})` }}
    >
      <Navbar />

      <div className="relative min-h-[50vh] lg:min-h-[85vh] px-4 md:px-8 lg:px-[40px] xl:px-[57px] pb-8 lg:pb-0">
        <HeroContent />
        <TestimonialCard />
        <PlantSliderCard />
      </div>

      {/* Trendy Plants nested inside the hero background container */}
      <TrendyPlantsSection />
    </section>
  );
}

export default HeroSection;
