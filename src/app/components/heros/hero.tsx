"use client";

import { Box, Image, Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Facebook, Instagram, Star, Twitter } from "lucide-react";
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

export function Hero() {
  const [opened, { open, close }] = useDisclosure(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <Box className="relative w-full min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#F2FAFB] via-[#F0F9FA] to-[#E8F6F8] font-sans">

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
      <div className="w-full relative z-10 px-4 sm:px-6 lg:px-12 xl:px-32 py-8 sm:py-12">
        <div className="mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Title className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
                Your Perfect<br className="hidden sm:block" /> Smile Begins Here
              </Title>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Text className="text-base md:text-xl text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Trust us to enhance your smile and overall oral health through our commitment to delivering high-quality dental services.
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-12 flex justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={open}
                className="group relative pl-8 pr-2 py-2.5 bg-gradient-to-r from-[#19b5af] to-[#14918c] text-white rounded-full font-bold text-lg transition-all flex items-center gap-4 shadow-xl shadow-[#19b5af]/30 hover:shadow-2xl hover:shadow-[#19b5af]/50"
              >
                <span>Request a Call</span>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#19b5af] group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                  <ArrowRight size={20} />
                </div>
              </motion.button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              {[
                { icon: Facebook, color: "#1877F2", label: "facebook" },
                { icon: Twitter, color: "#1DA1F2", label: "twitter" },
                { icon: Instagram, color: "#E1306C", label: "instagram" },
              ].map((social, i) => (
                <motion.button
                  key={i}
                  whileHover={{ y: -5 }}
                  className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100"
                  style={{ color: social.color }}
                  aria-label={`Visit our ${social.label}`}
                >
                  <social.icon size={20} strokeWidth={2} />
                </motion.button>
              ))}
              <motion.button
                whileHover={{ y: -5 }}
                className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-black shadow-sm border border-gray-100"
                aria-label="Visit our tiktok"
              >
                <TikTokIcon size={20} />
              </motion.button>
            </motion.div>
          </div>



          {/* Right Content: Hero Image with Decorations */}
          <div className="flex-1 w-full h-full flex items-center justify-center relative pb-0 lg:pb-0">
             <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInScale}
              className="relative w-[280px] h-[340px] sm:w-[340px] sm:h-[420px] md:w-[420px] md:h-[520px] lg:w-[560px] lg:h-[680px]"
            >
              {/* Masked Container: Background + Girl */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{
                  borderRadius: '40% 60% 60% 40% / 50% 50% 50% 50%',
                  transform: 'translateZ(0)'
                }}
             >
                {/* Beautiful Gradient Background */}
                <motion.div
                  animate={prefersReducedMotion ? {} : {
                    scale: [1, 1.03, 1]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full"
                  style={{
                    background: 'linear-gradient(180deg, #33C1B7 0%, #19b5af 40%, #14918c 80%, #0f6d69 100%)'
                  }}
                />

                {/* Subtle Pattern Overlay */}
                <div className="absolute inset-0 opacity-10 mix-blend-overlay">
                  <div className="absolute top-[15%] left-[20%] w-4 h-4 bg-white rounded-full animate-pulse" style={{ animationDelay: '0s', animationDuration: '3s' }} />
                  <div className="absolute top-[35%] right-[15%] w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }} />
                  <div className="absolute bottom-[30%] left-[15%] w-3.5 h-3.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s', animationDuration: '3.5s' }} />
                </div>

                {/* Floating Tooth Decorations */}
                <motion.div
                  animate={prefersReducedMotion ? {} : {
                    y: [-8, 8, -8],
                    rotate: [-5, 5, -5]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-8 sm:top-12 md:top-16 left-4 sm:left-6 md:left-8 text-white/30"
                >
                  <svg width="28" height="28" className="sm:w-9 sm:h-9 md:w-10 md:h-10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 2c-2 0-3 2.5-3 5 0 3.5 1.5 6 3 6 1.5 0 2-1 2-1s.5 1 2 1c1.5 1.5 3 2 4.5.5C17 12 17 9 17 5c0-3-2-3-4-3-1.5 0-2.5 1-3.5 2C8.5 3 8 2 7 2z" />
                  </svg>
                </motion.div>

                <motion.div
                  animate={prefersReducedMotion ? {} : {
                    y: [8, -8, 8],
                    rotate: [5, -5, 5]
                  }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-[55%] right-6 sm:right-8 md:right-10 text-white/30"
                >
                  <svg width="24" height="24" className="sm:w-8 sm:h-8 md:w-9 md:h-9" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 2c-2 0-3 2.5-3 5 0 3.5 1.5 6 3 6 1.5 0 2-1 2-1s.5 1 2 1c1.5 1.5 3 2 4.5.5C17 12 17 9 17 5c0-3-2-3-4-3-1.5 0-2.5 1-3.5 2C8.5 3 8 2 7 2z" />
                  </svg>
                </motion.div>

                {/* Girl Image */}
                <Image
                    src="/hero/girl.png"
                    alt="Happy Patient"
                  className="relative z-10 w-full h-full object-cover object-center scale-110 translate-y-4"
                />
              </div>

              {/* Bottom Fade for Seamless Integration */}
              <div className="absolute -bottom-2 left-0 w-full h-32 bg-gradient-to-t from-[#F2FAFB] to-transparent z-20 pointer-events-none" />

              {/* Explore More Badge - Hidden on small mobile */}
              <motion.div
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, duration: 0.7, type: "spring", bounce: 0.3 }}
                className="hidden sm:block absolute bottom-8 -left-6 sm:bottom-12 sm:-left-8 md:bottom-16 md:-left-10 lg:bottom-20 lg:-left-14 z-30"
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  className="relative bg-white rounded-full p-1 sm:p-1.5 shadow-xl border border-gray-50"
                >
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex items-center justify-center bg-white rounded-full">
                    {/* Rotating Text */}
                        <motion.div
                      animate={prefersReducedMotion ? {} : { rotate: 360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 p-1"
                        >
                             <svg viewBox="0 0 100 100" className="w-full h-full">
                                <defs>
                          <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                                </defs>
                        <text fontSize="9" className="sm:text-[11px]" letterSpacing="2.5" fontWeight="800">
                          <textPath href="#circlePath" fill="#1f2937">
                            EXPLORE SERVICES • EXPLORE SERVICES •
                                    </textPath>
                                </text>
                             </svg>
                        </motion.div>

                    {/* Center Arrow Icon */}
                    <motion.div
                      className="absolute inset-0 m-auto w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center bg-black rounded-full cursor-pointer"
                      whileHover={{ rotate: 45 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <ArrowRight className="text-white -rotate-45" size={16} strokeWidth={2.5} />
                    </motion.div>
                     </div>
                </motion.div>
                </motion.div>

                 {/* Rating Badge */}
                 <motion.div
                initial={{ scale: 0, x: 20 }}
                animate={{ scale: 1, x: 0 }}
                transition={{ delay: 0.7, type: "spring", bounce: 0.4 }}
                className="absolute top-6 -right-4 sm:top-12 sm:-right-6 md:top-20 md:-right-8 lg:top-28 lg:-right-10 z-30"
              >
                <div className="bg-white rounded-2xl sm:rounded-3xl py-2 px-3 sm:py-3 sm:px-6 shadow-xl border border-gray-50 flex items-center gap-2 sm:gap-4">
                  {/* Avatar */}
                  <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-full border-2 border-gray-100 overflow-hidden bg-gradient-to-br from-cyan-50 to-teal-50">
                    <Image
                      src="https://i.pravatar.cc/100?img=5"
                      className="w-full h-full object-cover"
                      alt="Reviewer"
                    />
                        </div>

                  {/* Rating Info */}
                  <div className="flex flex-col">
                    <div className="flex items-center gap-0.5 sm:gap-1 mb-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} className="sm:w-[14px] sm:h-[14px]" fill="#FBBF24" stroke="none" />
                      ))}
                    </div>
                    <span className="font-bold text-xs sm:text-sm text-gray-900">4.9/5 Rating</span>
                        </div>
                    </div>
                </motion.div>
             </motion.div>
          </div>
        </div>
      </div>

      <AppointmentModal opened={opened} onClose={close} />
    </Box>
  );
}