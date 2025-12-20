"use client";

import {
  AppShell,
  Box,
  Group
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AppointmentModal } from "../../appointment/AppointmentModal";

const Header: React.FC = () => {
  const [modalOpened, { open: openModal, close: closeModal }] = useDisclosure(false);

  return (
    <AppShell.Header
      withBorder={false}
      className="sticky top-0 z-50 h-[80px] bg-gradient-to-r from-[#F2FAFB] via-[#F0F9FA] to-[#E8F6F8]"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        height: 80
      }}
    >
      <Box className="h-full px-6 lg:px-12 flex items-center justify-between max-w-[1600px] mx-auto">

        {/* Left: Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo1.png"
            alt="Dr. Hilina Specialty Dental Clinic"
            height={50}
            width={140}
            style={{ width: "auto", height: "50px" }}
            className="object-contain"
            priority
          />
        </Link>

        {/* Right: Actions */}
        <Group gap="sm">
          {/* Phone Number */}
          <a
            href="tel:+251910151739"
            className="hidden md:flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-[#19b5af] transition-colors"
          >
            <Phone size={18} />
            <span className="font-medium">+251 910 151 739</span>
          </a>
        </Group>

      </Box>

      <AppointmentModal opened={modalOpened} onClose={closeModal} />
    </AppShell.Header>
  );
};

export default Header;
