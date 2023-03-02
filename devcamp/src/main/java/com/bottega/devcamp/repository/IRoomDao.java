package com.bottega.devcamp.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.bottega.devcamp.entities.Room;

public interface IRoomDao extends JpaRepository<Room, String>{
    
}
