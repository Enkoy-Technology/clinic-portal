"use client";

import { Box, Container, Text, Title } from "@mantine/core";
import { motion } from "framer-motion";

export default function TermsPage() {
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
              Terms of Service
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing and using the services of Dr. Hilina Specialty Dental, you agree to be
                bound by these Terms of Service. If you do not agree to these terms, please do not
                use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Our Services</h2>
              <p className="leading-relaxed">
                We provide professional dental services including but not limited to orthodontics,
                cosmetic dentistry, root canal treatment, dental implants, and general dentistry.
                All treatments are performed by licensed dental professionals.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Appointments</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Appointments must be scheduled in advance through our booking system or by phone.</li>
                <li>Please arrive 10 minutes before your scheduled appointment time.</li>
                <li>Cancellations must be made at least 24 hours in advance.</li>
                <li>Repeated no-shows may result in a booking fee for future appointments.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
              <p className="leading-relaxed mb-4">
                Payment is due at the time of service unless prior arrangements have been made.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We accept cash, mobile payments (Telebirr, CBE Birr), and bank transfers.</li>
                <li>Cost estimates are provided before treatment, but final costs may vary based on actual treatment needs.</li>
                <li>Payment plans may be available for extensive treatments – please inquire.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Patient Responsibilities</h2>
              <p className="leading-relaxed mb-4">As a patient, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete medical and dental history</li>
                <li>Inform us of any changes in your health condition</li>
                <li>Follow post-treatment instructions provided by our dental team</li>
                <li>Attend follow-up appointments as recommended</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Treatment Consent</h2>
              <p className="leading-relaxed">
                Before any treatment, we will explain the procedure, risks, benefits, and alternatives.
                Your written or verbal consent will be obtained before proceeding with treatment.
                You have the right to ask questions and refuse treatment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p className="leading-relaxed">
                While we strive to provide the highest quality dental care, we cannot guarantee specific
                outcomes. Dental procedures carry inherent risks that will be explained before treatment.
                Our liability is limited to the scope of services provided.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Website Use</h2>
              <p className="leading-relaxed">
                The information on our website is for general informational purposes only and does not
                constitute medical advice. Always consult with our dental professionals for specific
                dental concerns.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to Terms</h2>
              <p className="leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. Changes will be
                posted on this page with an updated revision date. Continued use of our services
                after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Information</h2>
              <p className="leading-relaxed">
                For questions about these Terms of Service, please contact us:
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
