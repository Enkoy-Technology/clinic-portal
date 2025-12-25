"use client";

import { Box, Button, Container, Text, Textarea, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { motion } from "framer-motion";
import { CheckCircle, Send } from "lucide-react";
import { useState } from "react";

export default function FeedbackPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm({
    initialValues: {
      name: "",
      message: "",
    },
    validate: {
      name: (value) => (value.trim().length < 2 ? "Name must be at least 2 characters" : null),
      message: (value) => (value.trim().length < 10 ? "Message must be at least 10 characters" : null),
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    setLoading(true);
    try {
      // Here you can add API call to submit feedback
      // For now, we'll just simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Feedback submitted:", values);
      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Error submitting feedback:", error);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <Box className="min-h-screen bg-gradient-to-br from-[#F2FAFB] via-[#F0F9FA] to-[#E8F6F8] flex items-center justify-center py-20">
        <Container size="sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-[#19b5af] rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-white" />
            </div>
            <Title className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Thank You!
            </Title>
            <Text className="text-lg text-gray-600 mb-8">
              Your feedback has been submitted successfully. We appreciate you taking the time to share your experience with us.
            </Text>
            <Button
              onClick={() => setSubmitted(false)}
              className="bg-[#19b5af] hover:bg-[#14918c] text-white"
            >
              Submit Another Feedback
            </Button>
          </motion.div>
        </Container>
      </Box>
    );
  }

  return (
    <Box className="min-h-screen bg-gradient-to-br from-[#F2FAFB] via-[#F0F9FA] to-[#E8F6F8] py-12 md:py-20">
      <Container size="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-10">
            <Title className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Share Your{" "}
              <span
                className="relative inline-block"
                style={{
                  background: 'linear-gradient(135deg, #19b5af, #33C1B7, #14918c)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Feedback
              </span>
            </Title>
            <Text className="text-lg text-gray-600">
              We value your opinion and would love to hear about your experience with us.
            </Text>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Box className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
              <form onSubmit={form.onSubmit(handleSubmit)}>
                <div className="space-y-6">
                  {/* Name Field */}
                  <TextInput
                    label="Your Name"
                    placeholder="Enter your name"
                    size="lg"
                    radius="xl"
                    required
                    {...form.getInputProps("name")}
                    classNames={{
                      label: "text-gray-900 font-bold mb-2",
                      input: "border-gray-200 focus:border-[#19b5af] focus:ring-[#19b5af]",
                    }}
                  />

                  {/* Message Field */}
                  <Textarea
                    label="Your Message"
                    placeholder="Share your feedback, experience, or suggestions..."
                    size="lg"
                    radius="xl"
                    minRows={6}
                    required
                    {...form.getInputProps("message")}
                    classNames={{
                      label: "text-gray-900 font-bold mb-2",
                      input: "border-gray-200 focus:border-[#19b5af] focus:ring-[#19b5af]",
                    }}
                  />

                  {/* Submit Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="pt-4"
                  >
                    <Button
                      type="submit"
                      size="lg"
                      radius="xl"
                      loading={loading}
                      className="w-full bg-gradient-to-r from-[#19b5af] to-[#14918c] hover:from-[#14918c] hover:to-[#19b5af] text-white font-bold text-lg shadow-lg shadow-[#19b5af]/30"
                    >
                      {loading ? (
                        "Submitting..."
                      ) : (
                        <>
                          <Send size={20} className="mr-2" />
                          Submit Feedback
                        </>
                      )}
                    </Button>
                  </motion.div>
                </div>
              </form>
            </Box>
          </motion.div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mt-8"
          >
            <Text className="text-sm text-gray-500">
              Your feedback helps us improve our services and provide better care.
            </Text>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}

