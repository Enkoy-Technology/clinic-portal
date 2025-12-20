"use client";
import { Container, Grid, Paper, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import {
    Award,
    CalendarCheck,
    Clock,
    Heart,
    Microscope,
    Smile
} from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description:
      "We treat every patient like family, ensuring a comfortable and supportive environment for your dental journey.",
  },
  {
    icon: Smile,
    title: "Patient-Centered",
    description:
      "Your comfort and satisfaction are our top priorities. We customize every treatment to suit your unique needs.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Dental emergencies don't wait, and neither do we. Our team is available around the clock to assist you.",
  },
  {
    icon: CalendarCheck,
    title: "Comprehensive Plans",
    description:
      "From routine check-ups to complex procedures, we offer annual plans to keep your oral health on track.",
  },
  {
    icon: Microscope,
    title: "Advanced Technology",
    description:
      "We utilize state-of-the-art diagnostic tools and equipment to ensure precise, effective, and painless treatments.",
  },
  {
    icon: Award,
    title: "Expert Specialists",
    description:
      "Our team consists of highly qualified professionals who stay updated with the latest advancements in dentistry.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-12 md:py-16 bg-gray-50 relative overflow-hidden">
        {/* Decorative Background Blobs */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#19b5af]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#19b5af]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        {/* Subtle Dot Pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
             style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />

      <Container size="xl" px={{ base: "md", lg: "xl" }} className="relative z-10">

        {/* Header */}
        <Stack align="center" mb={60} className="text-center">
            <Text className="text-[#19b5af] font-bold tracking-widest uppercase text-sm">
                Why Choose Us
            </Text>
            <Title className="text-4xl md:text-5xl font-bold text-gray-900">
                What Makes Us Different
            </Title>
             <Text className="text-gray-500 max-w-2xl text-lg mt-4 leading-relaxed">
                Experience world-class dental care with a personal touch. Here is why thousands of patients trust us with their smiles.
            </Text>
        </Stack>

        <Grid gutter="xl">
          {features.map((feature, index) => (
            <Grid.Col key={index} span={{ base: 12, md: 6, lg: 4 }}>
              <Paper
                p="xl"
                radius="lg"
                className="h-full bg-white border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group relative overflow-hidden"
              >
                {/* Decorative Watermark Icon */}
                <feature.icon
                    className="absolute -bottom-8 -right-8 text-gray-50 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110 rotate-12"
                    size={160}
                    strokeWidth={1}
                />

                <div className="relative z-10">
                    <ThemeIcon
                    size={60}
                    radius="md"
                    className="bg-[#19b5af]/10 text-[#19b5af] mb-6 group-hover:bg-[#19b5af] group-hover:text-white transition-colors duration-300 shadow-sm"
                    >
                        <feature.icon size={30} strokeWidth={2} />
                    </ThemeIcon>

                    <Text className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#19b5af] transition-colors">
                    {feature.title}
                    </Text>

                    <Text className="text-gray-500 leading-relaxed group-hover:text-gray-600">
                    {feature.description}
                    </Text>
                </div>
              </Paper>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
