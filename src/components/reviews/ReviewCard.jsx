import { motion } from "framer-motion";
import { Star, StarHalf } from "lucide-react";

function ReviewCard({ name, avatar, rating, review, offsetClass }) {
  return (
    <motion.div 
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
      className={`relative group ${offsetClass} rounded-[40px]`}
      whileHover="hover"
      initial="rest"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#4ADE80]/20 to-transparent rounded-[40px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Hover Shine Layer */}
      <div className="absolute inset-0 overflow-hidden rounded-[40px] pointer-events-none z-0">
        <motion.div
          className="absolute top-0 -inset-full h-full w-1/2 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          variants={{
            rest: { left: "-100%" },
            hover: { left: "200%", transition: { duration: 1, ease: "easeInOut" } }
          }}
        />
      </div>

      <div className="relative flex flex-col h-full bg-[#FFFFFF05] hover:bg-[#FFFFFF08] backdrop-blur-2xl pt-14 pb-8 px-8 lg:pt-16 lg:pb-12 lg:px-10 rounded-[40px] border border-white/10 hover:border-[#4ADE80]/30 transition-all duration-500 transform group-hover:-translate-y-4 group-hover:shadow-[0_40px_80px_-20px_rgba(74,222,128,0.15)] z-10">
        {/* Floating Avatar Badge */}
        <div className="absolute -top-10 lg:-top-12 left-8 lg:left-10 w-20 h-20 lg:w-[96px] lg:h-[96px] rounded-full border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] bg-[#121A15] flex items-center justify-center overflow-hidden z-20 transition-transform duration-500 group-hover:scale-110 group-hover:border-[#4ADE80]/50">
          <img src={avatar} className="w-full h-full object-cover" alt={name} />
        </div>

        {/* Decorative quotation mark */}
        <div className="absolute top-6 right-8 text-[#4ADE80] opacity-5 text-[120px] font-serif leading-none select-none pointer-events-none transform group-hover:scale-110 group-hover:opacity-20 transition-all duration-700">
          &ldquo;
        </div>

        <div className="flex flex-col items-start gap-2 mb-6 relative z-10">
          <span className="text-white text-[24px] lg:text-[28px] font-bold tracking-wide">
            {name}
          </span>
          <div className="flex items-center gap-1 drop-shadow-[0_0_8px_rgba(253,224,71,0.6)] group-hover:drop-shadow-[0_0_12px_rgba(253,224,71,0.9)] transition-all duration-500">
            {[...Array(5)].map((_, i) => {
              const starValue = i + 1;
              if (rating >= starValue) {
                return <Star key={i} className="w-4 h-4 lg:w-[18px] lg:h-[18px] fill-[#FDE047] text-[#FDE047]" />;
              } else if (rating >= starValue - 0.5) {
                return <StarHalf key={i} className="w-4 h-4 lg:w-[18px] lg:h-[18px] fill-[#FDE047] text-[#FDE047]" />;
              }
              return <Star key={i} className="w-4 h-4 lg:w-[18px] lg:h-[18px] text-white/20" />;
            })}
          </div>
        </div>

        <p className="text-white/80 text-[16px] lg:text-[17px] leading-[1.8] font-light relative z-10">
          {review}
        </p>
      </div>
    </motion.div>
  );
}

export default ReviewCard;
