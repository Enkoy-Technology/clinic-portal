"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ClipboardList, Heart, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const ServiceCard = ({
  image,
  title,
  className,
}: {
  image: string;
  title: string;
  className?: string;
}) => (
  <div className={`relative group overflow-hidden rounded-2xl sm:rounded-[2.5rem] w-full ${className} flex-shrink-0`}>
    <Image
      src={image}
      alt={title}
      width={400}
      height={500}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

    {/* Top Actions - Hidden on mobile */}
    <div className="hidden sm:flex absolute top-4 right-4 gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 text-gray-700">
      <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow">
        <Heart size={18} />
      </button>
      <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow">
        <ArrowUpRight size={18} />
      </button>
    </div>

    {/* Bottom Label */}
    <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6">
      <div className="px-3 py-1.5 sm:px-6 sm:py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-medium text-xs sm:text-sm tracking-wide">
        {title}
      </div>
    </div>
  </div>
);

const serviceColumn1 = [
  {
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800",
    title: "Teeth Whitening",
    height: "h-[300px]"
  },
  {
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
    title: "Dental Surgery",
    height: "h-[400px]"
  },
   {
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800", // Fallback or new URL
    title: "General Checkup",
    height: "h-[320px]"
  },
];

const serviceColumn2 = [
  {
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    title: "Cosmetic Dentistry",
    height: "h-[350px]"
  },
  {
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800",
    title: "Dental Implants",
    height: "h-[320px]"
  },
  {
    image: "https://images.unsplash.com/photo-1677026010083-78ec7f1b84ed?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Orthodontics",
    height: "h-[380px]"
  },
];


const serviceColumn3 = [
  {
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
    title: "Pediatric Dentistry",
    height: "h-[340px]"
  },
  {
    image: "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&fit=crop&q=80&w=800",
    title: "Gum Treatment",
    height: "h-[380px]"
  },
  {
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=800",
    title: "Oral Hygiene",
    height: "h-[300px]"
  },
];

// Mobile: Only 6 unique services (3 per column)
const mobileServicesCol1 = [
  serviceColumn1[0]!, // Teeth Whitening
  serviceColumn1[1]!, // Dental Surgery
  serviceColumn2[0]!, // Cosmetic Dentistry
];

const mobileServicesCol2 = [
  serviceColumn2[1]!, // Dental Implants
  serviceColumn3[0]!, // Pediatric Dentistry
  serviceColumn3[1]!, // Gum Treatment
];


export const DentalServices = () => {
  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">

          {/* Left Side: Infinite Scrolling Masonry */}
          <div className="flex-[1.6] w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden relative">

             {/* White Gradient Overlays for Smooth Fading */}
             <div className="absolute top-0 left-0 w-full h-12 sm:h-16 bg-gradient-to-b from-white to-transparent z-20 pointer-events-none" />
             <div className="absolute bottom-0 left-0 w-full h-12 sm:h-16 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />

             <div className="flex gap-3 sm:gap-4 h-full">
                {/* Column 1 - Scrolling */}
                <div className="w-1/2 sm:w-1/3 relative h-full">
                   {/* Desktop: Full infinite scroll with duplication */}
                   <motion.div
                     animate={{ y: ["0%", "-50%"] }}
                     transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                     className="hidden sm:flex flex-col gap-4 w-full"
                   >
                     {[...serviceColumn1, ...serviceColumn1].map((service, idx) => (
                        <ServiceCard
                           key={`col1-desk-${idx}`}
                           image={service.image}
                           title={service.title}
                           className={service.height}
                        />
                     ))}
                   </motion.div>

                   {/* Mobile: Only 3 unique cards with gentle float animation */}
                   <motion.div
                     animate={{ y: [0, -20, 0] }}
                     transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                     className="flex sm:hidden flex-col gap-3 w-full"
                   >
                     {mobileServicesCol1.map((service, idx) => (
                        <ServiceCard
                           key={`mobile-col1-${idx}`}
                           image={service.image}
                           title={service.title}
                           className={service.height}
                        />
                     ))}
                   </motion.div>
                </div>

                {/* Column 2 - Scrolling (offset animation) */}
                <div className="w-1/2 sm:w-1/3 relative h-full">
                   {/* Desktop: Full infinite scroll with duplication */}
                   <motion.div
                     initial={{ y: "-20%" }}
                     animate={{ y: ["-20%", "-70%"] }}
                     transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                     className="hidden sm:flex flex-col gap-4 w-full"
                   >
                     {[...serviceColumn2, ...serviceColumn2].map((service, idx) => (
                        <ServiceCard
                           key={`col2-desk-${idx}`}
                           image={service.image}
                           title={service.title}
                           className={service.height}
                        />
                     ))}
                   </motion.div>

                   {/* Mobile: Only 3 unique cards with gentle float animation (offset) */}
                   <motion.div
                     animate={{ y: [-20, 0, -20] }}
                     transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                     className="flex sm:hidden flex-col gap-3 w-full"
                   >
                     {mobileServicesCol2.map((service, idx) => (
                        <ServiceCard
                           key={`mobile-col2-${idx}`}
                           image={service.image}
                           title={service.title}
                           className={service.height}
                        />
                     ))}
                   </motion.div>
                </div>

                {/* Column 3 - Scrolling (Hidden on mobile, visible from sm) */}
                <div className="hidden sm:block w-1/3 relative h-full">
                    <motion.div
                     initial={{ y: "-40%" }}
                     animate={{ y: ["-40%", "-90%"] }}
                     transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                     className="flex flex-col gap-4 w-full"
                   >
                      {[...serviceColumn3, ...serviceColumn3].map((service, idx) => (
                        <ServiceCard
                           key={`col3-${idx}`}
                           image={service.image}
                           title={service.title}
                           className={service.height}
                        />
                     ))}
                   </motion.div>
                </div>
             </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex-1 lg:max-w-xl text-center lg:text-left">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
               {/* Icons Row */}
               <div className="flex gap-4 sm:gap-6 mb-6 sm:mb-8 justify-center lg:justify-start">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#19b5af]/10 flex items-center justify-center text-[#19b5af]">
                     <ClipboardList size={24} className="sm:w-8 sm:h-8" strokeWidth={1.5} />
                  </div>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#19b5af]/10 flex items-center justify-center text-[#19b5af]">
                     <svg width="24" height="24" className="sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2C7 2 7 9 7 9s0 1 1 1h8s1 0 1-1c0 0 0-7-5-7z"/>
                        <path d="M9 10v4"/>
                        <path d="M15 10v4"/>
                        <path d="M12 14v8"/>
                        <path d="M9 18h6"/>
                     </svg>
                  </div>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#19b5af]/10 flex items-center justify-center text-[#19b5af]">
                     <svg width="24" height="24" className="sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
                        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
                        <path d="M4 22h16"/>
                        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
                        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
                        <path d="M18 2h-6c-1.1 0-2 .9-2 2v8.4c0 1.55 1.57 2.6 3 2.6h2c1.43 0 3-1.05 3-2.6V4c0-1.1-.9-2-2-2z"/>
                     </svg>
                  </div>
               </div>

               <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                 Dental Care Services
               </h2>

               <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 lg:mb-10">
                 Trust us to enhance your smile and overall oral health through our commitment to delivering high-quality dental services. Your satisfaction and well-being are our foremost priorities, making us your preferred choice for exceptional dental care.
               </p>

               <div className="flex justify-center lg:justify-start">
                 <Link href="/services">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group pl-6 sm:pl-8 pr-2 py-2 bg-[#19b5af] hover:bg-[#14918c] text-white rounded-full font-bold text-sm sm:text-base lg:text-lg shadow-lg shadow-[#19b5af]/30 transition-all flex items-center gap-2 sm:gap-4"
                    >
                      <span>More Details</span>
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center text-[#19b5af] group-hover:rotate-12 transition-transform duration-300 relative">
                         <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M7 2c-2 0-3 2.5-3 5 0 3.5 1.5 6 3 6 1.5 0 2-1 2-1s.5 1 2 1c1.5 1.5 3 2 4.5.5C17 12 17 9 17 5c0-3-2-3-4-3-1.5 0-2.5 1-3.5 2C8.5 3 8 2 7 2zm.5 18c-2 0-3-1-3-3l-.5-3c1.5 1.5 3 .5 4-1 .5 1.5 1.5 3 3.5 3 .5 0 1-.5 1.5-1l-.5 5c0 1.5-3 1.5-5 0z" />
                            <path d="M14 13.5c-1.5 1.5-3 2.5-4.5 1C8 13.5 8 13 7.5 13c-2 3-1 6 1 7.5 2 1.5 5 1.5 7 0 2-1.5 3-4.5 1-7.5-.5 0-.5.5-1.5.5z" opacity="0.5"/>
                         </svg>
                         <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 text-yellow-400">
                            <Sparkles size={10} className="sm:w-3 sm:h-3" fill="currentColor" />
                         </div>
                      </div>
                    </motion.button>
                 </Link>
               </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
