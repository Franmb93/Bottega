package com.bottega.devcamp.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bottega.devcamp.entities.User;


@Repository
public interface IUserDao extends JpaRepository<User, UUID> {
    public User findByUsername(String username);
}
