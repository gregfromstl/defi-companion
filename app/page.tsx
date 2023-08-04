"use client";
import { GlobalContextProvider, useGlobalContext } from "@/context/Globals";
import {
  Flex
} from "@chakra-ui/react";


import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Page() {
  // const { isClient } = useGlobalContext();
  
  return (
    <GlobalContextProvider>
      <Flex direction="column" minHeight="100vh" overflowX="hidden" gap={8} >
        <ConnectButton />
      </Flex>

    </GlobalContextProvider>
  );
}
