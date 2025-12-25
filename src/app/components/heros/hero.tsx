"use client";

import { Box, Image, Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useMemo } from "react";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Facebook, Instagram, Star } from "lucide-react";
import { AppointmentModal } from "../appointment/AppointmentModal";

// TikTok Icon Component
const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

// Animation variants for better control and consistency
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

// Array of available hero images
const heroImages = [
  "/hero/hero.jpeg",
  "/hero/hero1.jpg",
  "/hero/hero2.jpg",
  "/hero/hero3.jpg",
  "/hero/hero4.jpg",
  "/hero/hero5.jpg",
];

export function Hero() {
  const [opened, { open, close }] = useDisclosure(false);
  const prefersReducedMotion = useReducedMotion();

  // Randomly select a hero image on component mount
  const randomHeroImage = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * heroImages.length);
    return heroImages[randomIndex];
  }, []);

  return (
    <Box className="relative w-full h-screen max-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#F2FAFB] via-[#F0F9FA] to-[#E8F6F8] font-sans" style={{ height: '100vh' }}>

      {/* Floating decorative elements - Hidden on mobile */}
      <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <motion.div
          animate={prefersReducedMotion ? {} : {
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-cyan-200/30 to-teal-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={prefersReducedMotion ? {} : {
            x: [0, -30, 0],
            y: [0, 20, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl"
        />
      </div>

      {/* Main content container */}
      <div className="w-full h-full relative z-10 px-4 sm:px-6 lg:px-6 xl:px-8 flex items-center">
        <div className="mx-auto max-w-[95rem] w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* Left Content */}
            <div className="text-center lg:text-left order-2 lg:order-1 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <Title className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight relative">
                  Your Perfect<br className="hidden sm:block" />{" "}
                  <span className="relative inline-block">
                    <span
                      className="inline-block relative"
                      style={{
                        background: 'linear-gradient(135deg, #19b5af, #33C1B7, #14918c)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      Smile
                    </span>
                    {/* Spark at the top of letter E */}
                    <motion.span
                      initial={{ opacity: 0, scale: 0 }}
                      animate={prefersReducedMotion ? { opacity: 1, scale: 1 } : {
                        opacity: [0.8, 1, 0.8],
                        scale: [0.95, 1.15, 0.95],
                        rotate: [0, 20, -20, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute pointer-events-none"
                      style={{
                        top: '-10px',
                        right: '0px',
                      }}
                    >
                      {/* Glow effect behind spark */}
                      <motion.div
                        animate={prefersReducedMotion ? {} : {
                          opacity: [0.5, 1, 0.5],
                          scale: [1, 1.3, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-0 -z-10 rounded-full"
                        style={{
                          background: 'radial-gradient(circle, rgba(25, 181, 175, 0.6), transparent)',
                          filter: 'blur(8px)',
                          transform: 'scale(1.5)',
                        }}
                      />
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-cyan-400"
                        style={{
                          filter: 'drop-shadow(0 0 8px rgba(25, 181, 175, 1)) drop-shadow(0 0 4px rgba(255, 255, 255, 0.8))',
                        }}
                      >
                        <path
                          d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
                          fill="currentColor"
                          opacity="1"
                        />
                        <path
                          d="M12 6L12.5 9L15.5 9.5L12.5 10L12 13L11.5 10L8.5 9.5L11.5 9L12 6Z"
                          fill="white"
                          opacity="0.9"
                        />
                      </svg>
                      {/* Shimmer effect */}
                      <motion.div
                        animate={prefersReducedMotion ? {} : {
                          opacity: [0, 1, 0],
                          scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8), transparent)',
                          filter: 'blur(4px)',
                        }}
                      />
                    </motion.span>
                  </span>{" "}
                  Begins Here
                </Title>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Text className="text-base md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                  Trust us to enhance your smile and overall oral health through our commitment to delivering high-quality dental services.
                </Text>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-8 flex justify-center lg:justify-start relative"
              >
                {/* Glow effect behind button */}
                <motion.div
                  animate={prefersReducedMotion ? {} : {
                    opacity: [0.5, 0.8, 0.5],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-teal-400/30 blur-2xl rounded-full -z-10"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={open}
                  className="group relative pl-8 pr-2 py-3 bg-gradient-to-r from-[#19b5af] to-[#14918c] text-white rounded-full font-bold text-lg transition-all flex items-center gap-4 shadow-2xl shadow-[#19b5af]/40 hover:shadow-[#19b5af]/60 border-2 border-white/20"
                >
                  <span className="relative z-10">Request a Call</span>
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#19b5af] group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <ArrowRight size={20} />
                  </div>
                  {/* Shimmer effect */}
                  <motion.div
                    animate={prefersReducedMotion ? {} : {
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 rounded-full overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" style={{ transform: 'skewX(-20deg)' }} />
                  </motion.div>
                </motion.button>
              </motion.div>

              {/* Social Icons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center justify-center lg:justify-start gap-4"
              >
                <motion.a
                  href="https://www.facebook.com/HilinaDental"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100"
                  style={{ color: "#1877F2" }}
                  aria-label="Visit our Facebook"
                >
                  <Facebook size={20} strokeWidth={2} />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/drhilinadental/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100"
                  style={{ color: "#E1306C" }}
                  aria-label="Visit our Instagram"
                >
                  <Instagram size={20} strokeWidth={2} />
                </motion.a>
                <motion.a
                  href="https://www.tiktok.com/@drhilina_dentalclinic"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-black shadow-sm border border-gray-100"
                  aria-label="Visit our TikTok"
                >
                  <TikTokIcon size={20} />
                </motion.a>
              </motion.div>
            </div>

            {/* Right Content: Hero Image */}
            <div className="relative order-1 lg:order-2">
              {/* Decorative background shapes */}
              <div className="absolute -z-10 inset-0 hidden lg:block">
                <motion.div
                  animate={prefersReducedMotion ? {} : {
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -top-10 -right-10 w-64 h-64 bg-gradient-to-br from-cyan-200/40 to-teal-200/40 rounded-full blur-3xl"
                />
                <motion.div
                  animate={prefersReducedMotion ? {} : {
                    rotate: [360, 0],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -bottom-10 -left-10 w-80 h-80 bg-gradient-to-tl from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px]"
              >
                {/* Decorative border frame */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-100/50 via-teal-100/30 to-transparent p-1">
                  <div className="w-full h-full rounded-3xl overflow-hidden bg-white/10 backdrop-blur-sm">
                    {/* Main Hero Image */}
                    <Image
                      src={randomHeroImage}
                      alt="Professional dental care - Patient and dentist"
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                </div>

                {/* Animated border glow */}
                <motion.div
                  animate={prefersReducedMotion ? {} : {
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/20 via-teal-400/30 to-cyan-400/20 blur-xl -z-10"
                />

                {/* Overlay gradient for better text contrast */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

                {/* Rating Badge */}
                <motion.div
                  initial={{ scale: 0, x: 20 }}
                  animate={{ scale: 1, x: 0 }}
                  transition={{ delay: 0.7, type: "spring", bounce: 0.4 }}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/95 backdrop-blur-md rounded-2xl py-2 px-4 sm:py-3 sm:px-6 shadow-2xl border border-white/50 flex items-center gap-3"
                  >
                    <div className="flex items-center gap-0.5 sm:gap-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.7 + i * 0.1 }}
                        >
                          <Star size={14} className="sm:w-4 sm:h-4" fill="#FBBF24" stroke="none" />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>

                {/* Trust Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-r from-cyan-500/90 to-teal-500/90 backdrop-blur-md rounded-xl py-2.5 px-5 shadow-2xl border border-white/30"
                  >
                    <p className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                      <span className="text-lg">✓</span>
                      <span>Trusted by hundreds</span>
                    </p>
                  </motion.div>
                </motion.div>

                {/* Experience Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1, type: "spring", bounce: 0.4 }}
                  className="absolute top-1/2 -right-4 sm:-right-6 lg:-right-8 hidden sm:block z-20"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="bg-white rounded-full p-3 sm:p-4 shadow-2xl border-4 border-cyan-200"
                  >
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-black text-cyan-600 leading-none">5+</div>
                      <div className="text-xs sm:text-sm font-bold text-gray-600 mt-1">Years</div>
                    </div>
                  </motion.div>
                </motion.div>

              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <AppointmentModal opened={opened} onClose={close} />
    </Box>
  );
}