package com.bottega.devcamp.services;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.bottega.devcamp.entities.Message;

public interface IMessageService {

    public List<Message> findAll();

    public Page<Message> findByRoomId(String roomId, Pageable page);

    public Message findById(String id);

    public Message save(Message save);

    public void delete(String id);
}
