package com.bottega.devcamp.services.impl;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bottega.devcamp.entities.Room;
import com.bottega.devcamp.repository.IRoomDao;
import com.bottega.devcamp.services.IRoomService;

@Service
public class RoomServiceImpl implements IRoomService{
    
    @Autowired
    private IRoomDao dao;

    @Override
    public List<Room> findAll() {
        return dao.findAll();
    }

    @Override
    public Room findById(UUID id) {
        return dao.findById(id).orElse(null);
    }

    @Override
    public Room save(Room room) {
        return dao.save(room);
    }

    @Override
    public void delete(UUID id) {
        dao.deleteById(id);
    }


}
