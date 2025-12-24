"use client";

import {
  Button,
  Group,
  Modal,
  Stack,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { User } from "lucide-react";
import { useEffect, useState } from "react";

interface AppointmentModalProps {
  opened: boolean;
  onClose: () => void;
  hideService?: boolean;
  defaultService?: string;
  initialData?: {
    name: string;
    email: string;
    phone: string;
    message: string;
  } | null;
}

const COUNTRY_CODE = "+251";

function normalizeETPhone(input: string) {
  const digits = input.replace(/[^\d]/g, "");
  const local = digits.startsWith("251") ? digits.slice(3) : digits;
  const trimmed = local.slice(0, 9);
  return trimmed;
}

export function AppointmentModal({ opened, onClose, hideService = false, defaultService = "", initialData = null }: AppointmentModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  // Update form data when initialData changes
  useEffect(() => {
    if (initialData && opened) {
      setFormData({
        name: initialData.name,
        phone: normalizeETPhone(initialData.phone),
        message: initialData.message,
      });
    } else if (opened && !initialData) {
      // Reset form when opening without initial data
      setFormData({
        name: "",
        phone: "",
        message: "",
      });
    }
  }, [opened, initialData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.phone || !formData.message) {
      notifications.show({
        title: "Missing Information",
        message: "Please fill in all required fields",
        color: "red",
      });
      return;
    }

    try {
      setIsLoading(true);
      const normalizedPhone = normalizeETPhone(formData.phone);
      const fullPhoneNumber = COUNTRY_CODE + normalizedPhone;

      const payload = {
        name: formData.name.trim(),
        phone_number: fullPhoneNumber,
        message: formData.message.trim(),
      };

      const response = await fetch("https://ff-gng8.onrender.com/api/messages/create/", {
        method: "POST",
        headers: {
          "accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to send message");
      }

      notifications.show({
        title: 'Message Sent Successfully 🎉',
        message: 'We have received your message and will contact you shortly.',
        color: 'green',
      });

      onClose();
      setFormData({
        name: "",
        phone: "",
        message: "",
      });
    } catch (error: any) {
      console.error("Error sending message:", error);
      notifications.show({
        title: "Failed to Send",
        message: error?.message || "There was an error sending your message. Please try again.",
        color: "red",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={<Text fw={700} size="lg">Send us a Message</Text>}
      size="lg"
      centered
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
      radius="md"
      padding="xl"
    >
      <form onSubmit={handleSubmit}>
        <Stack gap="md">
            <Text size="sm" c="dimmed" mb="sm">
                Fill out the form below and we'll get back to you shortly.
            </Text>

          <TextInput
            label="Full Name"
            placeholder="John Doe"
            required
            leftSection={<User size={16} />}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

          <TextInput
            label="Phone Number"
            placeholder="911 234 567"
            required
            leftSection={
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#495057",
                }}
              >
                <span style={{ fontSize: 16 }}>🇪🇹</span>
                {COUNTRY_CODE}
              </span>
            }
            leftSectionWidth={78}
            value={normalizeETPhone(formData.phone)}
            onChange={(e) =>
              setFormData({ ...formData, phone: normalizeETPhone(e.currentTarget.value) })
            }
            styles={{
              input: {
                paddingLeft: 84,
              },
            }}
          />

          <Textarea
            label="Message"
            placeholder="How can we help you?"
            required
            minRows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />

          <Group justify="flex-end" mt="md">
            <Button variant="subtle" onClick={onClose} color="gray">
              Cancel
            </Button>
            <Button
                type="submit"
                loading={isLoading}
                className="bg-[#19b5af] hover:bg-[#14918c] transition-colors text-white font-semibold"
                size="md"
            >
              Send Message
            </Button>
          </Group>
        </Stack>
      </form>
    </Modal>
  );
}
