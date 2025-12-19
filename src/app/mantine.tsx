"use client";

import {
    ColorSchemeScript,
    MantineProvider,
    MantineThemeOverride
} from "@mantine/core";

import { theme as baseTheme } from "@repo/theme/mantine";

import { Notifications } from "@mantine/notifications";
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
  return (
    <Provider store={store}>
      <MantineProvider theme={theme}>
        <ColorSchemeScript />
        <Notifications position="top-right" />
        <RootPortalLayout>{children}</RootPortalLayout>
      </MantineProvider>
    </Provider>
  );
}

