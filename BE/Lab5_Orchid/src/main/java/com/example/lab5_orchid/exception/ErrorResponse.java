package com.example.lab5_orchid.exception;

import java.time.LocalDateTime;

public class ErrorResponse {
    private int status;
    private String message;
    private LocalDateTime time;

    public ErrorResponse(int status, String message){
        this.status=status;
        this.message=message;
        this.time=LocalDateTime.now();
    }
}

