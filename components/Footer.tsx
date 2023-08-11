"use client"
import { Flex } from "@chakra-ui/react";
import { Copyright } from "@phosphor-icons/react";

export default function Footer () {
    return(
        <Flex width={'100%'} height={12} bg={'black'} justifyContent={'center'} alignItems={'center'} p={4}>

           <Copyright />
           All rights reserved 2023-24
            </Flex>
    )
}