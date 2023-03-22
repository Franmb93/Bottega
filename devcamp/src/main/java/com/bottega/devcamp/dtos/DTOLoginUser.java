package com.bottega.devcamp.dtos;

import lombok.Data;

@Data
public class DTOLoginUser {

    String id;
    String username;
    String authToken;
}
