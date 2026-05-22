const TESTIMONIAL = {
  avatar:
    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/n4iBIQ3cmY/r7d1hc8k_expires_30_days.png",
  name: "alena Patel",
  stars:
    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/n4iBIQ3cmY/1kz6d4mk_expires_30_days.png",
  review:
    '"Absolutely love the Calathea I received! The packaging was secure, and the plant arrived in perfectly pristine condition. Highly recommended!"',
};

function TestimonialCard() {
  return (
    <div className="mt-8 lg:mt-12 xl:mt-16 z-20 flex flex-col items-start bg-[#FFFFFF0D] backdrop-blur-md py-4 px-4 lg:py-5 lg:px-5 xl:py-6 xl:px-6 gap-3 rounded-[20px] lg:rounded-[25px] xl:rounded-[30px] border border-solid border-[#FFFFFF15] max-w-full w-full sm:w-auto lg:max-w-[260px] xl:max-w-[300px]">
      <div className="flex items-center gap-3">
        <img
          src={TESTIMONIAL.avatar}
          className="w-8 h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 object-fill rounded-full"
          alt={TESTIMONIAL.name}
        />
        <div className="flex flex-col items-start gap-1">
          <span className="text-white text-xs lg:text-[13px] xl:text-sm">
            {TESTIMONIAL.name}
          </span>
          <img
            src={TESTIMONIAL.stars}
            className="w-[60px] lg:w-[70px] xl:w-[80px] h-auto object-fill"
            alt="Rating stars"
          />
        </div>
      </div>
      <span className="text-white/90 text-[10px] lg:text-[11px] xl:text-xs max-w-full lg:max-w-[220px] xl:max-w-[260px] leading-relaxed">
        {TESTIMONIAL.review}
      </span>
    </div>
  );
}

export default TestimonialCard;
