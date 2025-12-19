import { AppShell } from "@mantine/core";
import FooterSection from "./footer-section";

const Footer = () => {
  return (
    <AppShell.Footer className="bg-gradient-to-br from-[#14918c] via-[#19b5af] to-[#33C1B7] text-white relative mt-4">
      <FooterSection />
    </AppShell.Footer>
  );
};

export default Footer;
