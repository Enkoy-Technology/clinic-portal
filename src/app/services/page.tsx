"use client";

import { Box, Container, Grid, Image, Text, Title } from "@mantine/core";
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
    description:
      "Achieve perfectly aligned teeth with our high-quality braces and clear aligners. Our comprehensive orthodontic treatments include traditional braces, clear aligners, and retainers, all customized to fit your unique needs and lifestyle.",
    features: [
      "10+ Years Experience",
      "Personalized Treatment Plans",
      "Clear Aligners Available",
      "Regular Progress Monitoring",
    ],
    image:
      "https://images.unsplash.com/photo-1677026010083-78ec7f1b84ed?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    icon: "👑",
    title: "Zirconia Crowns",
    subtitle: "Premium Restorations",
    description:
      "The gold standard in dental restorations for durability and natural appearance. Our zirconia crowns offer superior strength, biocompatibility, and aesthetics, providing a perfect balance between function and beauty.",
    features: [
      "Superior Strength",
      "Natural Look",
      "Long-Lasting",
      "Biocompatible Material",
    ],
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    icon: "💉",
    title: "Root Canal",
    subtitle: "Pain-Free Treatment",
    description:
      "Save damaged teeth with our gentle, modern root canal therapy. Using the latest technology and techniques, we ensure a comfortable, pain-free experience while preserving your natural tooth structure.",
    features: [
      "Latest Technology",
      "Pain-Free Procedure",
      "Tooth Preservation",
      "Expert Care",
    ],
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    icon: "🔍",
    title: "General Dentistry",
    subtitle: "Complete Oral Care",
    description:
      "Routine checkups, cleanings, and preventive treatments for optimal health. Our comprehensive general dentistry services help maintain your oral health and prevent future dental problems through regular care.",
    features: [
      "Regular Checkups",
      "Professional Cleanings",
      "Preventive Care",
      "Oral Health Education",
    ],
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    icon: "✨",
    title: "Cosmetic Dentistry",
    subtitle: "Smile Makeovers",
    description:
      "Enhance your smile with whitening, veneers, and complete makeovers. Transform your smile with our advanced cosmetic procedures designed to boost your confidence and improve your appearance.",
    features: [
      "Teeth Whitening",
      "Porcelain Veneers",
      "Smile Design",
      "Aesthetic Consultations",
    ],
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    icon: "👶",
    title: "Pediatric Dentistry",
    subtitle: "Kids Dental Care",
    description:
      "Gentle, fun dental care designed specifically for children. Our pediatric dental team creates a positive, comfortable environment to ensure your child's dental visits are stress-free and enjoyable.",
    features: [
      "Kid-Friendly Environment",
      "Preventive Focus",
      "Positive Experience",
      "Early Intervention",
    ],
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
  },
];

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
              <span className="text-[#19b5af] font-semibold text-sm">
                Our Services
              </span>
            </div>
            <Title className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Expert Dental <span className="text-[#19b5af]">Services</span>
            </Title>
            <Text className="text-xl text-gray-500 max-w-2xl mx-auto">
              Professional specialty dental care with over 5+ years of
              experience. Your smile is our priority.
            </Text>
          </motion.div>
        </Container>
      </Box>

      {/* Services - Alternating Layout */}
      <Box className="py-12 md:py-20">
        <Container size="xl">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            const isLeft = isEven; // Even index = image left, odd index = image right

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mb-20 md:mb-32 last:mb-0"
              >
                <Grid
                  gutter={{ base: "xl", md: "xl" }}
                  align="center"
                  className="items-center"
                >
                  {/* Image Column */}
                  <Grid.Col
                    span={{ base: 12, md: 6 }}
                    order={{ base: 1, md: isLeft ? 1 : 2 }}
                    className="relative"
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="relative rounded-3xl overflow-hidden shadow-2xl"
                    >
                      {/* Decorative gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#19b5af]/20 via-transparent to-transparent z-10" />

                      <Image
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[300px] md:h-[500px] object-cover"
                        radius="lg"
                      />

                      {/* Floating badge */}
                      <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2 shadow-lg">
                        <div className="text-3xl">{service.icon}</div>
                      </div>
                    </motion.div>
                  </Grid.Col>

                  {/* Content Column */}
                  <Grid.Col
                    span={{ base: 12, md: 6 }}
                    order={{ base: 2, md: isLeft ? 2 : 1 }}
                    className={isLeft ? "md:pl-8" : "md:pr-8"}
                  >
                    <div className="space-y-6">
                      {/* Subtitle */}
                      <motion.div
                        initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                      >
                        <Text className="text-sm font-semibold text-[#19b5af] uppercase tracking-wider">
                          {service.subtitle}
                        </Text>
                      </motion.div>

                      {/* Title */}
                      <motion.div
                        initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                      >
                        <Title className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
                          {service.title}
                        </Title>
                      </motion.div>

                      {/* Description */}
                      <motion.div
                        initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                      >
                        <Text className="text-base md:text-lg text-gray-600 leading-relaxed">
                          {service.description}
                        </Text>
                      </motion.div>

                      {/* Features */}
                      <motion.div
                        initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="space-y-3 pt-4"
                      >
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-[#19b5af]/10 flex items-center justify-center flex-shrink-0">
                              <CheckCircle
                                size={16}
                                className="text-[#19b5af]"
                              />
                            </div>
                            <Text className="text-gray-700 font-medium">
                              {feature}
                            </Text>
                          </div>
                        ))}
                      </motion.div>

                      {/* Button */}
                      <motion.div
                        initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="pt-4"
                      >
                        <motion.button
                          type="button"
                          onClick={() => handleBookNow(service.title)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#19b5af] to-[#14918c] hover:from-[#14918c] hover:to-[#19b5af] text-white rounded-full font-bold text-base md:text-lg shadow-xl shadow-[#19b5af]/30 transition-all duration-300"
                        >
                          <span>Contact Us - Walk-ins Welcome</span>
                          <ArrowRight
                            size={20}
                            className="group-hover:translate-x-1 transition-transform"
                          />
                        </motion.button>
                      </motion.div>
                    </div>
                  </Grid.Col>
                </Grid>
              </motion.div>
            );
          })}
        </Container>
      </Box>

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
                Walk-ins welcome! Contact us today and let us take care of your
                dental health
              </Text>
              <motion.button
                type="button"
                onClick={handleGeneralBooking}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-10 py-4 bg-white text-[#19b5af] hover:bg-gray-100 rounded-full font-bold text-lg shadow-lg transition-all"
              >
                Contact Us - No Appointment Needed
                <ArrowRight size={20} />
              </motion.button>
            </div>
          </motion.div>
        </Container>
      </Box>

      <AppointmentModal
        opened={opened}
        onClose={close}
        defaultService={selectedService}
      />
    </Box>
  );
}

export default ServicesPage;
