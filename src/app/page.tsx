import {
    ContactSection,
    DentalServices,
    ExpertsSection,
    FreeConsultation,
    Hero,
    Story,
    Testimonials,
    WhyChooseUs
} from "./components";

export default function Home() {
  return (
    <>
      <Hero />
      <Story />
      <DentalServices />
      {/* <ServiceNew /> */}
      <FreeConsultation />
      <ExpertsSection />
      <WhyChooseUs />
      <Testimonials />
      <ContactSection />
    </>
  );
}
