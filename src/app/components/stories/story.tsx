"use client";

import { Box, Button, Grid, Image, Modal, Text, Title } from "@mantine/core";
import { IconPlayerPlayFilled } from "@tabler/icons-react";
import { motion, useAnimation, useInView } from "framer-motion"; // Import useInView
import { useEffect, useRef, useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export function Story() {
  const [opened, setOpened] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        size="lg"
        title="Watch Our Story"
        centered
        fullScreen={false}
        classNames={{
          title: 'text-lg sm:text-xl font-bold',
          body: 'p-2 sm:p-4',
        }}
      >
        <Box className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src="https://www.youtube.com/shorts/hAax2o-0UoA"
            title="Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>
      </Modal>

      <Box className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-36 py-12 md:py-16" ref={ref}>
        <Grid justify="flex-center" align="stretch" gutter={{ base: 'lg', sm: 'xl' }}>
          <Grid.Col span={{ base: 12, md: 5 }} className="relative mb-12 md:mb-0">
            <motion.div
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src={"docs1.jpeg"}
                radius="lg"
                className="rounded-lg w-full h-[420px] sm:h-[480px] md:h-[540px] lg:h-[600px] object-cover border-4 border-white shadow-lg"
                alt="Doctor Image"
              />
            </motion.div>

            {/* Overlapping image - Hidden on mobile, visible from sm */}
            <motion.div
              className="hidden sm:block absolute bottom-[-30px] sm:bottom-[-40px] right-[20px] sm:right-[30px]"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <Image
                src={"story2.jpg"}
                radius="lg"
                className="rounded-lg w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] object-cover border-6 sm:border-8 border-white shadow-xl"
                alt="Dental Image"
              />
            </motion.div>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 7 }}>
            <motion.div
              initial="hidden"
              animate={controls}
              variants={fadeInUp}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col justify-start items-start space-y-3 sm:space-y-4"
            >
              <Text className="text-[#19b5af] text-xs sm:text-sm font-semibold tracking-wider uppercase">
                OUR STORY
              </Text>
              <Title className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold leading-tight">
                A Tradition of Value, <br className="hidden sm:block" /> A Promise of Excellence
              </Title>

              <Text className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Dr. Hilina Specialty Dental Clinic is a unique dental practice in Ethiopia with a team of certified professional doctors, dental hygienists, assistants, and dental technicians. We have a passion for the science and art of dentistry.
              </Text>

              <Text className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Our team is highly competent and committed to giving the best, most up-to-date, and friendly dental healthcare there is. We treat all our clients with the utmost respect, courtesy, professionalism, honesty, and confidentiality.
              </Text>

              <Text className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Dr. Hilina Specialty Dental Clinic, a pioneer of dentistry service in Ethiopia, was founded by Dr. Hilina. The founder and CEO of the clinic is a well-renowned and qualified professional of dental treatment who has abundant skill, knowledge, and extensive experience in the field. She had a vision and a sacred mission on how she wanted to build up her dental practice to the highest standard that it is now.
              </Text>

              <Text className="text-gray-700 text-sm sm:text-base leading-relaxed">
                She set up the practice under her strict guidelines and values to provide the best dental services in Ethiopia. She slowly and steadily developed a team of specialist dentists who shared her vision and values.
              </Text>

              <Text className="italic text-gray-600 text-sm sm:text-base border-l-4 border-[#19b5af] pl-4 py-3 bg-[#19b5af]/5 rounded-r-lg my-4">
                "We believe in building long-term relationships with our patients, fostering an environment of trust, compassion, and exceptional service. Every smile we create is a testament to our commitment to excellence."
              </Text>
              <Text className="text-[#19b5af] font-bold text-sm sm:text-base">
                — Dr. Hilina, Founder & Chief Doctor
              </Text>

              <Box className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-3 sm:gap-4 pt-4 w-full sm:w-auto">
                <motion.div
                  initial="hidden"
                  animate={controls}
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="md"
                    radius="md"
                    className="bg-[#19b5af] text-white hover:bg-[#14918c] transition w-full sm:w-auto"
                    fullWidth={false}
                  >
                    Read More
                  </Button>
                </motion.div>

                <motion.div
                  initial="hidden"
                  animate={controls}
                  variants={{
                    hidden: { opacity: 0, x: 30 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="flex items-center cursor-pointer hover:opacity-80 transition"
                  onClick={() => setOpened(true)}
                >
                  <Box className="rounded-full border-2 border-[#19b5af]/30 p-2 sm:p-2.5 flex justify-center items-center bg-[#19b5af]/10">
                    <IconPlayerPlayFilled
                      size={16}
                      className="text-[#19b5af] sm:w-[18px] sm:h-[18px]"
                    />
                  </Box>
                  <Text className="pl-2 text-sm sm:text-base font-medium text-gray-700">Watch Video</Text>
                </motion.div>
              </Box>
            </motion.div>
          </Grid.Col>
        </Grid>
      </Box>
    </>
  );
}
