package com.bottega.devcamp.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bottega.devcamp.entities.Room;

public interface IRoomDao extends JpaRepository<Room, UUID>{
    
}
