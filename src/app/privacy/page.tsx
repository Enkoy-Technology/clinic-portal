"use client";

import { Box, Container, Text, Title } from "@mantine/core";
import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <Box className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <Box className="pt-32 pb-12 bg-gradient-to-b from-[#19b5af]/5 to-transparent">
        <Container size="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Title className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Privacy Policy
            </Title>
            <Text className="text-gray-500">
              Last updated: December 2024
            </Text>
          </motion.div>
        </Container>
      </Box>

      {/* Content */}
      <Container size="md" py={40}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          <div className="space-y-8 text-gray-600">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                Dr. Hilina Specialty Dental ("we," "our," or "us") is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                when you visit our website or use our dental services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <p className="leading-relaxed mb-4">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, and address when you book an appointment or contact us.</li>
                <li><strong>Medical Information:</strong> Dental history, treatment records, and health-related information necessary for providing dental care.</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP address and browser type.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="leading-relaxed mb-4">We use the collected information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and manage dental services and appointments</li>
                <li>Communicate with you about appointments, treatments, and follow-ups</li>
                <li>Send appointment reminders and promotional materials (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal
                and medical information. However, no method of transmission over the Internet is 100%
                secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Sharing Your Information</h2>
              <p className="leading-relaxed">
                We do not sell or rent your personal information. We may share your information with
                trusted third parties who assist us in operating our practice, such as appointment
                scheduling systems, but only to the extent necessary and under confidentiality agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
              <p className="leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal and medical records</li>
                <li>Request corrections to your information</li>
                <li>Request deletion of your data (subject to legal requirements)</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p><strong>Dr. Hilina Specialty Dental</strong></p>
                <p>KT Building 3rd Floor, Bole Atlas Rd</p>
                <p>Addis Ababa, Ethiopia</p>
                <p>Phone: +251 910 151 739</p>
                <p>Email: info@drhilinadental.com</p>
              </div>
            </section>
          </div>
        </motion.div>
      </Container>
    </Box>
  );
}
