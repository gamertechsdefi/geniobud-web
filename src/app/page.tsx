"use client";

import Header from "@/components/Header";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Image from "next/image";
import React from "react";
import { RevealLinks } from "@/components/Footer";
import FeatureCarousel from "@/components/FeatureCarousel";

export default function Home() {

  return (
    <div>
      <Header />
      <main className="">
        {/* landing page section */}
        <section className="min-h-screen px-8 md:px-32 text-center flex flex-col gap-2 items-center justify-center">
          <h1 className="relative text-3xl md:text-6xl pb-2 font-bold bg-gradient-to-b from-blue-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_16px_rgba(96,165,250,0.5)]">
            Explore the Possibilities of Limitless AI through GenioBud
          </h1>
          <p className="md:px-16">Experience the power of AI across different domains with GenioBUd. Upgrade your creativity and productivity with the limitless AI Buddy</p>
            
          <div className="flex flex-row gap-8">
            <a>
              <button className="font-bold text-xl cursor-pointer bg-gradient-to-r from-blue-600 to-blue-800 px-8 py-2 rounded-lg">START FREE</button>
            </a>
          </div>
        </section>

        {/* feature carousel section */}
        <FeatureCarousel />

                
        <section className="px-4 sm:px-8 py-16">
          <h1 className="text-4xl font-bold text-yellow-500 text-center mb-10">Chat Smarter, Not Harder with GenioBud</h1>
          <div className="flex flex-col md:flex-row justify-center gap-8 max-w-6xl mx-auto">
            {/* Feature Card 1 */}
            <div className="flex-1 bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl border-2 border-blue-400/40 p-8 shadow-lg relative group hover:shadow-blue-400/30 transition-all overflow-hidden">
              <h2 className="text-2xl font-bold mb-4 text-white">Ask anything</h2>
              <p className="mb-8 text-gray-200">Lets users quickly find answers to their questions without having to search through multiple sources.</p>
              <div className="flex items-center justify-between">
                <button className="text-xs font-bold tracking-wider text-white uppercase opacity-80 group-hover:opacity-100 transition">Explore more →</button>
              </div>
            </div>
            {/* Feature Card 2 */}
            <div className="flex-1 bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl border-2 border-blue-400/40 p-8 shadow-lg relative group hover:shadow-blue-400/30 transition-all overflow-hidden">
              <h2 className="text-2xl font-bold mb-4 text-white">Improve everyday</h2>
              <p className="mb-8 text-gray-200">The app uses natural language processing to understand user queries and provide accurate and helpful responses.</p>
              <div className="flex items-center justify-between">
                <button className="text-xs font-bold tracking-wider text-white uppercase opacity-80 group-hover:opacity-100 transition">Explore more →</button>
              </div>
            </div>
            {/* Feature Card 3 */}
            <div className="flex-1 bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl border-2 border-blue-400/40 p-8 shadow-lg relative group hover:shadow-blue-400/30 transition-all overflow-hidden">
              <h2 className="text-2xl font-bold mb-4 text-white">Connect everywhere</h2>
              <p className="mb-8 text-gray-200">Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.</p>
              <div className="flex items-center justify-between">
                <button className="text-xs font-bold tracking-wider text-white uppercase opacity-80 group-hover:opacity-100 transition">Explore more →</button>
              </div>
            </div>
          </div>
        </section>

        {/* features section - new modern UI */}

        {/* AI Media Section (step 1 skeleton) */}
        <section className="bg-blue-900  w-full max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-yellow-500 text-center">Generate unlimited images </h1>
          <div className="flex flex-col md:flex-row gap-10">
            {/* Left: Photo Editing Card */}
            <div className="flex-1 bg-[#181A20] rounded-3xl p-8 flex flex-col items-start shadow-xl relative min-h-[420px]">
              {/* Chat bubble */}
              <div className="absolute left-10 top-8 bg-black text-white px-6 py-4 rounded-xl text-sm font-mono shadow-lg z-10">
                Hey GenioBud, generate me<br />a samurai
              </div>
              {/* Placeholder for image */}
              <div className="w-full h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center mt-16 mb-6 relative overflow-hidden">
                <Image src="/images/samurai-gen.webp" alt="samurai" width={500} height={500} />
              </div>
              <div>
                <h3 className="text-white text-2xl font-bold mb-2">Image generation</h3>
                <p className="text-gray-400 text-sm">Automatically generate your photos using GenioBud&apos;s Imagine feature</p>
                <button className="text-xs font-bold tracking-wider text-white uppercase opacity-80 group-hover:opacity-100 transition">Coming soon</button>
              </div>
            </div>
            {/* Right: Video Generation Card */}
            <div className="flex-1 bg-[#181A20] rounded-3xl p-8 shadow-xl flex flex-col min-h-[420px]">
              <h3 className="text-white text-3xl font-bold mb-2">PDF & Document Scans</h3>
              <p className="text-gray-400 mb-6 text-sm">Upload your PDFs and documents to GenioBud and get instant insights and analysis.</p>
              <div className="relative bg-[#101014] rounded-2xl flex flex-col items-start mt-auto min-h-[180px] shadow-lg">
                <Image src="/images/pdf-gen.webp" alt="pdf" width={500} height={500} className="relative z-10 h-full w-full" />
              </div>
            </div>
          </div>
        </section>

        <TestimonialCarousel />

        {/* Final Hero/CTA Section */}
        <section className="relative min-h-[480px] flex flex-col items-center justify-center text-center bg-[#0a1633] overflow-hidden">
          {/* Glowing Radial Background */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="glow" cx="50%" cy="50%" r="70%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                <stop offset="60%" stopColor="#0a1633" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0a1633" stopOpacity="1" />
              </radialGradient>
            </defs>
            <rect width="1200" height="600" fill="url(#glow)" />
          </svg>
          <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl mx-auto px-4 py-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Be part of the future of <br />
              <span className="relative inline-block">
                <span className="px-2 py-1 ] rounded-md">GenioBud</span>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">Unleash the power of AI within GenioBud. Upgrade your productivity with GenioBud, the open AI chat app.</p>
            <button className="bg-white text-[#012a63] font-bold px-8 py-3 rounded-xl shadow-lg hover:bg-[#FFD600] hover:text-[#012a63] transition-all text-lg">GET STARTED</button>
          </div>
        </section>
      </main>
      <RevealLinks />
    </div>
  );
}
