import React, { useState } from "react";

const testimonials = [
  {
    name: "Andre, CEO at COMPANY",
    avatar: "/images/testimonial1.jpg",
    text: "If I could give 11 stars, 12.",
  },
  {
    name: "Jeremy, CEO at COMPANY",
    avatar: "/images/testimonial2.jpg",
    text: "SO SO SO HAPPY WE FOUND YOU GUYS!!!! I'd bet you saved me 100 hours so far.",
  },
  {
    name: "Pam, CEO at COMPANY",
    avatar: "/images/testimonial3.jpg",
    text: "Took some convincing, but now that we're on COMPANY, we're never going back.",
  },
  {
    name: "Fernando, CEO at COMPANY",
    avatar: "/images/testimonial4.jpg",
    text: "It's just the best. Period.",
  },
  {
    name: "Andy, CEO at COMPANY",
    avatar: "/images/testimonial5.jpg",
    text: "I switched and never looked back!",
  },
  {
    name: "Andy, CEO at COMPANY",
    avatar: "/images/testimonial5.jpg",
    text: "I switched and never looked back!",
  },
  {
    name: "Andy, CEO at COMPANY",
    avatar: "/images/testimonial5.jpg",
    text: "I switched and never looked back!",
  },
  {
    name: "Andy, CEO at COMPANY",
    text: "I switched and never looked back!",
  },
  {
    name: "Andy, CEO at COMPANY",
    text: "I switched and never looked back!",
  },
  {
    name: "Andy, CEO at COMPANY",
    text: "I switched and never looked back!",
  },
  {
    name: "Andy, CEO at COMPANY",
    avatar: "/images/testimonial5.jpg",
    text: "I switched and never looked back!",
  },
  {
    name: "Andy, CEO at COMPANY",
    avatar: "/images/testimonial5.jpg",
    text: "I switched and never looked back!",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(2); // Center card

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="w-full py-16 flex flex-col items-center">
      <h1 className="text-3xl md:text-5xl font-bold text-yellow-500 mb-12 text-center">What our users say</h1>
      <div className="relative w-full flex justify-center items-center pb-16" style={{ minHeight: 400 }}>
        {/* Cards with smooth slide and stacking */}
        <div className="relative flex items-center justify-center w-full max-w-6xl h-[340px]">
          {testimonials.map((t, i) => {
            const offset = i - current;
            let style = "";
            let z = 0;
            const cardClass = "";
            let textClass = "";
            let nameClass = "";
            if (i === current) {
              // Center card: deep blue, polygonal, white text, avatar top, centered
              style = "bg-white text-black rounded-xl scale-110 shadow-2xl border-2 border-blue-300 rotate-0";
              textClass = "text-lg font-semibold mb-6 text-center text-black";
              nameClass = "text-sm italic text-black text-center";
              z = 30;
            } else if (i === (current - 1 + testimonials.length) % testimonials.length || i === (current + 1) % testimonials.length) {
              // Side cards: white, thin border, black text, angled, faded, overlap
              style = `${i < current ? '-rotate-8 -ml-24' : 'rotate-8 -mr-24'} bg-white text-black opacity-80 border border-blue-300 shadow-md`;
              textClass = "text-base font-normal text-left text-black mt-12";
              nameClass = "text-xs italic text-gray-500 text-left mt-2";
              z = 10;
            } else {
              // Hide other cards
              style = "hidden";
              z = 0;
            }
            return (
              <div
                key={i}
                className={`transition-all duration-500 ease-in-out absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-8 w-[320px] min-h-[260px] flex flex-col items-center ${style} ${cardClass}`}
                style={{ zIndex: z, opacity: i === current ? 1 : 0.7, pointerEvents: i === current ? 'auto' : 'none' }}
                aria-hidden={i !== current}
              >
                <div className="relative w-full flex flex-col items-center">
                  <p className={textClass}>{t.text}</p>
                  <span className={nameClass}>- {t.name}</span>
                </div>
              </div>
            );
          })}
        </div>
        {/* Both navigation buttons always visible, centered below cards */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-8 z-30">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="text-blue-400 hover:text-blue-600 focus:ring-4 focus:ring-blue-400 rounded-full w-14 h-14 flex items-center justify-center transition"
          >
            <span className="text-3xl">&#8592;</span>
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="text-blue-400 hover:text-blue-600 focus:ring-4 focus:ring-blue-400 rounded-full w-14 h-14 flex items-center justify-center transition"
          >
            <span className="text-3xl">&#8594;</span>
          </button>
        </div>
      </div>
    </section>
  );
}
