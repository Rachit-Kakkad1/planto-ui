import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const QUICK_LINKS = ["Home", "Type's Of plant's", "Contact", "Privacy"];
const SOCIAL_LINKS = [
  { name: "FB", icon: <FaFacebook size={24} /> },
  { name: "TW", icon: <FaTwitter size={24} /> },
  { name: "LI", icon: <FaLinkedin size={24} /> }
];

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#222B1C] py-10 md:py-14">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-8 px-6 md:px-16 lg:px-24 mb-10 lg:mb-16">
        {/* Brand */}
        <div className="flex flex-col items-start gap-6 lg:gap-8 max-w-full lg:max-w-[400px]">
          <div className="flex items-center cursor-pointer">
            <img
              src="/main_logo.png"
              className="w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-[100px] 2xl:h-[100px] object-contain -ml-2 lg:-ml-4 translate-y-2 lg:translate-y-3 scale-[1.2] lg:scale-[1.4]"
              alt="Planto logo"
            />
            <span className="-ml-2 lg:-ml-5 text-white text-[28px] lg:text-[36px] font-bold tracking-wide">
              Planto.
            </span>
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
              key={link.name}
              href="#"
              className="text-white hover:text-white/80 transition-colors"
            >
              {link.icon}
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
