package com.bottega.devcamp.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bottega.devcamp.entities.Message;
import com.bottega.devcamp.services.IMessageService;

@RestController
@RequestMapping("/api/message")
class MessageController {
    private static final Logger LOGGER = LoggerFactory.getLogger(MessageController.class);

    @Autowired
    IMessageService service;

    @GetMapping
    public ResponseEntity<List<Message>> getAll() {
        try {
            List<Message> messages = new ArrayList<>();

            service.findAll().forEach(messages::add);

            if (messages.isEmpty())
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);

            return new ResponseEntity<>(messages, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Message> getById(@PathVariable("id") String id) {
        Message messageFound = service.findById(id);

        if (messageFound != null) {
            return new ResponseEntity<>(messageFound, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Message> create(@RequestBody Message item) {
        if (item.getId() == null)
            item.setId(UUID.randomUUID().toString());

        try {
            Message savedItem = service.save(item);
            return new ResponseEntity<>(savedItem, HttpStatus.CREATED);
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

    @GetMapping("/infinite/{roomId}")
    public ResponseEntity<List<Message>> getMessages(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @PathVariable String roomId) {

        Pageable pageable = PageRequest.of(page, size, Sort.by("timestamp"));

        Page<Message> messagePage = service.findByRoomId(roomId, pageable);

        if (messagePage.getContent().isEmpty())
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);

        return new ResponseEntity<>(messagePage.getContent(), HttpStatus.OK);
    }
}