package com.bottega.devcamp.services;

import java.util.List;

import com.bottega.devcamp.entities.User;

public interface IUserService {
    
    public List<User> findAll();
    public User findById(String id);
    public User save(User user);
    public void delete(String id);
    public User findByUsername(String username);
}
