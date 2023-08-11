"use client";
import Chat from "@/components/Chat";
import { GlobalContextProvider } from "@/context/Globals";
import { Flex } from "@chakra-ui/react";
import Navigation from "@/components/Navigation";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Page() {
    // const { isClient } = useGlobalContext();

    return (
        
                <>
                
                <Chat />
                </>
        
    );
}
