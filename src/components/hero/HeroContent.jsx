import { motion } from "framer-motion";

function HeroContent() {
  return (
    <div className="flex flex-col items-start mt-4 lg:mt-[60px] xl:mt-[80px] max-w-full lg:max-w-[55%] relative z-10">
      <div className="flex flex-col items-start gap-3 lg:gap-4 xl:gap-5 mb-8 lg:mb-10 xl:mb-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } }
          }}
          className="flex flex-wrap text-[#C6C8C5] text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] font-bold leading-[1.1] lg:whitespace-nowrap overflow-hidden py-2"
        >
          {"Breath Natural".split("").map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50, filter: "blur(10px)", rotateX: -30 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  filter: "blur(0px)", 
                  rotateX: 0,
                  transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
                }
              }}
              style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : "normal" }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
        <motion.span 
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/80 text-sm md:text-[15px] lg:text-[16px] xl:text-[18px] font-normal max-w-full lg:max-w-[85%] xl:max-w-[75%] leading-[1.6]"
        >
          Discover our curated collection of indoor plants to bring vibrant life
          and natural freshness into your home. Elevate your space with
          nature&apos;s touch.
        </motion.span>
      </div>

      {/* CTA Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap items-center gap-4 lg:gap-6 xl:gap-8 mb-6 lg:mb-[30px] xl:mb-[40px]"
      >
        <motion.button
          whileHover="hover"
          initial="rest"
          animate="rest"
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.05, boxShadow: "0px 10px 30px rgba(255,255,255,0.15)" }
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative overflow-hidden flex items-center bg-transparent py-2 px-6 lg:py-2.5 lg:px-8 xl:py-3 xl:px-10 rounded-[10px] lg:rounded-[12px] border border-solid border-white/80 hover:bg-white/10 transition-colors group/btn"
          onClick={() => alert("Pressed!")}
        >
          {/* Sweeping Shine Effect */}
          <motion.div 
            className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            variants={{
              rest: { left: "-100%" },
              hover: { left: "200%", transition: { duration: 0.8, ease: "easeInOut" } }
            }}
          />
          <span className="relative z-10 text-white text-sm lg:text-[15px] xl:text-[16px]">
            Explore
          </span>
        </motion.button>

        <motion.div 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative overflow-hidden flex items-center justify-center w-10 h-10 xl:w-12 xl:h-12 rounded-full border border-solid border-white/80 group-hover:bg-white/10 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all">
            {/* CSS Triangle */}
            <div className="relative z-10 w-0 h-0 border-t-[5px] xl:border-t-[6px] border-t-transparent border-l-[8px] xl:border-l-[10px] border-l-white border-b-[5px] xl:border-b-[6px] border-b-transparent ml-1" />
          </div>
          <span className="text-white text-[13px] xl:text-[15px] group-hover:opacity-80 transition-opacity">
            Live Demo...
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HeroContent;
