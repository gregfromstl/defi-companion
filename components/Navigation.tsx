"use client"
import { Flex, Heading } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Triangle } from "@phosphor-icons/react";

export default function Navigation () {
    return(
        <Flex width={'100%'} height={24} bg={'black'} justifyContent={'space-between'} alignItems={'center'} p={4}>
            
            <Heading flexDir={'row'} display={'flex'} alignItems={'center'} gap={2} size={'16px'}>
                <Triangle size={24} weight="fill"/>
                Defi Companion
                </Heading>

            <ConnectButton />
            </Flex>
    )
}