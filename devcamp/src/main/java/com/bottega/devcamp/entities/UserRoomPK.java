package com.bottega.devcamp.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Id;

import lombok.Data;

@Data
@Embeddable
public class UserRoomPK implements Serializable {
    @Id
    @Column(name = "user_id", insertable = false, updatable = false)
    private String user_id;

    @Id
    @Column(name = "room_id", insertable = false, updatable = false)
    private String room_id;
}