"use client";

import {
    ColorSchemeScript,
    Loader,
    MantineProvider,
    MantineThemeOverride,
} from "@mantine/core";

import { theme as baseTheme } from "@repo/theme/mantine";

import { Notifications } from "@mantine/notifications";
import { Suspense } from "react";
import { Provider } from "react-redux";
import RootPortalLayout from "./components/layout";
import { store } from "./store";

interface RootStyleRegistryProps {
  readonly children: React.ReactNode;
}

export default function RootStyleRegistry({
  children,
}: RootStyleRegistryProps) {
  const theme: Partial<MantineThemeOverride> = baseTheme;
  console.log("children", children);
  return (
    <Provider store={store}>
      <MantineProvider theme={theme}>
        <ColorSchemeScript />
        <Notifications position="top-right" />
        <Suspense fallback={<Loader />}>
          <RootPortalLayout>{children}</RootPortalLayout>
        </Suspense>
      </MantineProvider>
    </Provider>
  );
}
