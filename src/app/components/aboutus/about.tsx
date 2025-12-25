"use client";

import { Box, Container, Grid, Text, Title } from "@mantine/core";
import { motion } from "framer-motion";
import { Award, Heart, Users, Target } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We treat every patient with the utmost respect, courtesy, and empathy.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to providing the highest quality dental care with precision and expertise.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "Our skilled team of professionals works together to ensure your best experience.",
  },
  {
    icon: Target,
    title: "Innovation",
    description: "Utilizing modern technology and latest techniques for optimal results.",
  },
];

export function AboutUs() {
  return (
    <Box className="bg-gradient-to-b from-white via-gray-50 to-white py-16 md:py-24">
      <Container size="xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <Text className="text-[#19b5af] text-sm font-semibold tracking-wider uppercase mb-4">
            About Us
          </Text>
          <Title className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            A Tradition of Value,{" "}
            <span
              className="relative inline-block"
              style={{
                background: 'linear-gradient(135deg, #19b5af, #33C1B7, #14918c)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              A Promise of Excellence
            </span>
          </Title>
        </motion.div>

        {/* Main Content */}
        <Grid gutter={{ base: "xl", md: "xl" }} className="mb-16">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Title order={3} className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Dr. Hilina Specialty Dental Clinic
              </Title>

              <Text className="text-gray-700 text-base md:text-lg leading-relaxed">
                Dr. Hilina Specialty Dental Clinic is a unique dental practice in Ethiopia with a team of certified professional doctors, dental hygienists, assistants, and dental technicians. We have a passion for the science and art of dentistry.
              </Text>

              <Text className="text-gray-700 text-base md:text-lg leading-relaxed">
                Our team is highly competent and committed to giving the best, most up-to-date, and friendly dental healthcare there is. We treat all our clients with the utmost respect, courtesy, professionalism, honesty, and confidentiality.
              </Text>

              <Text className="text-gray-700 text-base md:text-lg leading-relaxed">
                Founded by Dr. Hilina, our clinic is led by a well-renowned and qualified professional with abundant skill, knowledge, and extensive experience in the field. We have built our practice under strict guidelines and values to provide the best dental services, developing a team of specialist dentists who share our vision and commitment to excellence.
              </Text>
            </motion.div>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Title order={3} className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Our Mission & Vision
              </Title>

              <div className="space-y-4">
                <div className="p-6 bg-gradient-to-br from-[#19b5af]/10 to-cyan-100/10 rounded-2xl border border-[#19b5af]/20">
                  <Text className="font-bold text-gray-900 text-lg mb-2">Our Mission</Text>
                  <Text className="text-gray-700 leading-relaxed">
                    To provide exceptional dental care that enhances oral health and creates beautiful, confident smiles while maintaining the highest standards of professionalism and patient comfort.
                  </Text>
                </div>

                <div className="p-6 bg-gradient-to-br from-teal-100/10 to-[#19b5af]/10 rounded-2xl border border-[#19b5af]/20">
                  <Text className="font-bold text-gray-900 text-lg mb-2">Our Vision</Text>
                  <Text className="text-gray-700 leading-relaxed">
                    To be the leading dental clinic in Ethiopia, recognized for excellence in patient care, innovative treatments, and a commitment to making quality dental services accessible to all.
                  </Text>
                </div>
              </div>
            </motion.div>
          </Grid.Col>
        </Grid>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Title order={3} className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Core Values
          </Title>

          <Grid gutter={{ base: "md", md: "lg" }}>
            {values.map((value, index) => (
              <Grid.Col key={value.title} span={{ base: 12, sm: 6, md: 3 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="h-full p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#19b5af] to-[#14918c] flex items-center justify-center mb-4">
                    <value.icon size={28} className="text-white" />
                  </div>
                  <Text className="font-bold text-gray-900 text-lg mb-2">
                    {value.title}
                  </Text>
                  <Text className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </Text>
                </motion.div>
              </Grid.Col>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
