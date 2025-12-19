"use client";
import { Carousel } from "@mantine/carousel";
import {
    Button,
    Container,
    Image,
    Stack,
    Text,
    Title
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
    ChevronLeft,
    ChevronRight,
    Clock,
    Star,
    Stethoscope
} from "lucide-react";
import { AppointmentModal } from "../appointment/AppointmentModal";

interface Doctor {
  name: string;
  job: string;
  image: string;
  specialization: string;
  experience: string;
  rating: number;
}

const doctors: Doctor[] = [
  {
    name: "Dr. Sarah Wilson",
    job: "Orthodontist",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600",
    specialization: "Braces & Invisalign",
    experience: "15+ Years",
    rating: 4.9,
  },
  {
    name: "Dr. James Chen",
    job: "Endodontist",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600",
    specialization: "Root Canal Therapy",
    experience: "12+ Years",
    rating: 4.8,
  },
  {
    name: "Dr. Emily Parker",
    job: "Pediatric Dentist",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=600",
    specialization: "Children's Care",
    experience: "10+ Years",
    rating: 4.9,
  },
  {
      name: "Dr. Michael Ross",
      job: "Oral Surgeon",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600",
      specialization: "Implants & Surgery",
      experience: "18+ Years",
      rating: 5.0,
    },
];

export function ExpertsSection() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#F0F7FF] relative overflow-hidden">
        {/* Decorative Background Elements - Smaller on mobile */}
        <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-[#19b5af]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-[#19b5af]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <Container size="xl" px={{ base: "sm", sm: "md", lg: "xl" }} className="relative z-10">

        {/* Header */}
        <Stack align="center" mb={{ base: 30, sm: 40, md: 50, lg: 60 }} className="text-center">
            <Text className="text-[#19b5af] font-bold tracking-widest uppercase text-xs sm:text-sm">
                Expert Team
            </Text>
            <Title className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 px-4">
                Meet Our Specialists
            </Title>
             <Text className="text-gray-500 max-w-2xl text-sm sm:text-base md:text-lg mt-2 sm:mt-4 leading-relaxed px-4">
                Connect with our team of board-certified professionals dedicated to your smile.
            </Text>
        </Stack>

        <Carousel
          slideSize={{ base: "100%", sm: "50%", md: "33.33333%" }}
          slideGap={{ base: "md", sm: "lg", md: "xl" }}
          align="start"
          loop
          withIndicators
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
            },
             viewport: {
                paddingBottom: 50,
                '@media (min-width: 640px)': {
                    paddingBottom: 60,
                }
             }
          }}
        >
          {doctors.map((doctor, index) => (
            <Carousel.Slide key={index}>
              <div
                className="group relative h-[420px] sm:h-[460px] md:h-[500px] w-full bg-white rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-default"
              >
                  {/* Image Background */}
                  <div className="absolute inset-0 h-full w-full">
                     <Image
                      src={doctor.image}
                      alt={doctor.name}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
                  </div>

                  {/* Content Container (Bottom Aligned) */}
                  <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 md:p-8 text-white flex flex-col gap-2 sm:gap-3 md:gap-4">

                      {/* Name & Title */}
                      <div>
                          <Text className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight mb-1">
                                {doctor.name}
                          </Text>
                           <Text className="text-[#66D1C9] font-semibold text-sm sm:text-base md:text-lg uppercase tracking-wide">
                                {doctor.job}
                          </Text>
                      </div>

                      {/* Divider */}
                      <div className="w-10 sm:w-12 h-0.5 sm:h-1 bg-white/30 rounded-full" />

                      {/* Specs Grid */}
                      <div className="grid grid-cols-2 gap-y-2 sm:gap-y-3 md:gap-y-4 gap-x-2 py-1 sm:py-2">
                           <div className="flex items-center gap-2 sm:gap-3">
                                <div className="p-1.5 sm:p-2 rounded-full bg-white/10 backdrop-blur-md text-[#66D1C9]">
                                    <Stethoscope size={16} className="sm:w-[18px] sm:h-[18px]" />
                                </div>
                                <div>
                                    <Text size="xs" className="text-gray-300 uppercase font-semibold text-[10px] sm:text-xs">Specialty</Text>
                                    <Text size="sm" className="font-medium truncate max-w-[80px] sm:max-w-[100px] text-xs sm:text-sm" title={doctor.specialization}>{doctor.specialization}</Text>
                                </div>
                           </div>
                           <div className="flex items-center gap-2 sm:gap-3">
                                <div className="p-1.5 sm:p-2 rounded-full bg-white/10 backdrop-blur-md text-[#66D1C9]">
                                    <Clock size={16} className="sm:w-[18px] sm:h-[18px]" />
                                </div>
                                <div>
                                    <Text size="xs" className="text-gray-300 uppercase font-semibold text-[10px] sm:text-xs">Experience</Text>
                                    <Text size="sm" className="font-medium text-xs sm:text-sm">{doctor.experience}</Text>
                                </div>
                           </div>
                      </div>

                      {/* Action Button - Expands/Highlights on Hover */}
                      <Button
                        onClick={open}
                        fullWidth
                        size="md"
                        className="bg-white text-gray-900 hover:bg-[#19b5af] hover:text-white transition-all duration-300 rounded-lg sm:rounded-xl font-bold mt-1 sm:mt-2 text-sm sm:text-base"
                        rightSection={<ChevronRight size={16} className="sm:w-[18px] sm:h-[18px]" />}
                      >
                        Book Appointment
                      </Button>
                  </div>

                  {/* Top Rating Badge */}
                  <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2">
                     <Star size={14} className="text-yellow-400 fill-yellow-400 sm:w-4 sm:h-4" />
                     <span className="text-white font-bold text-sm sm:text-base">{doctor.rating}</span>
                  </div>
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Container>

      <AppointmentModal opened={opened} onClose={close} hideService={true} />
    </section>
  );
}
