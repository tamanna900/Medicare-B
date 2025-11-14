package com.example.Medicare.controller;

import com.example.Medicare.ChatMessage;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class ChatWebSocketController {

    @MessageMapping("/chat.sendMessage") // client sends here
    @SendTo("/topic/messages") // messages broadcasted here
    public ChatMessage sendMessage(ChatMessage message) {
        System.out.println("Received: " + message.getContent() + " from " + message.getSender());
        return message; // return to all subscribers
    }
}
