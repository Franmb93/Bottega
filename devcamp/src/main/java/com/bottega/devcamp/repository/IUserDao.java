package com.bottega.devcamp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bottega.devcamp.entities.User;


@Repository
public interface IUserDao extends JpaRepository<User, String> {
    public User findByUsername(String username);
}
