import { motion } from "framer-motion";

const QUICK_LINKS = ["Home", "Type's Of plant's", "Contact", "Privacy"];
const SOCIAL_LINKS = ["FB", "TW", "LI"];

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#222B1C] py-16 md:py-24">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-8 px-6 md:px-16 lg:px-24 mb-16 lg:mb-32">
        {/* Brand */}
        <div className="flex flex-col items-start gap-6 lg:gap-8 max-w-full lg:max-w-[400px]">
          <div className="flex items-center gap-4">
            <img
              src="/main_logo.png"
              className="w-[60px] h-[60px] object-contain"
              alt="Planto logo"
            />
            <span className="text-white text-[36px] font-bold">Planto.</span>
          </div>
          <p className="text-white/80 text-[16px] leading-[1.8] font-light">
            Transform your indoor space with our curated collection of premium
            plants. We deliver nature&apos;s finest directly to your door,
            making plant care effortless and stylish.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-start gap-5">
          <span className="text-white text-[20px] font-bold mb-2">
            Quick Link&apos;s
          </span>
          {QUICK_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="text-white/80 text-[16px] hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Newsletter */}
        <div className="flex flex-col items-start gap-5 max-w-full lg:max-w-[450px]">
          <span className="text-white text-[20px] font-bold mb-2">
            For Every Update.
          </span>
          <div className="flex items-center w-full bg-transparent rounded-[4px] border border-white/50 overflow-hidden p-1">
            <input
              type="email"
              placeholder="Enter Email"
              className="bg-transparent text-white placeholder-white/60 text-[15px] px-4 w-full outline-none"
            />
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(255,255,255,0.4)" }}
              transition={{ duration: 0.3 }}
              className="bg-white text-black text-[14px] font-bold px-8 py-3 rounded-[2px] whitespace-nowrap hover:bg-gray-200 transition-colors"
            >
              SUBSCRIBE
            </motion.button>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 px-6 md:px-16 lg:px-24">
        <div className="flex items-center gap-8">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="text-white text-[18px] font-bold hover:text-white/80 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
        <span className="text-white/80 text-[15px] font-light text-center">
          planto © all right reserve
        </span>
      </div>
    </footer>
  );
}

export default Footer;
