"use client";
import { Text } from "@mantine/core";

interface ServiceDetailProps {
  params: {
    serviceId: string;
  };
}

export default function ServiceDetail({ params }: ServiceDetailProps) {
  return (
    <>
      <Text>Service Detail {params.serviceId}</Text>
    </>
  );
}
