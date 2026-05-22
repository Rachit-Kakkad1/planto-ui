import { topSellingProducts } from "../../data/topSellingProducts";
import ProductCard from "./ProductCard";

function TopSellingSection() {
  return (
    <section className="relative overflow-hidden py-10 md:py-16">
      {/* Section title */}
      <div className="flex justify-center mb-8 md:mb-16">
        <div className="relative inline-flex items-center justify-center px-10 lg:px-16 py-2 lg:py-4">
          {/* Left Bracket (Bottom-Left) */}
          <svg
            className="absolute left-0 bottom-0 h-[70%] w-[50px] lg:w-[70px]"
            preserveAspectRatio="none"
            viewBox="0 0 60 60"
          >
            <defs>
              <linearGradient
                id="gradTopSellingLeft"
                x1="0%"
                y1="100%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#6BBF47" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.0)" />
              </linearGradient>
            </defs>
            <path
              d="M 1.5 0 L 1.5 45 Q 1.5 58.5 15 58.5 L 60 58.5"
              fill="none"
              stroke="url(#gradTopSellingLeft)"
              strokeWidth="3"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* Right Bracket (Top-Right) */}
          <svg
            className="absolute right-0 top-0 h-[70%] w-[50px] lg:w-[70px]"
            preserveAspectRatio="none"
            viewBox="0 0 60 60"
          >
            <defs>
              <linearGradient
                id="gradTopSellingRight"
                x1="100%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#6BBF47" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.0)" />
              </linearGradient>
            </defs>
            <path
              d="M 0 1.5 L 45 1.5 Q 58.5 1.5 58.5 15 L 58.5 60"
              fill="none"
              stroke="url(#gradTopSellingRight)"
              strokeWidth="3"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <span className="text-white text-3xl md:text-4xl lg:text-[55px] font-bold text-center drop-shadow-lg leading-tight relative z-10">
            Our Top Selling
          </span>
        </div>
      </div>

      {/* Row 1 — first 3 products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4 lg:px-12 xl:px-16 mb-8 lg:mb-12">
        {topSellingProducts.slice(0, 3).map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>

      {/* Row 2 — last 3 products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4 lg:px-12 xl:px-16 mt-0">
        {topSellingProducts.slice(3, 6).map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
}

export default TopSellingSection;
