import HeroSection from "../components/hero/HeroSection";
import TopSellingSection from "../components/products/TopSellingSection";
import ReviewSection from "../components/reviews/ReviewSection";
import BestO2Section from "../components/bestO2/BestO2Section";
import Footer from "../components/footer/Footer";
import { motion } from "framer-motion";

function ScrollReveal({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
function HomePage() {
  return (
    <div className="flex flex-col bg-white w-full max-w-full">
      <div className="self-stretch bg-[#1B2316]">
        {/* Cinematic Ambient Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,_rgba(74,222,128,0.03),_transparent_70%)] blur-[100px]"
            animate={{ 
              x: [0, 100, 0], 
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3] 
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-[40%] -right-[10%] w-[60%] h-[60%] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.02),_transparent_70%)] blur-[120px]"
            animate={{ 
              x: [0, -100, 0], 
              y: [0, 100, 0],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2] 
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>
        <HeroSection />
        <ScrollReveal>
          <TopSellingSection />
        </ScrollReveal>
        <ScrollReveal>
          <ReviewSection />
        </ScrollReveal>
        <ScrollReveal>
          <BestO2Section />
        </ScrollReveal>
        <ScrollReveal>
          <Footer />
        </ScrollReveal>
      </div>
    </div>
  );
}

export default HomePage;
