package com.bottega.devcamp.entities;

import java.util.List;
import java.util.UUID;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.Data;

@Entity
@Data
public class User {
    
    @Id
    private UUID id;
    private String username;
    private String password;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
	@JsonBackReference
	private List<Room> rooms;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
	@JsonBackReference
	private List<Message> messages;

}
