import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import RootStyleRegistry from "./mantine";

export const metadata: Metadata = {
  title: "Dr Hilina Dental",
  description:
    "Dr Hilina Dental Clinic provides exceptional dental care services, including routine check-ups, advanced treatments, and personalized care to ensure your oral health and smile are at their best.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description as string} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={metadata.title as string} />
        <meta
          property="og:description"
          content={metadata.description as string}
        />
      </head>
      <body style={{ backgroundColor: "var(--mantine-color-body)" }}>
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </body>
    </html>
  );
}
