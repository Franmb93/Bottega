package com.bottega.devcamp.entities;

import java.util.Date;
import java.util.UUID;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.Data;

@Entity
@Data
public class Message {
    
    @Id
    private UUID id;

    private Date timestamp;
    private String content;

    @ManyToOne(fetch = FetchType.LAZY)
	private User user;	
}
