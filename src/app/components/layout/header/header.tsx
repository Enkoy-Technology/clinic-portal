"use client";

import {
    AppShell,
    Box,
    Button,
    Group,
    Menu
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ChevronDown, Globe, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AppointmentModal } from "../../appointment/AppointmentModal";

const languages = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "am", label: "አማርኛ", flag: "🇪🇹" },
];

const Header: React.FC = () => {
  const [modalOpened, { open: openModal, close: closeModal }] = useDisclosure(false);
  const [currentLang, setCurrentLang] = useState(languages[0]);

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
            alt="Dr. Hilina Specialty Dental"
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

          {/* Language Switcher */}
          <Menu shadow="md" width={180}>
            <Menu.Target>
              <Button
                variant="subtle"
                className="text-gray-700 hover:bg-gray-100"
                leftSection={<Globe size={18} />}
                rightSection={<ChevronDown size={16} />}
              >
                <span className="hidden sm:inline">{currentLang?.flag} {currentLang?.label}</span>
                <span className="sm:hidden">{currentLang?.flag}</span>
              </Button>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Label>Select Language</Menu.Label>
              {languages.map((lang) => (
                <Menu.Item
                  key={lang.code}
                  onClick={() => setCurrentLang(lang)}
                  className={currentLang?.code === lang.code ? "bg-[#19b5af]/10" : ""}
                  leftSection={<span className="text-lg">{lang.flag}</span>}
                >
                  {lang.label}
                </Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>
        </Group>

      </Box>

      <AppointmentModal opened={modalOpened} onClose={closeModal} />
    </AppShell.Header>
  );
};

export default Header;
