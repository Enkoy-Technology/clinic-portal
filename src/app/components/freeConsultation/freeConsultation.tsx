"use client";

import {
  Box,
  Button,
  Container,
  Grid,
  Image,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
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
            <Button
              variant="outline"
              onClick={open}
              size="md"
              className="border-2 border-white text-white hover:bg-white hover:text-[#19b5af] transition-colors font-semibold"
            >
              Contact Us
            </Button>
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
