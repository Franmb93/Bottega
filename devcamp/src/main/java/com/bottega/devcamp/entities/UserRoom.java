package com.bottega.devcamp.entities;

import java.io.Serializable;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.IdClass;
import javax.persistence.Table;

import lombok.Data;

@Entity(name = "user_room")
@Table(name = "user_room")
@Data
@IdClass(UserRoomPK.class)
public class UserRoom implements Serializable {

    @EmbeddedId
    private UserRoomPK id;

    private String user_id;

    private String room_id;
}