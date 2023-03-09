package com.bottega.devcamp.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bottega.devcamp.repository.IUserRoomDao;
import com.bottega.devcamp.services.IUserRoomService;

@Service
public class UserRoomServiceImpl implements IUserRoomService {

    @Autowired
    private IUserRoomDao dao;

    @Override
    public List<String> findRoomUsers(String roomId) {
        return dao.getUsersInRoom(roomId);
    }

    @Override
    public List<String> findUserRooms(String userId) {
        return dao.getRoomsByUser(userId);
    }
}
