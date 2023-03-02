package com.bottega.devcamp.services;

import java.util.List;
import java.util.UUID;

import com.bottega.devcamp.entities.User;

public interface IUserService {
    
    public List<User> findAll();
    public User findById(UUID id);
    public User save(User user);
    public void delete(UUID id);
}
