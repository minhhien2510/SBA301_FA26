package com.example.lab5_orchid.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleNotFound(ResourceNotFoundException ex){

        return new ResponseEntity<>(
                new ErrorResponse(404, ex.getMessage()),
                HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleGeneral(Exception ex){

        return new ResponseEntity<>(
                new ErrorResponse(400, ex.getMessage()),
                HttpStatus.BAD_REQUEST);
    }
}

