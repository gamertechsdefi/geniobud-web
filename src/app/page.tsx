"use client";

import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { FaRobot, FaImage, FaFileAlt, FaGamepad, FaTrophy, FaUsers, FaMedal, FaPuzzlePiece, FaGem, FaUserGraduate, FaLightbulb, FaUsersCog, FaSmile } from 'react-icons/fa';
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { RevealLinks } from "@/components/Footer";

export default function Home() {
  const [shimmerDone, setShimmerDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShimmerDone(true), 3600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <main>
        <Header />
        {/* landing page section */}
        <section className="min-h-screen p-8 text-center flex flex-col gap-2 items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{
              opacity: 1,
              scale: [1, 1.025, 1],
              y: 0,
              textShadow: [
                '0 0 32px #60a5fa, 0 0 64px #818cf8',
                '0 0 48px #818cf8, 0 0 96px #a5b4fc',
                '0 0 32px #60a5fa, 0 0 64px #818cf8'
              ]
            }}
            transition={{
              type: 'spring',
              stiffness: 80,
              damping: 12,
              delay: 0.2,
              scale: { duration: 2, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' },
              textShadow: { duration: 2, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }
            }}
            className="relative text-6xl md:text-8xl font-bold bg-gradient-to-b from-blue-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_16px_rgba(96,165,250,0.5)]"
          >
            <span className={shimmerDone ? undefined : "ai-shimmer"}>UNLEASH AI. EARN REWARDS. CONNECT FREELY</span>
          </motion.h1>
          <style>{`
            .ai-shimmer {
              position: relative;
              display: inline-block;
              overflow: hidden;
            }
            .ai-shimmer::after {
              content: '';
              position: absolute;
              top: 0; left: -75%; width: 50%; height: 100%;
              background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.5) 50%, transparent 100%);
              animation: shimmer 3.5s 1;
            }
            @keyframes shimmer {
              0% { left: -75%; }
              100% { left: 125%; }
            }
          `}</style>
          <p className="">GenioBud is your all-in-one intelligent platform
            built for creators, learners, gamers, and builders. Whether you want to
            chat with AI, generate images, upload PDFs, play and earn, or connect
            with real people across locations — GenioBud gives you unlimited power.</p>
          <div className="flex flex-row gap-8">
            <a>
              <button className="font-bold cursor-pointer bg-white text-black px-8 py-2 rounded-lg">Start free</button>
            </a>
            <Link href="/more" className="font-bold border-2 border-blue-300 px-8 py-2 rounded-lg">Learn more</Link>
          </div>
        </section>

        {/* why section */}
        <section className="px-8">
          <h1 className="text-4xl font-bold text-center mb-4">Why GenioBud?</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: 'UNLIMITED AI, ANYTIME.',
                desc: 'Get access to limitless AI conversations. Brainstorm ideas, get assignments done, learn new skills, generate contents, or chat for fun.'
              },
              {
                title: 'CREATE WITHOUT LIMITS',
                desc: 'From generating AI-powered images to uploading and analyzing PDFs, unleash your imagination.'
              },
              {
                title: 'REAL PLAY TO EARN GAMES',
                desc: 'Dive into a growing library of play-to-earn games, get rewarded for having fun'
              },
              {
                title: 'COMPLETE TASKS, EARN MORE POINTS',
                desc: 'Boost your productivity with a task system that rewards you. Every action you take brings you closer to amazing digital and physical rewards.'
              },
              {
                title: 'REAL TIME NETWORKING',
                desc: 'Connect with others within the GenioBud network in real-time. Find friends, collaborators, and like-minds — wherever they are.'
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.03, boxShadow: '0 0 32px #60a5fa55, 0 0 64px #818cf855' }}
                transition={{ duration: 0.6, delay: i * 0.08, type: 'spring', stiffness: 80, damping: 14 }}
                viewport={{ once: true }}
                className="bg-black/25 rounded-xl border border-blue-400/20 flex flex-col items-start p-4 shadow-lg cursor-pointer transition-all"
              >
                <h2 className="text-2xl font-bold pb-2 bg-gradient-to-r from-blue-200 to-blue-400 bg-clip-text text-transparent drop-shadow">{item.title}</h2>
                <p className="text-white/90">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* features section */}
        <section className="px-4 sm:px-8 py-12">
          <h1 className="text-4xl font-bold text-center mb-8">GenioBud Features</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="bg-gradient-to-br from-blue-900/80 to-blue-700/60 rounded-xl border border-blue-400/30 flex flex-col items-start p-6 shadow-lg">
              <FaRobot className="text-4xl text-blue-300 mb-3" />
              <span className="font-bold text-lg mb-1">Unlimited AI chats & tools</span>
              <span className="text-white/80">Chat, create, and explore with limitless AI power.</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} className="bg-gradient-to-br from-purple-900/80 to-purple-700/60 rounded-xl border border-purple-400/30 flex flex-col items-start p-6 shadow-lg">
              <FaImage className="text-4xl text-purple-300 mb-3" />
              <span className="font-bold text-lg mb-1">Powerful image generation engine</span>
              <span className="text-white/80">Create stunning visuals with advanced AI models.</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="bg-gradient-to-br from-pink-900/80 to-pink-700/60 rounded-xl border border-pink-400/30 flex flex-col items-start p-6 shadow-lg">
              <FaFileAlt className="text-4xl text-pink-300 mb-3" />
              <span className="font-bold text-lg mb-1">Upload & analyze PDFs instantly</span>
              <span className="text-white/80">Get insights and answers from your documents in seconds.</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }} className="bg-gradient-to-br from-green-900/80 to-green-700/60 rounded-xl border border-green-400/30 flex flex-col items-start p-6 shadow-lg">
              <FaGamepad className="text-4xl text-green-300 mb-3" />
              <span className="font-bold text-lg mb-1">Access to real Play-to-Earn games</span>
              <span className="text-white/80">Play, compete, and earn rewards in fun games.</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="bg-gradient-to-br from-yellow-900/80 to-yellow-700/60 rounded-xl border border-yellow-400/30 flex flex-col items-start p-6 shadow-lg">
              <FaTrophy className="text-4xl text-yellow-300 mb-3" />
              <span className="font-bold text-lg mb-1">Task & point-based reward system</span>
              <span className="text-white/80">Complete tasks, earn points, and unlock exclusive rewards.</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} viewport={{ once: true }} className="bg-gradient-to-br from-cyan-900/80 to-cyan-700/60 rounded-xl border border-cyan-400/30 flex flex-col items-start p-6 shadow-lg">
              <FaUsers className="text-4xl text-cyan-300 mb-3" />
              <span className="font-bold text-lg mb-1">Community-based networking and growth</span>
              <span className="text-white/80 ">Connect, collaborate, and grow with a vibrant community.</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} viewport={{ once: true }} className="bg-gradient-to-br from-indigo-900/80 to-indigo-700/60 rounded-xl border border-indigo-400/30 flex flex-col items-start p-6 shadow-lg">
              <FaMedal className="text-4xl text-indigo-300 mb-3" />
              <span className="font-bold text-lg mb-1">Weekly competitions & leaderboard bonuses</span>
              <span className="text-white/80">Climb the leaderboard and win weekly prizes.</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }} viewport={{ once: true }} className="bg-gradient-to-br from-fuchsia-900/80 to-fuchsia-700/60 rounded-xl border border-fuchsia-400/30 flex flex-col items-start p-6 shadow-lg">
              <FaPuzzlePiece className="text-4xl text-fuchsia-300 mb-3" />
              <span className="font-bold text-lg mb-1">Mini-apps and experiences inside one platform</span>
              <span className="text-white/80">Discover and use a suite of powerful mini-apps.</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }} viewport={{ once: true }} className="bg-gradient-to-br from-slate-900/80 to-slate-700/60 rounded-xl border border-slate-400/30 flex flex-col items-start p-6 shadow-lg">
              <FaGem className="text-4xl text-slate-300 mb-3" />
              <span className="font-bold text-lg mb-1">No hidden fees, freemium accessible</span>
              <span className="text-white/80 ">Enjoy premium features with transparent, fair access.</span>
            </motion.div>
          </div>
        </section>

        {/* Who's GenioBud For? section */}
        <section className="px-4 sm:px-8 py-12">
          <h1 className="text-4xl font-bold text-center mb-8">Who’s GenioBud For?</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="bg-gradient-to-br from-blue-800/80 to-blue-600/60 rounded-xl border border-blue-400/30 flex flex-col items-center p-6 shadow-lg">
              <FaUserGraduate className="text-4xl text-blue-200 mb-3" />
              <span className="font-bold text-lg mb-1">Students</span>
              <span className="text-white/80 text-center">Who want a powerful study partner</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} className="bg-gradient-to-br from-green-800/80 to-green-600/60 rounded-xl border border-green-400/30 flex flex-col items-center p-6 shadow-lg">
              <FaGamepad className="text-4xl text-green-200 mb-3" />
              <span className="font-bold text-lg mb-1">Gamers</span>
              <span className="text-white/80 text-center">Ready to monetize their play</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="bg-gradient-to-br from-pink-800/80 to-pink-600/60 rounded-xl border border-pink-400/30 flex flex-col items-center p-6 shadow-lg">
              <FaLightbulb className="text-4xl text-pink-200 mb-3" />
              <span className="font-bold text-lg mb-1">Content Creators</span>
              <span className="text-white/80 text-center">Looking for ideas, assets, and inspiration</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }} className="bg-gradient-to-br from-yellow-800/80 to-yellow-600/60 rounded-xl border border-yellow-400/30 flex flex-col items-center p-6 shadow-lg">
              <FaUsersCog className="text-4xl text-yellow-200 mb-3" />
              <span className="font-bold text-lg mb-1">Entrepreneurs & Developers</span>
              <span className="text-white/80 text-center">Who want real-time collaboration</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="bg-gradient-to-br from-cyan-800/80 to-cyan-600/60 rounded-xl border border-cyan-400/30 flex flex-col items-center p-6 shadow-lg">
              <FaSmile className="text-4xl text-cyan-200 mb-3" />
              <span className="font-bold text-lg mb-1">Everyday Users</span>
              <span className="text-white/80 text-center">Who love tech, community, and fun</span>
            </motion.div>
          </div>
        </section>
      </main>
      <RevealLinks />
    </div>
  );
}
