package com.bottega.devcamp.services;

import java.util.List;

import com.bottega.devcamp.entities.Room;

public interface IRoomService {
    
    public List<Room> findAll();
    public Room findById(String id);
    public Room save(Room save);
    public void delete(String id);
}
