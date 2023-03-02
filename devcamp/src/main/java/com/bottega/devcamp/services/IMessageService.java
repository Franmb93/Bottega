package com.bottega.devcamp.services;

import java.util.List;
import java.util.UUID;

import com.bottega.devcamp.entities.Message;

public interface IMessageService {
    
    public List<Message> findAll();
    public Message findById(UUID id);
    public Message save(Message save);
    public void delete(UUID id);
}
