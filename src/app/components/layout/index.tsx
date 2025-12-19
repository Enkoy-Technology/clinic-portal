"use client";
import { AppShell, Loader } from "@mantine/core";
import { ScrollTopAffix, useIsMounted } from "../../../shared";
import Footer from "./footer/footer";
import Header from "./header/header";

const RootPortalLayout = ({ children }: { children: React.ReactNode }) => {
  const mounted = useIsMounted();

  if (!mounted) {
    return (
      <div className="min-h-screen relative">
        <Loader />
      </div>
    );
  } else {
    return (
      <AppShell className="flex flex-col min-h-screen">
        {/* <TopHeader /> */}
        <Header />
        <div>{children}</div>
        <Footer />
        <ScrollTopAffix />
      </AppShell>
    );
  }
};

export default RootPortalLayout;
