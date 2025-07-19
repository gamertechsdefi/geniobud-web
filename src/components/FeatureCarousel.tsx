import Image from "next/image";
import React, { useState } from "react";

interface Feature {
  title: string;
  desc: string;
  spiral: string; // spiral image URL
  badge?: string;
}

const features: Feature[] = [
  {
    title: "Smart search",
    desc: "Find information across your docs instantly.",
    spiral: "/images/search-neon.webp",
    badge: "Smart search",
  },
  {
    title: "AI chat",
    desc: "Converse naturally and get instant answers.",
    spiral: "/images/spiral-neon.webp",
    badge: "AI chat",
  },
  {
    title: "Image generation",
    desc: "Generate images with AI.",
    spiral: "/images/image-neon2.webp",
    badge: "Image generation",
  },
  {
    title: "Earn Rewards",
    desc: "Play and earn with AI-powered tools.",
    spiral: "/images/earn-neon.webp",
    badge: "Earn Rewards",
  },
];

export default function FeatureCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? features.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === features.length - 1 ? 0 : c + 1));

  const feature = features[current];

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 py-16">
      {/* Left side: text */}
      <div className="flex-1 flex flex-col justify-center items-start max-w-md px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Unlock the power of limitless AI</h2>
        <p className="mb-8 text-gray-300">GenioBud unlocks the potential of unlimited AI-powered tools in one platform</p>
        <button className="border border-white rounded-lg px-6 py-2 text-white font-mono text-xs tracking-widest bg-black/40 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:text-black transition">SEE HOW IT WORK</button>
        <div className="flex gap-4 mt-8">
          <button onClick={prev} className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 text-white hover:bg-white hover:text-black transition">
            &#8592;
          </button>
          <button onClick={next} className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 text-white hover:bg-white hover:text-black transition">
            &#8594;
          </button>
        </div>
      </div>
      {/* Right side: image + card */}
      <div className="flex-1 flex flex-col items-center justify-center relative max-w-xl">
        {/* Placeholder for neon spiral or SVG */}
        <div className="w-[340px] h-[340px] flex items-center justify-center relative">
          {/* Spiral always centered and behind, unique per feature */}
          <Image src={feature.spiral} alt="spiral" width={500} height={500} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-128 h-128 md:w-164 md:h-164 object-center object-contain z-0 pointer-events-none select-none opacity-90" />
        </div>
        {/* Floating card */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-6 bg-black/80 rounded-2xl px-6 py-4 flex items-center gap-4 shadow-lg border border-gray-700 min-w-[260px]">
          <div className="flex items-center justify-center">
            <p className="font-bold text-white  text-lg">{feature.badge || feature.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
