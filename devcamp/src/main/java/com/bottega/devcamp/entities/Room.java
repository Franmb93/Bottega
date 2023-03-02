package com.bottega.devcamp.entities;


import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.Data;

@Entity
@Data
public class Room {
    
    @Id
    String id;

    
    
    @ManyToOne(fetch = FetchType.LAZY)
	private User user;	
}
