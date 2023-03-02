package com.bottega.devcamp.services;

import java.util.List;
import java.util.UUID;

import com.bottega.devcamp.entities.Room;

public interface IRoomService {
    
    public List<Room> findAll();
    public Room findById(UUID id);
    public Room save(Room save);
    public void delete(UUID id);
}
