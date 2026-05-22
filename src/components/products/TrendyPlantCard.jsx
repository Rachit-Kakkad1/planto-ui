import { motion } from "framer-motion";

function TrendyPlantCard({
  title,
  description,
  price,
  image,
  cartIcon,
  reversed,
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      whileHover="hover"
      className={`relative bg-[#1A1F18]/80 lg:bg-[#FFFFFF0A] backdrop-blur-xl rounded-[50px] lg:rounded-[90px] xl:rounded-[110px] border border-white/10 w-full lg:w-[90%] xl:w-[85%] mx-auto flex flex-col ${
        reversed ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center justify-between p-6 lg:p-8 xl:p-10 shadow-2xl overflow-visible group ${className}`}
    >
      {/* Hover Shine Layer */}
      <div className="absolute inset-0 overflow-hidden rounded-[50px] lg:rounded-[90px] xl:rounded-[110px] pointer-events-none z-0">
        <motion.div
          className="absolute top-0 -inset-full h-full w-1/2 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          variants={{
            rest: { left: "-100%" },
            hover: { left: "200%", transition: { duration: 1.2, ease: "easeInOut" } }
          }}
        />
      </div>
      
      {/* Plant Image */}
      <div className="w-full lg:w-1/2 flex justify-center relative z-10">
        <img
          src={image}
          className={`w-[70%] sm:w-[60%] lg:w-[125%] xl:w-[120%] h-auto max-w-none object-contain drop-shadow-[0_30px_30px_rgba(0,0,0,0.5)] lg:absolute lg:top-1/2 lg:-translate-y-[55%] ${
            reversed ? "lg:-right-[5%]" : "lg:-left-[10%]"
          } pointer-events-none`}
          alt={title}
        />
      </div>

      {/* Text Content */}
      <div
        className={`w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-2 lg:gap-3 xl:gap-4 mt-6 lg:mt-0 z-10 ${
          reversed ? "lg:pr-16 xl:pr-20" : "lg:pl-16 xl:pl-20"
        } py-0 lg:py-6 xl:py-8`}
      >
        <span className="text-white text-2xl lg:text-[28px] xl:text-[32px] font-bold">
          {title}
        </span>
        <span className="text-white/80 text-[12px] lg:text-[13px] xl:text-[14px] max-w-full lg:max-w-[90%] leading-relaxed">
          {description}
        </span>
        <span className="text-white text-xl lg:text-[22px] xl:text-[24px] font-bold mt-1">
          {price}
        </span>

        <div className="flex items-center gap-3 mt-2">
          <motion.button 
            variants={{ hover: { scale: 1.05, boxShadow: "0px 0px 15px rgba(255,255,255,0.2)" } }}
            transition={{ duration: 0.3 }}
            className="bg-transparent py-2 px-6 lg:py-2.5 lg:px-8 xl:px-10 rounded-[10px] lg:rounded-[12px] border border-solid border-white/60 text-white text-sm lg:text-[15px] hover:bg-white/10 transition-colors"
          >
            Explore
          </motion.button>
          <motion.button 
            variants={{ hover: { scale: 1.05, boxShadow: "0px 0px 15px rgba(255,255,255,0.2)" } }}
            transition={{ duration: 0.3 }}
            className="bg-transparent p-2 lg:p-2.5 rounded-[10px] lg:rounded-[12px] border border-solid border-white/60 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <img
              src={cartIcon}
              className="w-4 h-4 lg:w-5 lg:h-5 object-contain"
              alt="Add to cart"
            />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default TrendyPlantCard;
