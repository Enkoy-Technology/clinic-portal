// TopHeader.tsx
"use client";

import React from "react";
import { Group, Text, UnstyledButton } from "@mantine/core";
import {
  IconPhone,
  IconMail,
  IconBrandFacebook,
  IconBrandYoutube,
  IconBrandTiktok,
  IconBrandTwitter,
  IconBrandInstagram,
} from "@tabler/icons-react";

const TopHeader: React.FC = () => {
  return (
    <div className="bg-[var(--mantine-color-primary-7)] p-2">
      <Group justify="space-between" className="max-w-screen-xl mx-auto">
        {/* Left End - Contact Info */}
        <Group gap="sm">
          <UnstyledButton className="flex items-center text-white transition-transform transform hover:scale-105 hover:underline">
            <IconPhone
              size={20}
              className="transition-colors hover:text-primary-300"
            />
            <Text ml={2} className="transition-colors hover:text-primary-300">
              +251-983054774
            </Text>
          </UnstyledButton>
          <UnstyledButton className="flex ml-4 items-center text-white transition-transform transform hover:scale-105 hover:underline">
            <IconMail
              size={20}
              className="transition-colors hover:text-primary-300"
            />
            <Text ml={2} className="transition-colors hover:text-primary-300">
              info@drhilina.com
            </Text>
          </UnstyledButton>
        </Group>

        {/* Right End - Social Media Icons */}
        <Group gap="md">
          <UnstyledButton className="flex items-center text-white transition-transform transform hover:scale-110 hover:bg-gray-700 p-2 rounded-full">
            <IconBrandFacebook
              size={20}
              className="transition-colors hover:text-blue-600"
            />
          </UnstyledButton>
          <UnstyledButton className="flex items-center text-white transition-transform transform hover:scale-110 hover:bg-gray-700 p-2 rounded-full">
            <IconBrandYoutube
              size={20}
              className="transition-colors hover:text-red-600"
            />
          </UnstyledButton>
          <UnstyledButton className="flex items-center text-white transition-transform transform hover:scale-110 hover:bg-gray-700 p-2 rounded-full">
            <IconBrandTiktok
              size={20}
              className="transition-colors hover:text-black"
            />
          </UnstyledButton>
          <UnstyledButton className="flex items-center text-white transition-transform transform hover:scale-110 hover:bg-gray-700 p-2 rounded-full">
            <IconBrandTwitter
              size={20}
              className="transition-colors hover:text-blue-400"
            />
          </UnstyledButton>
          <UnstyledButton className="flex items-center text-white transition-transform transform hover:scale-110 hover:bg-gray-700 p-2 rounded-full">
            <IconBrandInstagram
              size={20}
              className="transition-colors hover:text-pink-600"
            />
          </UnstyledButton>
        </Group>
      </Group>
    </div>
  );
};

export default TopHeader;
