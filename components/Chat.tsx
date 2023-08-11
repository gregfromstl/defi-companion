import React, { useRef, useLayoutEffect } from 'react';
import { 
  Avatar, 
  Box, 
  Center, 
  Text, 
  Input, 
  Button, 
  Flex, 
  Spacer, 
  FormControl, 
  HStack, 
  Circle
} from "@chakra-ui/react";
import { useChat } from "ai/react";
import { Person, Robot, UserCircle } from '@phosphor-icons/react';



const MessageCard = ({ id, role, content }:any) => (
  <HStack 
    key={id} 
    border="1px solid gray.300" 
    p={4} 
    color='gray.50' 
    flexDirection='row' 
    alignItems={content.length > 50 ? 'flex-start' : 'center'}
    gap={4}
  >
    
    <Circle size={12} bg={role == 'assistant' ? 'purple' : 'blue'} color='gray.50' alignItems={'center'}>
    { role == 'assistant' ? <Robot size={18} weight="fill" /> : <UserCircle size={18} weight="fill" />}
    </Circle>
    <Text>
        {content}
    </Text>
  </HStack>
)

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

useLayoutEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
}, [messages]);

  return (
    <Center minH='80vh' maxHeight='200vh' maxW="900px" w='100vw'  flexDir='column' p={8} justifyContent='space-between' py={8}>
        <Box h='100%' w='100%' gap={4} overflowY='auto' mb={4}>
            {messages.map((m) => (
                <MessageCard id={m.id} role={m.role} content={m.content} key={m.id}/>
            ))}
            <div ref={messagesEndRef}/>
        </Box>
        <Box w='100%' bg='gray.50'>
            <form onSubmit={handleSubmit}>
              <Flex position='relative'>
                <FormControl id="user-input">
                  <Input
                      placeholder="Say something..."
                      value={input}
                      onChange={handleInputChange}
                      color='black'
                      h={16}
                  />
                </FormControl>
                <Spacer/>
                <Button type="submit" bg='purple.800' _hover={{bg: 'purple.700'}} color={'white'}  ml={2} position="absolute" right={2} top={1} h={14} zIndex={4}>
                  Send
                </Button>
              </Flex>
          </form>
        </Box>
    </Center>
  );
}
