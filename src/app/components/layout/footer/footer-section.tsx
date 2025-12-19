"use client";
import {
  ActionIcon,
  Container,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// TikTok Icon Component
const TikTokIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const services = [
  "Orthodontics",
  "Zirconia Crowns",
  "Root Canal",
  "Cosmetic Dentistry",
  "Pediatric Dentistry",
];

export function FooterSection() {
  return (
    <footer className="bg-transparent pt-12 pb-6">
      <Container size="xl">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* About */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <div className="bg-white rounded-lg px-3 py-1.5 hover:scale-105 transition-transform">
                <Image
                  src="/logo1.png"
                  alt="Dr. Hilina Dental"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
            </Link>
            <Text className="text-white/70 text-sm leading-relaxed mb-4">
              Your trusted partner for quality dental care. We combine expertise with compassion to give you the perfect smile.
            </Text>
            <Group gap="xs">
              <ActionIcon
                variant="subtle"
                size="lg"
                className="bg-white text-[#1877F2] hover:brightness-110 transition-all duration-300 shadow-sm rounded-full"
                aria-label="Facebook"
              >
                <Facebook size={18} strokeWidth={2} />
              </ActionIcon>
              <ActionIcon
                variant="subtle"
                size="lg"
                className="bg-white text-[#1DA1F2] hover:brightness-110 transition-all duration-300 shadow-sm rounded-full"
                aria-label="Twitter"
              >
                <Twitter size={18} strokeWidth={2} />
              </ActionIcon>
              <ActionIcon
                variant="subtle"
                size="lg"
                className="bg-white text-[#E1306C] hover:brightness-110 transition-all duration-300 shadow-sm rounded-full"
                aria-label="Instagram"
              >
                <Instagram size={18} strokeWidth={2} />
              </ActionIcon>
              <ActionIcon
                variant="subtle"
                size="lg"
                className="bg-white text-[#000000] hover:brightness-90 transition-all duration-300 shadow-sm rounded-full"
                aria-label="TikTok"
              >
                <TikTokIcon size={18} />
              </ActionIcon>
            </Group>
          </div>

          {/* Services */}
          <div>
            <Text className="text-white font-semibold mb-4">Our Services</Text>
            <Stack gap="xs">
              {services.map((service) => (
                <Link
                  key={service}
                  href="/services"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  {service}
                </Link>
              ))}
            </Stack>
          </div>

          {/* Contact */}
          <div>
            <Text className="text-white font-semibold mb-4">Contact Us</Text>
            <Stack gap="sm">
              <div className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>KT Building 3rd Floor, Bole Atlas Rd, Addis Ababa</span>
              </div>
              <div className="flex items-center gap-3 text-white/70 text-sm">
                <Phone size={16} className="flex-shrink-0" />
                <span>+251 910 151 739</span>
              </div>
              <div className="flex items-center gap-3 text-white/70 text-sm">
                <Mail size={16} className="flex-shrink-0" />
                <span>info@drhilinadental.com</span>
              </div>
            </Stack>
          </div>

          {/* Hours */}
          <div>
            <Text className="text-white font-semibold mb-4">Working Hours</Text>
            <Stack gap="xs" className="text-sm text-white/70">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="text-white">9AM - 7PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="text-white">9AM - 5PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white/50">Closed</span>
              </div>
            </Stack>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
            <Text size="xs">© 2024 Dr. Hilina Specialty Dental. All rights reserved.</Text>
            <Group gap="md">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </Group>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default FooterSection;
