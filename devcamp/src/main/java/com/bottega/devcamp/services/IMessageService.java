package com.bottega.devcamp.services;

import java.util.List;

import com.bottega.devcamp.entities.Message;

public interface IMessageService {
    
    public List<Message> findAll();
    public Message findById(String id);
    public Message save(Message save);
    public void delete(String id);
}
