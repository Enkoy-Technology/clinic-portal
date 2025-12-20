"use client";

import { Carousel } from "@mantine/carousel";
import { Avatar, Box, Container, Group, Paper, Stack, Text, Title } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useEffect, useRef } from "react";

const TestimonialCard = ({
  name,
  role,
  content,
  image,
}: {
  name: string;
  role: string;
  content: string;
  image: string;
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Paper
        p={{ base: "xl", md: "2.5rem" }}
        radius="2.5rem"
        className="h-full flex relative overflow-hidden bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(25,181,175,0.08)] transition-all duration-500"
      >
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-center sm:items-start text-center sm:text-left w-full">
          {/* Left: Avatar */}
          <div className="relative flex-shrink-0">
             <div className="absolute inset-0 bg-[#19b5af] rounded-full blur-xl opacity-10" />
             <Avatar
              src={image}
              size={110}
              radius="100%"
              alt={name}
              className="border-4 border-white shadow-xl relative z-10"
              styles={{
                root: { border: '4px solid #f0fdfa' }
              }}
            />
             <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#19b5af] rounded-full flex items-center justify-center text-white shadow-lg border-2 border-white z-20">
                <Quote size={18} fill="currentColor" stroke="none" />
             </div>
          </div>

          {/* Right: Feedback */}
          <div className="flex-1 flex flex-col justify-center">
            <Group gap={4} mb="xs" className="justify-center sm:justify-start">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
              ))}
            </Group>

            <Text className="text-gray-700 leading-relaxed text-base md:text-xl font-medium mb-6 italic">
              &quot;{content}&quot;
            </Text>

            <div>
              <Text fw={800} className="text-gray-900 text-xl tracking-tight leading-none mb-1">
                {name}
              </Text>
              <Text size="sm" className="text-[#19b5af] font-bold uppercase tracking-widest text-xs">
                {role}
              </Text>
            </div>
          </div>
        </div>
      </Paper>
    </motion.div>
  );
};

export function Testimonials() {
  const autoplay = useRef(Autoplay({
    delay: 4000,
    stopOnInteraction: false,
    stopOnMouseEnter: false
  }));

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .mantine-Carousel-viewport {
        scroll-behavior: smooth !important;
      }
      .mantine-Carousel-container {
        transition: transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
        will-change: transform;
      }
      .mantine-Carousel-slide {
        transition: opacity 0.8s ease-in-out;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Orthodontics",
      content:
        "The clear aligners treatment was seamless! I can't believe how much my smile has improved in just 6 months. The team was incredibly supportive throughout.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    },
    {
      name: "Michael Chen",
      role: "Dental Implants",
      content:
        "I was nervous about getting an implant, but Dr. Hilina made me feel completely at ease. The procedure was painless and the results are natural-looking.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    },
    {
      name: "Emily Davis",
      role: "Teeth Whitening",
      content:
        "Best dental experience I've ever had. The teeth whitening results exceeded my expectations. The clinic is modern, clean, and the staff are true professionals.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    },
    {
      name: "David Wilson",
      role: "Regular Patient",
      content:
        "Finally found a dentist I actually look forward to visiting. Gentle care, transparent pricing, and a friendly atmosphere. My whole family comes here now.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    },
    {
      name: "Jessica Lee",
      role: "Cosmetic Dentistry",
      content:
        "They completely transformed my smile with veneers. I have so much more confidence now. The attention to detail and care was truly impressive.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    },
  ];

  return (
    <Box id="testimonials" component="section" className="py-12 md:py-16 bg-[#FDFDFD] overflow-hidden">
      <Container size="lg">
        <Stack align="center" mb={{ base: 40, md: 60 }} gap="xs">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Text className="text-[#19b5af] font-black tracking-[0.3em] uppercase text-xs mb-3">
              Patient Success
            </Text>
            <Title className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-[1.1] mb-6">
              Hear from Our Happy Clients
            </Title>
            <Box className="w-16 h-1.5 bg-[#19b5af] mx-auto rounded-full" />
          </motion.div>
        </Stack>

        <Carousel
          loop
          slideSize={{ base: "100%", md: "100%" }}
          slideGap={{ base: "xl", md: "3rem" }}
          align="start"
          slidesToScroll={1}
          plugins={[autoplay.current]}
          styles={{
            root: {
              overflow: 'visible'
            },
            viewport: {
              overflow: 'visible',
              scrollBehavior: 'smooth'
            },
            container: {
              transition: 'transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              willChange: 'transform'
            },
            control: {
              display: 'none'
            },
            controls: {
              display: 'none'
            }
          }}
          className="relative"
        >
          {testimonials.map((testimonial, index) => (
            <Carousel.Slide key={index}>
              <TestimonialCard {...testimonial} />
            </Carousel.Slide>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
}


