package com.bottega.devcamp.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.bottega.devcamp.entities.Message;

public interface IMessageDao extends JpaRepository<Message, String> {

    Page<Message> findByRoomId(String roomId, Pageable pageable);

}
