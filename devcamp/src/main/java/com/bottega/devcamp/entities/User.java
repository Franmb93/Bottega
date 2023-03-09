package com.bottega.devcamp.entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import org.springframework.lang.Nullable;

import com.fasterxml.jackson.annotation.JsonBackReference;
import java.util.HashSet;
import java.util.Set;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Data
public class User {

    @Id
    private String id;
    private String username;
    private String password;

    @ManyToMany(mappedBy = "users", fetch = FetchType.LAZY)
    @JsonBackReference(value = "rooms")
    @EqualsAndHashCode.Exclude
    private Set<Room> rooms = new HashSet<>();

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    @JsonBackReference(value = "messages")
    @Nullable
    private List<Message> messages;

}
