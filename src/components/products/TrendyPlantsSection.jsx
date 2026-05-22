import { trendyPlants } from "../../data/trendyPlants";
import TrendyPlantCard from "./TrendyPlantCard";

function TrendyPlantsSection() {
  return (
    <section className="relative overflow-visible px-4 md:px-8 lg:px-[40px] xl:px-[57px] py-12 lg:py-16 xl:py-20">
      {/* Section title */}
      <div className="flex justify-center mb-16 lg:mb-24">
        <div className="relative inline-flex items-center justify-center px-10 lg:px-16 py-2 lg:py-4">
          {/* Left Bracket (Bottom-Left) */}
          <svg
            className="absolute left-0 bottom-0 h-[70%] w-[50px] lg:w-[70px]"
            preserveAspectRatio="none"
            viewBox="0 0 60 60"
          >
            <defs>
              <linearGradient
                id="gradTrendyLeft"
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
              stroke="url(#gradTrendyLeft)"
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
                id="gradTrendyRight"
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
              stroke="url(#gradTrendyRight)"
              strokeWidth="3"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <span className="text-white text-3xl md:text-4xl lg:text-[55px] font-bold text-center drop-shadow-lg leading-tight relative z-10">
            Our Trendy plants
          </span>
        </div>
      </div>

      {/* Trendy plant cards */}
      {trendyPlants.map((plant, index) => (
        <TrendyPlantCard
          key={index}
          title={plant.title}
          description={plant.description}
          price={plant.price}
          image={plant.image}
          cartIcon={plant.cartIcon}
          reversed={plant.reversed}
          className={
            index < trendyPlants.length - 1 ? "mb-16 lg:mb-24" : ""
          }
        />
      ))}
    </section>
  );
}

export default TrendyPlantsSection;
