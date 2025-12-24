"use client";
import {
  Button,
  Container,
  Grid,
  Group,
  Paper,
  Stack,
  Text,
  TextInput,
  Textarea,
  ThemeIcon,
  Title
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { Clock, Mail, Phone, Send } from "lucide-react";
import { useState } from "react";

const COUNTRY_CODE = "+251";

function normalizeETPhone(input: string) {
  const digits = input.replace(/[^\d]/g, "");
  const local = digits.startsWith("251") ? digits.slice(3) : digits;
  const trimmed = local.slice(0, 9);
  return trimmed;
}

export function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!formData.fullName || !formData.phone || !formData.message) {
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
        name: formData.fullName.trim(),
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

      // Reset form
      setFormData({
        fullName: "",
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
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#19b5af]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#19b5af]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <Container size="xl" px={{ base: "md", lg: "xl" }} className="relative z-10">
        <Grid gutter={60}>

          {/* Left Column: Contact Info & Map */}
          <Grid.Col span={{ base: 12, lg: 5 }}>
            <Stack gap="xl">
                <div>
                    <Text className="text-[#19b5af] font-bold tracking-widest uppercase text-sm mb-2">
                        Get in Touch
                    </Text>
                    <Title className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Dr. Hilina Specialty Dental Clinic
                    </Title>
                    <Text className="text-gray-500 text-lg mt-4 leading-relaxed">
                        Have a question or need to schedule a visit? Our friendly team is here to help you.
                    </Text>
                </div>

                <Stack gap="lg" mt="md">
                    <ContactItem
                        icon={Phone}
                        title="Call Us"
                        content="+251 910 151 739"
                    />
                    <ContactItem
                        icon={Mail}
                        title="Email Us"
                        content="info@drhilinidental.com"
                    />
                    <ContactItem
                        icon={Clock}
                        title="Working Hours"
                        content="Mon - Fri: 9AM - 6PM, Sat: 9AM - 2PM"
                    />
                </Stack>

                {/* Map Card */}
                <Paper radius="lg" withBorder className="h-[250px] w-full mt-4 bg-gray-100 shadow-sm">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5864449!2d38.7773539!3d9.0015331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85a86ded332f%3A0x44c28d453e104534!2sDr%20Hilina%20Dental%20Clinic!5e0!3m2!1sen!2set!4v1639000000000!5m2!1sen!2set"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="grayscale hover:grayscale-0 transition-all duration-500"
                    />
                </Paper>
            </Stack>
          </Grid.Col>
          {/* Right Column: Contact Form */}
          <Grid.Col span={{ base: 12, lg: 7 }}>
            <Paper
                p={40}
                radius="xl"
                className="bg-white border border-gray-100 shadow-xl h-full flex flex-col justify-center relative overflow-hidden"
            >
                {/* Decorative */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#19b5af]/10 rounded-bl-full opacity-50" />

                <Title order={3} className="text-2xl font-bold text-gray-900 mb-8 z-10">
                    Send us a Message
                </Title>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5 z-10">
                    <TextInput
                        label="Full Name"
                        placeholder="John Doe"
                        required
                        size="md"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        classNames={{ input: "bg-gray-50 border-gray-200 focus:border-[#19b5af] focus:ring-1 focus:ring-[#19b5af] transition-all" }}
                     />

                    <TextInput
                        label="Phone Number"
                        placeholder="911 234 567"
                        type="tel"
                        required
                        size="md"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        classNames={{ input: "bg-gray-50 border-gray-200 focus:border-[#19b5af] focus:ring-1 focus:ring-[#19b5af] transition-all" }}
                     />

                    <Textarea
                        label="Message"
                        placeholder="How can we help you?"
                        required
                        minRows={5}
                        size="md"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        classNames={{ input: "bg-gray-50 border-gray-200 focus:border-[#19b5af] focus:ring-1 focus:ring-[#19b5af] transition-all" }}
                    />

                    <Button
                        type="submit"
                        size="lg"
                        loading={isLoading}
                        className="bg-[#19b5af] hover:bg-[#14918c] text-white rounded-lg mt-4 shadow-lg shadow-[#19b5af]/20 transition-transform active:scale-95"
                        rightSection={<Send size={18} />}
                    >
                        Send Message
                    </Button>
                </form>
            </Paper>
          </Grid.Col>

        </Grid>
      </Container>
    </section>
  );
}

function ContactItem({ icon: Icon, title, content }: { icon: any; title: string; content: string }) {
    return (
        <Group>
            <ThemeIcon size={48} radius="xl" className="bg-[#19b5af]/10 text-[#19b5af]">
                <Icon size={24} strokeWidth={1.5} />
            </ThemeIcon>
            <div>
                <Text size="sm" className="text-gray-500 font-medium uppercase tracking-wide">
                    {title}
                </Text>
                <Text size="lg" className="text-gray-900 font-semibold">
                    {content}
                </Text>
            </div>
        </Group>
    );
}
