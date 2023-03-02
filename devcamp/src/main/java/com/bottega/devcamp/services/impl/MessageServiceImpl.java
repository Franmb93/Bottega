package com.bottega.devcamp.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bottega.devcamp.entities.Message;
import com.bottega.devcamp.repository.IMessageDao;
import com.bottega.devcamp.services.IMessageService;

@Service
public class MessageServiceImpl implements IMessageService{
    
    @Autowired
    private IMessageDao dao;

    @Override
    public List<Message> findAll() {
        return dao.findAll();
    }

    @Override
    public Message findById(String id) {
        return dao.findById(id).orElse(null);
    }

    @Override
    public Message save(Message message) {
        return dao.save(message);
    }

    @Override
    public void delete(String id) {
        dao.deleteById(id);
    }


}
