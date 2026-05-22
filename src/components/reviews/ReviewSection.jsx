import { customerReviews } from "../../data/customerReviews";
import ReviewCard from "./ReviewCard";

function ReviewSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32 px-4 lg:px-12 xl:px-16">
      {/* Ethereal Background Elements */}
      <div className="absolute top-1/2 left-[10%] w-[600px] h-[600px] bg-[#4ADE80]/5 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-[#22C55E]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Section title */}
      <div className="flex justify-center mb-20 lg:mb-28 relative z-10">
        <div className="relative inline-flex items-center justify-center px-10 lg:px-16 py-2 lg:py-4">
          {/* Left Bracket (Bottom-Left) */}
          <svg
            className="absolute left-0 bottom-0 w-8 h-8 lg:w-12 lg:h-12"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M48 48H16C7.16344 48 0 40.8366 0 32V0"
              stroke="url(#paint0_linear_bottom_left_review)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_bottom_left_review"
                x1="0"
                y1="48"
                x2="48"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4ADE80" />
                <stop offset="1" stopColor="#4ADE80" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          <span className="text-white text-3xl md:text-4xl lg:text-[45px] font-bold text-center drop-shadow-[0_0_15px_rgba(74,222,128,0.3)] leading-tight relative z-10 tracking-wide">
            Customer Review
          </span>

          {/* Right Bracket (Top-Right) */}
          <svg
            className="absolute right-0 top-0 w-8 h-8 lg:w-12 lg:h-12"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0H32C40.8366 0 48 7.16344 48 16V48"
              stroke="url(#paint1_linear_top_right_review)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient
                id="paint1_linear_top_right_review"
                x1="48"
                y1="0"
                x2="0"
                y2="48"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4ADE80" />
                <stop offset="1" stopColor="#4ADE80" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Reviews grid — staggered layout via offsetClass */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 w-full max-w-[1300px] mx-auto relative z-10">
        {customerReviews.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </div>
    </section>
  );
}

export default ReviewSection;
