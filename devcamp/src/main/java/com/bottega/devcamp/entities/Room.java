package com.bottega.devcamp.entities;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import com.fasterxml.jackson.annotation.JsonBackReference;

import java.util.HashSet;
import java.util.Set;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;

@Entity
@Data
public class Room {

    @Id
    String id;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_room", joinColumns = @JoinColumn(name = "room_id"), inverseJoinColumns = @JoinColumn(name = "user_id"))
    @JsonBackReference(value = "users")
    @EqualsAndHashCode.Exclude
    private Set<User> users = new HashSet<>();

    private String name;
}
