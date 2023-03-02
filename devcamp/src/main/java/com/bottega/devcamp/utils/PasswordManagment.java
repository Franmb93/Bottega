package com.bottega.devcamp.utils;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;


public class PasswordManagment {
    
    public static String hashPassword(String password) throws NoSuchAlgorithmException {
        MessageDigest md = MessageDigest.getInstance("SHA-256");
        md.update(password.getBytes());
        byte[] hashedPasswordBytes = md.digest();
        StringBuilder sb = new StringBuilder();
        for (byte b : hashedPasswordBytes) {
            sb.append(String.format("%02x", b));
        }
        return sb.toString();
    }

    public static boolean checkPassword(String enteredPassword, String hashedPassword) throws NoSuchAlgorithmException {
        String enteredPasswordHashed = hashPassword(enteredPassword);
        return enteredPasswordHashed.equals(hashedPassword);
    }

    private PasswordManagment(){}

}
