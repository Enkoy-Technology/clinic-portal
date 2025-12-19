"use client";

import { Carousel } from "@mantine/carousel";
import { Avatar, Group, Paper, Stack, Text, Title } from "@mantine/core";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

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
    <Paper
      p={{ base: "md", sm: "lg", md: "xl" }}
      radius="lg"
      className="h-full min-h-[280px] sm:min-h-[300px] md:min-h-[320px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100 bg-white"
    >
      <Stack gap="sm" className="h-full md:gap-4">
        {/* Quote Icon & Rating */}
        <Group justify="space-between" align="start">
          <Quote className="text-[#19b5af]/20 fill-[#19b5af]/10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
          <Group gap={2}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="text-amber-400 fill-amber-400 sm:w-4 sm:h-4" />
            ))}
          </Group>
        </Group>

        {/* Content */}
        <Text className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg italic flex-1">
          "{content}"
        </Text>

        {/* Author Info */}
        <Group mt="auto" gap="sm">
          <Avatar
            src={image}
            size="md"
            radius="xl"
            alt={name}
            className="border-2 border-white shadow-md md:w-12 md:h-12"
          />
          <Stack gap={0}>
            <Text fw={700} className="text-gray-900 text-base sm:text-lg">
              {name}
            </Text>
            <Text size="sm" className="text-[#19b5af] font-medium text-xs sm:text-sm">
              {role}
            </Text>
          </Stack>
        </Group>
      </Stack>
    </Paper>
  );
};

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Orthodontics Patient",
      content:
        "The clear aligners treatment was seamless! I can't believe how much my smile has improved in just 6 months. The team was incredibly supportive throughout the entire process.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    },
    {
      name: "Michael Chen",
      role: "Dental Implants",
      content:
        "I was nervous about getting an implant, but Dr. Smith made me feel completely at ease. The procedure was painless and the results are natural-looking. Highly recommended!",
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
      role: "Regular Checkup",
      content:
        "Finally found a dentist I actually look forward to visiting. Gentle care, transparent pricing, and a friendly atmosphere. My whole family comes here now.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    },
     {
      name: "Jessica Lee",
      role: "Cosmetic Dentistry",
      content:
        "They completely transformed my smile with veneers. I have so much more confidence now. The attention to detail was impressive.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <Stack align="center" mb={{ base: 30, sm: 40, md: 50, lg: 60 }}>
            <Text className="text-[#19b5af] font-bold tracking-widest uppercase text-xs sm:text-sm">Testimonials</Text>
            <Title className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center px-4">
                What Our Patients Say
            </Title>
             <Text className="text-gray-500 max-w-2xl text-center text-sm sm:text-base md:text-lg mt-2 sm:mt-4 px-4 leading-relaxed">
                We take pride in providing exceptional care. Here's what some of our happy patients have to say about their experience with us.
            </Text>
        </Stack>

        <Carousel
          withIndicators
          loop
          slideSize={{ base: "100%", sm: "50%", md: "33.33333%" }}
          slideGap={{ base: "md", sm: "lg", md: "xl" }}
          align="start"
          nextControlIcon={<ChevronRight size={20} className="text-black sm:w-6 sm:h-6" />}
          previousControlIcon={<ChevronLeft size={20} className="text-black sm:w-6 sm:h-6" />}
          styles={{
            control: {
                backgroundColor: 'white',
                border: '1px solid #E5E7EB',
                color: 'black',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                width: 40,
                height: 40,
                opacity: 1,
                '@media (min-width: 640px)': {
                    width: 48,
                    height: 48,
                }
            },
            indicator: {
                width: 6,
                height: 6,
                transition: 'width 250ms ease',
                backgroundColor: '#CBD5E1',
                '@media (min-width: 640px)': {
                    width: 8,
                    height: 8,
                },
                '&[data-active]': {
                    width: 16,
                    backgroundColor: '#19b5af',
                    '@media (min-width: 640px)': {
                        width: 24,
                    }
                }
            },
             indicators: {
                bottom: -40,
                '@media (min-width: 640px)': {
                    bottom: -50,
                }
            }
          }}
          className="pb-10 sm:pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <Carousel.Slide key={index}>
              <TestimonialCard {...testimonial} />
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
