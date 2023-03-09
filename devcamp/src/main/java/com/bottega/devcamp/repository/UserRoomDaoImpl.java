package com.bottega.devcamp.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserRoomDaoImpl implements IUserRoomDao {

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<String> getUsersInRoom(String roomId) {
        String jpql = "SELECT u.user_id FROM user_room u WHERE room_id = :roomId";
        TypedQuery<String> query = entityManager.createQuery(jpql, String.class);
        query.setParameter("roomId", roomId);
        return query.getResultList();
    }

    @Override
    public List<String> getRoomsByUser(String userId) {
        String jpql = "SELECT u.room_id FROM user_room u WHERE user_id = :userId";
        TypedQuery<String> query = entityManager.createQuery(jpql, String.class);
        query.setParameter("userId", userId);
        return query.getResultList();
    }

}
