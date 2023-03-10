package com.bottega.devcamp.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bottega.devcamp.entities.User;
import com.bottega.devcamp.repository.IUserDao;
import com.bottega.devcamp.services.IUserService;

@Service
public class UserServiceImpl implements IUserService{
    
    @Autowired
    private IUserDao dao;

    @Override
    public List<User> findAll() {
        return dao.findAll();
    }

    @Override
    public User findById(String id) {
        return dao.findById(id).orElse(null);
    }

    @Override
    public User save(User user) {
        return dao.save(user);
    }

    @Override
    public void delete(String id) {
        dao.deleteById(id);
    }

    @Override
    public User findByUsername(String username) {
        return dao.findByUsername(username);
    }


}
