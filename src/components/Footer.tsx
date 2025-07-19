import React from "react";
import { motion } from "framer-motion";

export const RevealLinks: React.FC = () => {
  return (
    <section className="grid place-content-center gap-2 bg-blue-300 px-4 sm:px-8 py-16 sm:py-24 text-black w-full">
      <FlipLink href="https://x.com/GenioBud">Twitter</FlipLink>
      <FlipLink href="https://t.me/geniobud">Telegram</FlipLink>
      {/* <FlipLink href="#">Facebook</FlipLink>
      <FlipLink href="#">Instagram</FlipLink> */}
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

interface FlipLinkProps {
  children: string;
  href: string;
}

const FlipLink: React.FC<FlipLinkProps> = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase transition-all"
      style={{ lineHeight: 0.75 }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};