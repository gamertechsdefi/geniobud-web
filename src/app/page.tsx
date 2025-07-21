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
            <a href="https://t.me/GenioBud_bot">
              <button className="font-bold text-xl cursor-pointer bg-blue-500 px-8 py-2 rounded-lg">START FREE</button>
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
        <section className="bg-blue-900  w-full px-4 md:px-8 py-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-yellow-500 text-center">Unlimited AI Tools </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-8 border-2 bg-white/20 border-blue-300 rounded-xl">
              <p className="flex flex-col gap-2">
                <span className="text-2xl font-bold">Image Generation</span>
                <span>Generate unlimited images for your contents, story telling, content creation limitlessly with the help of your AI Buddy.</span>
                </p>
            </div>
            <div className="p-8 border-2 bg-white/20 border-blue-300 rounded-xl">
              <p className="flex flex-col gap-2">
                <span className="text-2xl font-bold">PDF Upload</span>
                <span>Upload your PDF files and get instant access to unlimited AI-powered tools to enhance your productivity.</span>
                </p>
            </div>
            <div className="p-8 border-2 bg-white/20 border-blue-300 rounded-xl">
              <p className="flex flex-col gap-2">
                <span className="text-2xl font-bold">Real-time Blockchain Analytics</span>
                <span>Get instant access to real-time blockchain analytics to enhance your productivity.</span>
                </p>
            </div>
            <div className="p-8 border-2 bg-white/20 border-blue-300 rounded-xl">
              <p className="flex flex-col gap-2">
                <span className="text-2xl font-bold">Smart Search</span>
                <span>Find information across your docs instantly.</span>
                </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center py-16 px-8 md:px-16">
          <h1 className="text-4xl md:text-6xl font-bold text-center">Connect globally within the intelligence network </h1>
          <Image src="/images/networking.webp" alt="ai-media" width={500} height={500} />
        </section>

        {/* <TestimonialCarousel /> */}

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
            <h1 className="text-4xl text-yellow-500 md:text-6xl font-bold text-white mb-6 leading-tight">
              Be part of the future of <br />
              <span className="relative inline-block">
                <span className="px-2 py-1 ] rounded-md text-yellow-500">GenioBud</span>
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
