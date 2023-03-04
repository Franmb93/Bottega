package com.bottega.devcamp.controllers;

import java.security.NoSuchAlgorithmException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bottega.devcamp.dtos.DTOLoginUser;
import com.bottega.devcamp.entities.User;
import com.bottega.devcamp.services.IUserService;
import com.bottega.devcamp.utils.JwtUtils;
import com.bottega.devcamp.utils.PasswordManagment;

@RestController
@RequestMapping("/api/login")
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {
    
    @Autowired
    private IUserService userService;

    @Autowired
    private JwtUtils jwtUtils;

    @PostMapping
    public ResponseEntity<DTOLoginUser> login(@RequestBody User login){
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

        DTOLoginUser dtoLoginUser = new DTOLoginUser();
        
        dtoLoginUser.setAuthToken(jwtUtils.generateToken(foundUser));
        dtoLoginUser.setUsername(foundUser.getUsername());

        return new ResponseEntity<>(dtoLoginUser, HttpStatus.OK);
    }
}
