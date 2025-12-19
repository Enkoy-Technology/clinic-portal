import { Button, Box, Text, Title, Image } from "@mantine/core";

export function AboutUs() {
  return (
    <Box className="flex flex-col md:flex-row items-center justify-center gap-8 my-12 px-4 md:px-12">
      {/* Left Side - Image with diagonal top-left and bottom-right orientation */}
      <Box className="relative w-full md:w-1/2 flex justify-center items-center">
        <div
          className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px]
         border-[var(--mantine-color-primary-7)] transform rotate-6"
        >
          <Image
            src="/hero.jpg"
            alt="Dental Clinic Team"
            className="object-cover h-full w-full -rotate-6"
            radius="md"
          />
        </div>
      </Box>

      {/* Right Side - About Us Content */}
      <Box className="flex flex-col justify-start md:justify-center w-full md:w-1/2 text-center md:text-left">
        <Title className="text-3xl font-extrabold text-primary-800">
          About Us
        </Title>

        <Text size="xl" className="text-primary-700 mt-2 font-semibold">
          We Care For Your Dental Health
        </Text>

        <Text className="text-gray-600 mt-2 leading-relaxed">
          At our dental clinic, we are committed to offering a wide range of
          dental services for all age groups. From routine checkups to advanced
          cosmetic and restorative treatments, we provide top-notch care with a
          focus on patient comfort and safety. Our clinic utilizes modern
          technology and the latest techniques to ensure you receive the best
          possible treatment. We believe in building long-term relationships
          with our patients, fostering an environment of trust, compassion, and
          exceptional service.
        </Text>
      </Box>
    </Box>
  );
}
