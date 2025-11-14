package com.example.Medicare.service;

import com.example.Medicare.ChatMessage;
import com.example.Medicare.repository.ChatRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChatService {

    private final ChatRepository chatRepository;

    public ChatService(ChatRepository chatRepository) {
        this.chatRepository = chatRepository;
    }

    public ChatMessage saveMessage(ChatMessage message) {
        return chatRepository.save(message);
    }

    public List<ChatMessage> getAllMessages() {
        return chatRepository.findAll();
    }
}
