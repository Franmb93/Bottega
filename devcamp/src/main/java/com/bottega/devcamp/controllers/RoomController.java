package com.bottega.devcamp.controllers;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bottega.devcamp.entities.Room;
import com.bottega.devcamp.entities.User;
import com.bottega.devcamp.services.IRoomService;
import com.bottega.devcamp.services.IUserRoomService;
import com.bottega.devcamp.services.IUserService;

@RestController
@RequestMapping("/api/rooms")
class RoomController {

    @Autowired
    IRoomService service;

    @Autowired
    IUserRoomService userRoomService;

    @Autowired
    IUserService userService;

    @GetMapping
    public ResponseEntity<List<Room>> getAll() {
        try {
            List<Room> rooms = new ArrayList<>();

            service.findAll().forEach(rooms::add);

            if (rooms.isEmpty())
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);

            return new ResponseEntity<>(rooms, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Room> getById(@PathVariable("id") String id) {
        Room roomFound = service.findById(id);

        if (roomFound != null) {
            return new ResponseEntity<>(roomFound, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Room> create(@RequestBody Room room) {
        if (room.getId() == null)
            room.setId(UUID.randomUUID().toString());

        try {
            Room saveRoom = service.save(room);
            return new ResponseEntity<>(saveRoom, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable("id") String id) {
        try {
            service.delete(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
    }

    @GetMapping("/{roomId}/users")
    public ResponseEntity<?> getUsersInRoom(@PathVariable String roomId) {

        List<String> list = userRoomService.findRoomUsers(roomId);

        if (list.isEmpty())
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);

        List<User> users = new LinkedList<>();

        list.forEach(userId -> users.add(userService.findById(userId)));

        return new ResponseEntity<>(users, HttpStatus.OK);
    }

}