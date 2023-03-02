package com.bottega.devcamp.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bottega.devcamp.entities.Message;

public interface IMessageDao extends JpaRepository<Message, UUID>{
    
}
