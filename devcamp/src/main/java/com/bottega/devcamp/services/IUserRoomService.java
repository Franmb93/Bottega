package com.bottega.devcamp.services;

import java.util.List;

public interface IUserRoomService {

    public List<String> findRoomUsers(String roomId);

    public List<String> findUserRooms(String userId);
}
