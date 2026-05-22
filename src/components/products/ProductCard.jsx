import { motion } from "framer-motion";

function ProductCard({ name, description, price, image, cartIcon }) {
  return (
    <div className="relative w-full mt-24 lg:mt-32">
      <motion.div 
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        whileHover="hover"
        className="w-full flex flex-col items-start bg-[#FFFFFF0A] backdrop-blur-md rounded-[40px] lg:rounded-[50px] border border-white/10 p-6 pt-24 lg:p-8 lg:pt-32 shadow-2xl h-full relative z-0 group"
      >
        {/* Hover Shine Layer */}
        <div className="absolute inset-0 overflow-hidden rounded-[40px] lg:rounded-[50px] pointer-events-none z-0">
          <motion.div
            className="absolute top-0 -inset-full h-full w-1/2 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent"
            variants={{
              rest: { left: "-100%" },
              hover: { left: "200%", transition: { duration: 1, ease: "easeInOut" } }
            }}
          />
        </div>
        <img
          src={image}
          className="absolute top-0 -translate-y-[40%] lg:-translate-y-[45%] left-1/2 -translate-x-1/2 w-[115%] lg:w-[110%] max-w-[320px] h-auto object-contain z-10 pointer-events-none drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)]"
          alt={name}
        />
        <span className="text-white text-[20px] lg:text-[22px] font-medium mb-3 relative z-20">
          {name}
        </span>
        <span className="text-white/60 text-[13px] lg:text-[14px] leading-relaxed mb-6 lg:mb-8 w-[95%] relative z-20 line-clamp-2">
          {description}
        </span>
        <div className="flex items-center justify-between w-full mt-auto relative z-20">
          <span className="text-white text-[20px] lg:text-[22px] font-medium">
            {price}
          </span>
          <motion.button 
            variants={{ hover: { scale: 1.05, boxShadow: "0 0 15px rgba(255,255,255,0.2)" } }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center bg-transparent p-2.5 lg:p-3 rounded-[12px] border border-solid border-white/30 hover:bg-white/10 transition-colors"
          >
            <img
              src={cartIcon}
              className="w-4 h-4 lg:w-5 lg:h-5 object-contain opacity-80"
              alt="Add to cart"
            />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default ProductCard;
