package com.bottega.devcamp.controllers;

import java.security.NoSuchAlgorithmException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bottega.devcamp.entities.User;
import com.bottega.devcamp.services.IUserService;
import com.bottega.devcamp.utils.PasswordManagment;

@RestController
@RequestMapping("/api/login")
public class LoginController {
    
    @Autowired
    private IUserService userService;

    @PostMapping
    public ResponseEntity<User> login(@RequestBody User login){

        User foundUser = userService.findByUsername(login.getUsername());

        if(foundUser == null){
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

        try {
            if(!PasswordManagment.checkPassword(login.getPassword(), foundUser.getPassword())){
                return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
            }
        } catch (NoSuchAlgorithmException e) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

        return new ResponseEntity<>(foundUser, HttpStatus.OK);       
        
    }
}
