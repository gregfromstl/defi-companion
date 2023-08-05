"use client";
import Chat from "@/components/Chat";
import { GlobalContextProvider } from "@/context/Globals";
import { Flex } from "@chakra-ui/react";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Page() {
    // const { isClient } = useGlobalContext();

    return (
        <GlobalContextProvider>
            <Flex
                direction="column"
                minHeight="100vh"
                overflowX="hidden"
                gap={8}
            >
                <ConnectButton />
                <Chat />
            </Flex>
        </GlobalContextProvider>
    );
}
