"use client";

import {
  Box,
  Container,
  Grid,
  Image,
  Text,
  Title
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { AppointmentModal } from "../appointment/AppointmentModal";

export function FreeConsultation() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Box className="bg-[#19b5af]">
      <Grid gutter={0} className="md:h-[450px] h-auto">
        <Grid.Col span={{ base: 12, md: 6 }} className="flex items-center">
          <Container size="md" className="text-white px-4 sm:px-6 md:px-12 lg:px-24 py-8 sm:py-10 md:py-12">
            <Title order={2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
              Free Consultation
            </Title>
            <Text className="mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed text-white/90">
              Not sure which service is right for you? Schedule a free
              consultation with us to discuss your needs and the options
              available.
            </Text>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <motion.button
                onClick={open}
                className="group relative px-8 py-4 bg-white text-[#19b5af] rounded-full font-bold text-base sm:text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-white overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {/* Shimmer effect */}
                <motion.div
                  animate={{
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
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent" style={{ transform: 'skewX(-20deg)' }} />
                </motion.div>

                {/* Glow effect */}
                <motion.div
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-full blur-xl -z-10"
                />

                {/* Content */}
                <span className="relative z-10 flex items-center gap-3">
                  <motion.div
                    animate={{
                      rotate: [0, 15, -15, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Sparkles size={20} className="text-[#19b5af]" />
                  </motion.div>
                  <span>One Click, Better Smile</span>
                  <motion.div
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="group-hover:translate-x-1 transition-transform"
                  >
                    <ArrowRight size={20} className="text-[#19b5af]" />
                  </motion.div>
                </span>
              </motion.button>
            </motion.div>
          </Container>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }} p={0} className="h-full">
          <Box className="h-full w-full overflow-hidden">
            <Image
              src="services/freeConsultation.png"
              alt="Consultation Background"
              className="object-cover w-full h-[280px] sm:h-[350px] md:h-[450px]"
            />
          </Box>
        </Grid.Col>
      </Grid>
      <AppointmentModal opened={opened} onClose={close} hideService={true} />
    </Box>
  );
}
