"use client";
import { Box, Button, Container, Image, Text } from "@mantine/core";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";

interface Service {
  id: number;
  title: string;
  imgUrl: string;
  feature: string;
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <Link href={`/services/${service.id}`}>
        <Container
          px={0}
          py={0}
          className="group cursor-pointer relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl "
        >
          <Box className="relative">
            <Image
              src={service.imgUrl}
              alt={service.title}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300 "
            />
            <Box className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90" />
            <Box className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <Text className="text-3xl font-extrabold mb-1">
                {service.title}
              </Text>
              <Text className="text-sm inline-block  py-1 rounded">
                {service.feature}
              </Text>
            </Box>
          </Box>
        </Container>
      </Link>
    </motion.div>
  );
};

export const ServiceNew: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: "Orthodontics",
      imgUrl: "services/orthodontics.png",
      feature: "Teeth Alignment, braces, retainers, clear aligners",
    },
    {
      id: 2,
      title: "Cosmetic Dentistry",
      imgUrl: "services/cosmeticdentistry.png",
      feature: "Veneers, bonding, smile makeovers, teeth whitening",
    },
    {
      id: 3,
      title: "Dental Implants",
      imgUrl: "services/dentalimplant.png",
      feature: "Tooth Replacement, crown, bridge, implant surgery",
    },
    {
      id: 4,
      title: "Dental Cleanings",
      imgUrl: "services/dentalcleaning.png",
      feature: "Plaque Removal, tartar control, polishing, gum health",
    },
    {
      id: 5,
      title: "Emergency Dental Care",
      imgUrl: "services/emergencycare.png",
      feature:
        "Urgent Care, toothache relief, broken tooth repair, infection treatment",
    },
    {
      id: 6,
      title: "Root Canal Therapy",
      imgUrl: "services/rootcanal.png",
      feature: "Pain Relief, infected pulp treatment, saving damaged teeth",
    },
  ];

  return (
    <Box className="my-8 pt-5">
      <Box className="container mx-auto px-4">
        <Text className="text-primary-500 text-sm text-center mb-2">
          OUR SERVICES
        </Text>
        <Text className="text-primary-900 text-4xl text-center font-bold mb-10">
          Comprehensive Dental Services <br /> For a Healthy Smile
        </Text>
        <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </Box>
        <Box className="flex justify-center items-center mt-10">
          <Link href="/services" passHref>
            <Button
              variant="filled"
              size="lg"
              className="bg-primary-900 rounded-full text-white font-bold hover:bg-primary-800"
            >
              <Text className="px-10">Learn More</Text>
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
