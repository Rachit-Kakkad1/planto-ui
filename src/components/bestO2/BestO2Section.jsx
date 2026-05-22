import { useState, useEffect } from "react";
import { bestO2Plants } from "../../data/bestO2Plants";
import { motion } from "framer-motion";

const ARROW_ICONS = {
  prev: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/n4iBIQ3cmY/t49a4ja5_expires_30_days.png",
  next: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/n4iBIQ3cmY/24qf2dcw_expires_30_days.png",
};

function BestO2Section() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bestO2Plants.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? bestO2Plants.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bestO2Plants.length);
  };

  const slide = bestO2Plants[currentSlide];

  return (
    <section className="relative overflow-visible py-20 lg:py-32 px-4 lg:px-12 xl:px-16">
      {/* Section title */}
      <div className="flex justify-center mb-28 lg:mb-36 relative z-10">
        <div className="relative inline-flex items-center justify-center px-10 lg:px-12 py-3">
          {/* Left Bracket (Bottom-Left) */}
          <svg
            className="absolute left-0 bottom-0 w-8 h-8 lg:w-10 lg:h-10"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M48 48H16C7.16344 48 0 40.8366 0 32V0"
              stroke="url(#paint0_linear_bottom_left_o2)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_bottom_left_o2"
                x1="0"
                y1="48"
                x2="48"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4ADE80" />
                <stop offset="1" stopColor="#4ADE80" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Right Bracket (Top-Right) */}
          <svg
            className="absolute right-0 top-0 w-8 h-8 lg:w-10 lg:h-10"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0H32C40.8366 0 48 7.16344 48 16V48"
              stroke="url(#paint0_linear_top_right_o2)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_top_right_o2"
                x1="48"
                y1="0"
                x2="0"
                y2="48"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4ADE80" />
                <stop offset="1" stopColor="#4ADE80" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          <span className="text-white text-[28px] lg:text-[34px] font-bold tracking-wide">
            Our Best o2
          </span>
        </div>
      </div>

      {/* Content — Compact Outline Box */}
      <div className="relative w-full max-w-[900px] mx-auto bg-[#FFFFFF05] backdrop-blur-xl border border-white/10 rounded-[30px] lg:rounded-[40px] p-6 lg:py-12 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Plant image — breaks layout with overlay effect */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-start -mt-32 lg:-mt-48 lg:-mb-12 lg:-ml-12 relative z-20 pointer-events-none group">
            {/* Glowing overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#4ADE80]/30 to-transparent blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="relative w-[150%] lg:w-[180%] max-w-[500px] lg:max-w-[800px]">
              {/* Spacer to maintain layout height */}
              <img
                src={bestO2Plants[0].image}
                className="w-full h-auto opacity-0 pointer-events-none"
                alt=""
              />

              {/* Crossfading slider images */}
              {bestO2Plants.map((plant, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out hover:scale-105 pointer-events-auto ${
                    idx === currentSlide
                      ? "opacity-100 z-10"
                      : "opacity-0 z-0"
                  }`}
                >
                  <img
                    src={plant.image}
                    className={`w-full h-full object-contain object-center drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)] transform ${plant.imageScale}`}
                    alt={plant.title}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Info panel */}
          <div className="w-full lg:w-[55%] flex flex-col gap-4 lg:gap-6 relative z-30">
            <h3 className="text-white/90 text-[20px] lg:text-[24px] font-semibold leading-snug">
              {slide.title}
            </h3>

            <div className="flex flex-col gap-4">
              <p className="text-white/70 text-[14px] lg:text-[15px] leading-[1.6] font-light">
                {slide.desc1}
              </p>
              <p className="text-white/70 text-[14px] lg:text-[15px] leading-[1.6] font-light">
                {slide.desc2}
              </p>
            </div>

            {/* Controls Row */}
            <div className="flex items-center justify-between mt-4">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(255,255,255,0.2)" }}
                transition={{ duration: 0.3 }}
                className="px-10 py-3 rounded-[12px] border border-white/30 text-white/90 text-[15px] hover:bg-white/10 transition-colors"
              >
                Explore
              </motion.button>

              <div className="flex items-center gap-6">
                <button
                  onClick={prevSlide}
                  className="opacity-50 hover:opacity-100 transition-opacity"
                >
                  <img
                    src={ARROW_ICONS.prev}
                    className="w-2 lg:w-2.5 h-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                    alt="Previous slide"
                  />
                </button>
                <span className="text-white/80 text-[13px] lg:text-[14px] font-medium tracking-widest tabular-nums">
                  {String(currentSlide + 1).padStart(2, "0")}/
                  {String(bestO2Plants.length).padStart(2, "0")}
                </span>
                <button
                  onClick={nextSlide}
                  className="opacity-50 hover:opacity-100 transition-opacity"
                >
                  <img
                    src={ARROW_ICONS.next}
                    className="w-2 lg:w-2.5 h-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                    alt="Next slide"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BestO2Section;
