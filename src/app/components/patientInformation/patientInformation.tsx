"use client";

import {
  Box,
  Container,
  Grid,
  Image,
  Text,
  Title,
} from "@mantine/core";
import { motion } from "framer-motion";
import { Sparkles, Clock, CreditCard, Users } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Walk-ins Welcome",
    description: "No appointment needed. Just walk in and we'll take care of you.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: CreditCard,
    title: "Flexible Payments",
    description: "We accept all local payment methods. Simple and convenient.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Users,
    title: "Expert Team Ready",
    description: "Our professional team is here to welcome you with a smile.",
    color: "from-teal-500 to-green-500",
  },
];

export function PatientInformation() {
  return (
    <Box className="relative bg-gradient-to-br from-white via-gray-50 to-[#F2FAFB] py-16 md:py-24 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#19b5af]/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tl from-cyan-200/20 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <Container size="xl" className="relative z-10">
        <Grid gutter={{ base: "xl", md: "xl" }} align="center">
          {/* Left Side - Text Content */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#19b5af]/10 rounded-full mb-4"
              >
                <Sparkles size={16} className="text-[#19b5af]" />
                <Text className="text-[#19b5af] font-semibold text-sm uppercase tracking-wider">
                  Getting Started
                </Text>
              </motion.div>

              {/* Main Title */}
              <Title
                order={2}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6"
              >
                Your Perfect Smile{" "}
                <span className="relative inline-block">
                  <span
                    className="relative z-10"
                    style={{
                      background: 'linear-gradient(135deg, #19b5af, #33C1B7, #14918c)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Starts Here
                  </span>
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-[#19b5af]/30 via-[#19b5af]/50 to-[#19b5af]/30 rounded-full blur-sm"
                  />
                </span>
              </Title>

              <Text className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                No complicated booking process. No waiting weeks for an appointment. Just walk in, and let's start your journey to a brighter, healthier smile today.
              </Text>

              {/* Features Grid */}
              <div className="grid grid-cols-1 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="group"
                  >
                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50 hover:border-[#19b5af]/30 hover:shadow-lg transition-all duration-300">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <Text className="font-bold text-gray-900 text-base md:text-lg mb-1">
                          {feature.title}
                        </Text>
                        <Text className="text-gray-600 text-sm md:text-base">
                          {feature.description}
                        </Text>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Grid.Col>

          {/* Right Side - Image */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#19b5af]/20 via-cyan-200/20 to-teal-200/20 rounded-3xl blur-xl -z-10" />

              <Box className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/ads.jpg"
                  alt="Modern dental examination room"
                  className="object-cover w-full h-[350px] md:h-[500px]"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </Box>

              {/* Floating Badge */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-2xl border-2 border-[#19b5af]/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#19b5af] to-[#14918c] rounded-xl flex items-center justify-center">
                    <Sparkles size={20} className="text-white" />
                  </div>
                  <div>
                    <Text className="font-black text-gray-900 text-lg">100%</Text>
                    <Text className="text-xs text-gray-600">Satisfaction</Text>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}

