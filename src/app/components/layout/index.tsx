"use client";
import { AppShell } from "@mantine/core";
import { ScrollTopAffix } from "../../../shared";
import Footer from "./footer/footer";
import Header from "./header/header";

const RootPortalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppShell header={{ height: 80 }}>
      {/* <TopHeader /> */}
      <Header />
      <AppShell.Main>
        <div className="flex flex-col min-h-[calc(100vh-80px)]">
          <div className="flex-grow">{children}</div>
        </div>
      </AppShell.Main>
      <Footer />
      <ScrollTopAffix />
    </AppShell>
  );
};



export default RootPortalLayout;
