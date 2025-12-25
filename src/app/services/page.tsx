"use client";

import { Box, Container, Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { useState } from "react";
import { AppointmentModal } from "../components/appointment/AppointmentModal";

const services = [
  {
    id: 1,
    icon: "🦷",
    title: "Orthodontics",
    subtitle: "Braces & Aligners",
    description: "Achieve perfectly aligned teeth with our high-quality braces and clear aligners.",
    features: ["10+ Years Experience", "Personalized Plans", "Clear Aligners Available"],
  },
  {
    id: 2,
    icon: "👑",
    title: "Zirconia Crowns",
    subtitle: "Premium Restorations",
    description: "The gold standard in dental restorations for durability and natural appearance.",
    features: ["Superior Strength", "Natural Look", "Long-Lasting"],
  },
  {
    id: 3,
    icon: "💉",
    title: "Root Canal",
    subtitle: "Pain-Free Treatment",
    description: "Save damaged teeth with our gentle, modern root canal therapy.",
    features: ["Latest Technology", "Pain-Free", "Tooth Preservation"],
  },
  {
    id: 4,
    icon: "🔍",
    title: "General Dentistry",
    subtitle: "Complete Oral Care",
    description: "Routine checkups, cleanings, and preventive treatments for optimal health.",
    features: ["Regular Checkups", "Professional Cleanings", "Preventive Care"],
  },
  {
    id: 5,
    icon: "✨",
    title: "Cosmetic Dentistry",
    subtitle: "Smile Makeovers",
    description: "Enhance your smile with whitening, veneers, and complete makeovers.",
    features: ["Teeth Whitening", "Veneers", "Smile Design"],
  },
  {
    id: 6,
    icon: "👶",
    title: "Pediatric Dentistry",
    subtitle: "Kids Dental Care",
    description: "Gentle, fun dental care designed specifically for children.",
    features: ["Kid-Friendly", "Preventive Focus", "Positive Experience"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function ServicesPage() {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedService, setSelectedService] = useState("");

  const handleBookNow = (serviceName: string) => {
    setSelectedService(serviceName);
    open();
  };

  const handleGeneralBooking = () => {
    setSelectedService("");
    open();
  };

  return (
    <Box className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <Box className="pt-32 pb-16">
        <Container size="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#19b5af]/10 rounded-full mb-6">
              <Sparkles size={18} className="text-[#19b5af]" />
              <span className="text-[#19b5af] font-semibold text-sm">Our Services</span>
            </div>
            <Title className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Expert Dental <span className="text-[#19b5af]">Services</span>
            </Title>
            <Text className="text-xl text-gray-500 max-w-2xl mx-auto">
              Professional specialty dental care with over 5+ years of experience. Your smile is our priority.
            </Text>
          </motion.div>
        </Container>
      </Box>

      {/* Services Grid */}
      <Container size="xl" py={40}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <div className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#19b5af]/30 overflow-hidden h-full">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-[#19b5af]/10 flex items-center justify-center text-2xl mb-6">
                  {service.icon}
                </div>

                {/* Content */}
                <div className="mb-6">
                  <Text className="text-xs font-medium text-[#19b5af] uppercase tracking-wider mb-1">
                    {service.subtitle}
                  </Text>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-[#19b5af] flex-shrink-0" />
                      <Text size="sm" className="text-gray-600">{feature}</Text>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <button
                  type="button"
                  onClick={() => handleBookNow(service.title)}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#19b5af] hover:bg-[#14918c] text-white rounded-xl font-semibold transition-all duration-300 group/btn"
                >
                  <span>Book Now</span>
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>

      {/* CTA Section */}
      <Box className="py-20">
        <Container size="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-[#19b5af] to-[#14918c] rounded-3xl p-12 text-center overflow-hidden"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3" />

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
                <span className="text-3xl">😊</span>
              </div>
              <Title className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready For Your Best Smile?
              </Title>
              <Text className="text-lg text-white/80 mb-8 max-w-md mx-auto">
                Schedule your appointment today and let us take care of your dental health
              </Text>
              <motion.button
                type="button"
                onClick={handleGeneralBooking}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-10 py-4 bg-white text-[#19b5af] hover:bg-gray-100 rounded-full font-bold text-lg shadow-lg transition-all"
              >
                Book Free Consultation
                <ArrowRight size={20} />
              </motion.button>
            </div>
          </motion.div>
        </Container>
      </Box>

      <AppointmentModal opened={opened} onClose={close} defaultService={selectedService} />
    </Box>
  );
}

export default ServicesPage;
