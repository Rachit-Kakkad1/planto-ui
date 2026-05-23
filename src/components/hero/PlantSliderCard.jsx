import { useState, useEffect } from "react";
import { plantSlides } from "../../data/plantSlides";
import { motion, AnimatePresence } from "framer-motion";

function PlantSliderCard() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % plantSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % plantSlides.length);
  };

  const slide = plantSlides[currentSlide];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      whileHover="hover"
      className="hidden lg:flex flex-col items-center bg-gradient-to-br from-[#ffffff1a] to-[#ffffff05] backdrop-blur-[10px] absolute top-[60px] xl:top-[80px] right-[15px] xl:right-[40px] rounded-[30px] xl:rounded-[40px] border border-solid border-white/10 z-20 w-[280px] xl:w-[340px] 2xl:w-[380px] pt-12 pb-8 xl:pb-10 shadow-2xl group"
    >
      {/* Hover Shine Layer */}
      <div className="absolute inset-0 overflow-hidden rounded-[30px] xl:rounded-[40px] pointer-events-none z-0">
        <motion.div
          className="absolute top-0 -inset-full h-full w-1/2 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          variants={{
            rest: { left: "-100%" },
            hover: { left: "200%", transition: { duration: 1, ease: "easeInOut" } }
          }}
        />
      </div>

      {/* Plant image — overlaps top of card */}
      <div className="absolute -top-[120px] xl:-top-[150px] w-full flex justify-center transition-opacity duration-500 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            src={slide.image}
            className="w-[90%] xl:w-[95%] max-w-none h-auto object-contain drop-shadow-2xl"
            alt={slide.title}
          />
        </AnimatePresence>
      </div>

      {/* Content padding to make room for image */}
      <div className="mt-[70px] xl:mt-[90px] px-8 xl:px-10 w-full flex flex-col items-start">
        <div className="flex justify-between w-full mb-5 xl:mb-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col items-start"
            >
              <span className="text-[#E0E0E0] text-[12px] xl:text-[14px] block mb-1 xl:mb-2">
                {slide.category}
              </span>
              <span className="text-white text-[20px] xl:text-[26px] font-medium whitespace-nowrap">
                {slide.title}
              </span>
            </motion.div>
          </AnimatePresence>
          <button
            className="text-white text-3xl xl:text-4xl font-normal cursor-pointer hover:opacity-80 transition-opacity p-2 -mr-2 bg-transparent border-none outline-none self-center"
            onClick={nextSlide}
          >
            ›
          </button>
        </div>
        <motion.button
          variants={{ hover: { scale: 1.05, boxShadow: "0px 0px 15px rgba(255,255,255,0.2)" } }}
          transition={{ duration: 0.3 }}
          className="flex items-center bg-transparent py-2.5 px-8 xl:py-3 xl:px-10 mb-8 xl:mb-12 rounded-[10px] xl:rounded-[12px] border border-solid border-white/60 hover:bg-white/10 transition-colors"
          onClick={() => alert(`Buying ${slide.title}!`)}
        >
          <span className="text-white text-[14px] xl:text-[16px]">
            Buy Now
          </span>
        </motion.button>

        {/* Slide indicators */}
        <div className="flex items-center justify-center w-full gap-2">
          {plantSlides.map((_, idx) => (
            <div
              key={idx}
              className={`${
                idx === currentSlide
                  ? "bg-white w-[18px] xl:w-[22px] h-[3px] xl:h-[4px]"
                  : "bg-white/40 w-[6px] xl:w-[8px] h-[6px] xl:h-[8px]"
              } rounded-full transition-all duration-300`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default PlantSliderCard;
