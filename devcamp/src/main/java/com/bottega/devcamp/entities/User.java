package com.bottega.devcamp.entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import org.springframework.lang.Nullable;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.Data;

@Entity
@Data
public class User {
    
    @Id
    private String id;
    private String username;
    private String password;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
	@JsonBackReference(value="rooms")
    @Nullable
	private List<Room> rooms;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
	@JsonBackReference(value="messages")
    @Nullable
	private List<Message> messages;

}
