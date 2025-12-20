"use client";

import {
  Button,
  Group,
  Modal,
  Select,
  Stack,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { notifications } from "@mantine/notifications";
import { Calendar, Mail, Stethoscope, User } from "lucide-react";
import { useEffect, useState } from "react";
import { useCreatePatientWithAppointmentMutation } from "../../../shared/api/appointmentsApi";

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
  // keep digits only
  const digits = input.replace(/[^\d]/g, "");

  // If user pasted something like +251911... or 251911..., remove leading 251
  const local = digits.startsWith("251") ? digits.slice(3) : digits;

  // limit local part length (Ethiopia mobile usually 9 digits)
  const trimmed = local.slice(0, 9);

  return trimmed;
}

export function AppointmentModal({ opened, onClose, hideService = false, defaultService = "", initialData = null }: AppointmentModalProps) {
  const [createAppointment, { isLoading }] = useCreatePatientWithAppointmentMutation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: null as Date | null,
    service: defaultService,
    gender: "",
    message: "",
  });

  // Update form data when initialData or defaultService changes
  useEffect(() => {
    if (initialData && opened) {
      setFormData(prev => ({
        ...prev,
        name: initialData.name,
        email: initialData.email,
        phone: normalizeETPhone(initialData.phone),
        message: initialData.message,
        service: defaultService || prev.service,
      }));
    } else if (defaultService && opened) {
      setFormData(prev => ({ ...prev, service: defaultService }));
    } else if (opened && !initialData) {
      // Reset form when opening without initial data
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: null,
        service: defaultService || "",
        gender: "",
        message: "",
      });
    }
  }, [defaultService, opened, initialData]);

  // Helper function to format date for API
  const formatDateForAPI = (date: Date | null) => {
    if (!date) return "";
    return date.toISOString().split("T")[0];
  };

  // Generate a simple password
  const generatePassword = () => {
    return `Temp${Math.floor(Math.random() * 10000)}!`;
  };

  // Split name into first and last
  const splitName = (fullName: string) => {
    const parts = fullName.trim().split(" ");
    const firstName = parts[0] || "";
    const lastName = parts.slice(1).join(" ") || firstName;
    return { firstName, lastName };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.date) {
      notifications.show({
        title: "Missing Information",
        message: "Please select a date for your appointment",
        color: "red",
      });
      return;
    }

    try {
      const { firstName, lastName } = splitName(formData.name);

      // Construct the full phone number
      const fullPhoneNumber = COUNTRY_CODE + formData.phone;

      // Default appointment time 10:00 AM - 10:30 AM
      const payload = {
        profile: {
          user: {
            email: formData.email,
            password: generatePassword(),
            first_name: firstName,
            last_name: lastName,
          },
          role: "PATIENT",
          phone_number: fullPhoneNumber,
        },
        address: {
          city: "Addis Ababa",
          state: "Addis Ababa",
          street: "N/A",
          postal_code: "1000",
        },
        age: 0,
        dob: "2000-01-01",
        gender: formData.gender || "MALE",
        patient_status: "PENDING",
        telegram_username: "",
        note: formData.message || "",
        profile_picture: null,
        branch: null,
        doctor: null,
        service: null,
        scheduled_date: formatDateForAPI(formData.date)!,
        start_time: "10:00:00",
        end_time: "10:30:00",
        appointment_status: "SCHEDULED",
        reason: formData.service || "General Consultation",
        notes: formData.message || "",
      };

      console.log("📤 CLIENT: Full payload before mutation:", JSON.stringify(payload, null, 2));
      console.log("📱 Phone number:", fullPhoneNumber);
      console.log("👤 Profile:", JSON.stringify(payload.profile, null, 2));

      await createAppointment(payload as any).unwrap();

      notifications.show({
        title: 'Appointment Requested 🎉',
        message: 'We have received your request and will contact you shortly.',
        color: 'green',
      });

      onClose();
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: null,
        service: "",
        gender: "",
        message: "",
      });
    } catch (error: any) {
      console.error("Error creating appointment:", error);
      notifications.show({
        title: "Booking Failed",
        message: error?.data?.message || "There was an error booking your appointment. Please try again.",
        color: "red",
      });
    }
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={<Text fw={700} size="lg">Book Your Free Consultation</Text>}
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
                Fill out the form below to schedule your free consultation with our expert team.
            </Text>

          <TextInput
            label="Full Name"
            placeholder="John Doe"
            required
            leftSection={<User size={16} />}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

          <Group grow>
            <TextInput
                label="Email"
                placeholder="hello@example.com"
                type="email"
                leftSection={<Mail size={16} />}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <TextInput
              label="Phone"
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
          </Group>

          <Group grow>
            <DatePickerInput
                label="Preferred Date"
                placeholder="Pick a date"
                required
                leftSection={<Calendar size={16} />}
                value={formData.date}
                onChange={(date) => setFormData({ ...formData, date })}
                minDate={new Date()}
            />
            <Select
                label="Gender"
                placeholder="Select gender"
                required
                data={['MALE', 'FEMALE']}
                value={formData.gender}
                onChange={(val) => setFormData({ ...formData, gender: val || '' })}
            />
          </Group>

          {!hideService && (
            <Select
                label="Service of Interest"
                placeholder="Select service"
                required
                leftSection={<Stethoscope size={16} />}
                data={[
                    'Orthodontics',
                    'Zirconia Crowns',
                    'Root Canal',
                    'General Dentistry',
                    'Cosmetic Dentistry',
                    'Pediatric Dentistry',
                    'Other'
                ]}
                value={formData.service}
                onChange={(val) => setFormData({ ...formData, service: val || '' })}
            />
          )}

          <Textarea
            label="Additional Notes"
            placeholder="Tell us a bit about your dental needs..."
            minRows={3}
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
              Book Appointment
            </Button>
          </Group>
        </Stack>
      </form>
    </Modal>
  );
}
