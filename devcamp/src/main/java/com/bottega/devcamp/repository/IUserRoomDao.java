package com.bottega.devcamp.repository;

import java.util.List;

public interface IUserRoomDao {

    public List<String> getUsersInRoom(String roomId);

    public List<String> getRoomsByUser(String userId);

}
