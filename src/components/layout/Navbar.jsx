import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = ["Home", "Plants Type", "More", "Contact"];
const PLANT_TYPES = ["Indoor Plants", "Outdoor Plants", "Office Plants", "Succulents"];

const ICON_URLS = {
  search:
    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/n4iBIQ3cmY/am4mgv3n_expires_30_days.png",
  cart:
    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/n4iBIQ3cmY/7k8eq66u_expires_30_days.png",
};

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobilePlantsOpen, setIsMobilePlantsOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.lenis?.stop();
    } else {
      document.body.style.overflow = "";
      window.lenis?.start();
    }
    return () => {
      document.body.style.overflow = "";
      window.lenis?.start();
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-center px-4 md:px-8 lg:px-[40px] xl:px-[57px] py-4 lg:py-5 2xl:py-6 mb-4 lg:mb-8 bg-[#1B231680]"
    >
      {/* Brand */}
      <div className="flex items-center gap-2 xl:gap-3 cursor-pointer">
        <img
          src="/logo.png"
          className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
          alt="Planto logo"
        />
        <span className="text-white text-xl lg:text-2xl xl:text-3xl 2xl:text-[34px] font-bold tracking-wide">
          Planto.
        </span>
      </div>

      <div className="flex-1" />

      {/* Desktop nav links */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } }
        }}
        className="hidden lg:flex items-center gap-6 xl:gap-9 2xl:gap-12 relative"
      >
        {NAV_LINKS.map((link) => (
          <div key={link} className="relative group py-4">
            <motion.span
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
              }}
              whileHover={{ scale: 1.05, color: "#4ADE80", textShadow: "0px 0px 10px rgba(74,222,128,0.3)" }}
              className="text-white text-[13px] xl:text-sm 2xl:text-base cursor-pointer transition-colors flex items-center gap-1"
            >
              {link} {link === "Plants Type" && "▾"}
            </motion.span>
            
            {/* Desktop Dropdown for Plants Type */}
            {link === "Plants Type" && (
              <div className="absolute top-full left-0 mt-[-10px] w-48 bg-[#1B2316]/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-0 transition-all duration-300 z-50 shadow-2xl">
                <div className="flex flex-col py-2">
                  {PLANT_TYPES.map((type) => (
                    <span key={type} className="text-white/80 hover:text-[#4ADE80] hover:bg-white/5 px-4 py-2.5 text-[13px] xl:text-sm cursor-pointer transition-colors">
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </motion.div>

      <div className="hidden lg:block flex-1" />

      {/* Desktop icons + Hamburger */}
      <div className="flex items-center gap-5 xl:gap-6 z-50">
        <img
          src={ICON_URLS.search}
          className="hidden lg:block w-[18px] h-[18px] xl:w-[20px] xl:h-[20px] 2xl:w-[24px] 2xl:h-[24px] object-fill cursor-pointer"
          alt="Search"
        />
        <img
          src={ICON_URLS.cart}
          className="hidden lg:block w-[18px] h-[18px] xl:w-[20px] xl:h-[20px] 2xl:w-[24px] 2xl:h-[24px] object-fill cursor-pointer"
          alt="Cart"
        />
        
        {/* Mobile Hamburger (animates to X) */}
        <div 
          className="flex lg:hidden flex-col items-end gap-[6px] 2xl:gap-2 cursor-pointer relative z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <motion.div 
            animate={isMobileMenuOpen ? { rotate: 45, y: 8.5 } : { rotate: 0, y: 0 }}
            className="bg-white w-6 lg:w-[26px] xl:w-[28px] 2xl:w-8 h-[2.5px]" 
          />
          <motion.div 
            animate={isMobileMenuOpen ? { rotate: -45, y: 0, width: "1.5rem" } : { rotate: 0, y: 0, width: "1rem" }}
            className="bg-white w-4 lg:w-[18px] xl:w-[20px] 2xl:w-[22px] h-[2.5px]" 
          />
        </div>

        {/* Desktop Hamburger (static) */}
        <div className="hidden lg:flex flex-col items-end gap-[6px] 2xl:gap-2 cursor-pointer">
          <div className="bg-white w-6 lg:w-[26px] xl:w-[28px] 2xl:w-8 h-[2.5px]" />
          <div className="bg-white w-4 lg:w-[18px] xl:w-[20px] 2xl:w-[22px] h-[2.5px]" />
        </div>
      </div>
    </motion.nav>

    {/* Mobile Menu Overlay */}
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 bg-[#1B2316]/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center lg:hidden"
        >
          <div className="flex flex-col items-center gap-6 overflow-y-auto max-h-[80vh] w-full px-6 pb-10 scrollbar-hide">
            {NAV_LINKS.map((link, i) => (
              <div key={link} className="flex flex-col items-center w-full">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  onClick={() => {
                    if (link === "Plants Type") {
                      setIsMobilePlantsOpen(!isMobilePlantsOpen);
                    } else {
                      setIsMobileMenuOpen(false);
                    }
                  }}
                  className="text-white text-2xl font-medium cursor-pointer hover:text-[#4ADE80] transition-colors flex items-center gap-2"
                >
                  {link} {link === "Plants Type" && (isMobilePlantsOpen ? "▴" : "▾")}
                </motion.span>

                {/* Mobile Dropdown for Plants Type */}
                <AnimatePresence>
                  {link === "Plants Type" && isMobilePlantsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col items-center gap-4 mt-6 overflow-hidden w-full"
                    >
                      {PLANT_TYPES.map((type) => (
                        <span 
                          key={type} 
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-white/70 text-lg cursor-pointer hover:text-[#4ADE80] transition-colors"
                        >
                          {type}
                        </span>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-8 mt-6"
            >
              <img src={ICON_URLS.search} className="w-7 h-7" alt="Search" />
              <img src={ICON_URLS.cart} className="w-7 h-7" alt="Cart" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}

export default Navbar;
