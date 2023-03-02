package com.bottega.devcamp.controllers;

import java.util.ArrayList;
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
import com.bottega.devcamp.services.IRoomService;


@RestController
@RequestMapping("/api/rooms")
class RoomController {

    @Autowired
    IRoomService service;

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
    public ResponseEntity<Room> getById(@PathVariable("id") UUID id) {
        Room roomFound = service.findById(id);

        if (roomFound != null) {
            return new ResponseEntity<>(roomFound, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Room> create(@RequestBody Room room) {
        if(room.getId() == null) room.setId(UUID.randomUUID());

        try {
            Room saveRoom = service.save(room);
            return new ResponseEntity<>(saveRoom, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable("id") UUID id) {
        try {
            service.delete(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
    }
}