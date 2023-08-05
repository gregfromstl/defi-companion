"use client";

import { Box, Input } from "@chakra-ui/react";
import { useChat } from "ai/react";

export default function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat();

    return (
        <Box w="300px">
            {messages.map((m) => (
                <Box key={m.id}>
                    {m.role}: {m.content}
                </Box>
            ))}

            <form onSubmit={handleSubmit}>
                <Input
                    placeholder="Say something..."
                    value={input}
                    onChange={handleInputChange}
                />
            </form>
        </Box>
    );
}
