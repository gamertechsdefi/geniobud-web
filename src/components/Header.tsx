'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <motion.header 
      className="mt-4 mx-8 rounded-xl fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-2 sm:mx-8 px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between relative">
          {/* Left: Hamburger on mobile, nav on desktop */}
          <div className="flex items-center">
            <button
              className="sm:hidden p-2 text-white focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Open menu"
            >
              {/* Hamburger icon */}
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
              {/* <nav className="hidden sm:flex items-center space-x-8">
                <motion.a 
                  href="#" 
                  className="text-white/90 hover:text-white transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                >
                  Products
                </motion.a>
                <motion.a 
                  href="#" 
                  className="text-white/90 hover:text-white transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                >
                  History
                </motion.a>
                <motion.a 
                  href="https://t.me/geniobud" 
                  className="text-white/90 hover:text-white transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                >
                  Contact
                </motion.a>
              </nav> */}
          </div>

          {/* Center Logo */}
          <motion.div 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            whileHover={{ scale: 1.1 }}
          >
           <Image src="/images/logo-txt.png" alt="logo" width={120} height={40} className="relative z-10 h-full w-full" />
          </motion.div>

          {/* Right Actions: hidden on mobile */}
          <div className="hidden sm:flex items-center space-x-4">
            <motion.a 
              href="#" 
              className="text-white/90 hover:text-white transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              Sign in
            </motion.a>
            <motion.button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Try free
            </motion.button>
          </div>

          {/* Mobile menu overlay */}
          {menuOpen && (
            <div className="sm:hidden absolute top-16 left-0 w-full bg-black/70 rounded-xl text-white flex flex-col items-start px-6 py-4 z-50 animate-fade-in">
              {/* <a href="#" className="w-full py-2" onClick={() => setMenuOpen(false)}>Products</a>
              <a href="#" className="w-full py-2" onClick={() => setMenuOpen(false)}>History</a>
              <a href="#" className="w-full py-2" onClick={() => setMenuOpen(false)}>Contact</a> */}
              <a href="#" className="w-full text-xl py-2" onClick={() => setMenuOpen(false)}>Sign in</a>
              <button className="bg-blue-600 text-xl font-semibold hover:bg-blue-700 text-white px-6 py-2 rounded-lg w-full" onClick={() => setMenuOpen(false)}>
                Try free
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.header>
  );
}