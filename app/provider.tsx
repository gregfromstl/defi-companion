"use client";
import config, { chains } from "@/utils/config";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import "@rainbow-me/rainbowkit/styles.css";
import { WagmiConfig } from "wagmi";

import { theme } from "@/theme";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CacheProvider>
      <WagmiConfig config={config}>
        <RainbowKitProvider
          chains={chains}
        >
          <ChakraProvider theme={theme} toastOptions={{ defaultOptions: { position: 'top-right' } }}>{children}</ChakraProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </CacheProvider>
  );
}
