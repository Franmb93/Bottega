package com.bottega.devcamp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bottega.devcamp.entities.User;


public interface IUserDao extends JpaRepository<User, String> {
    public User findByUsername(String username);
}
