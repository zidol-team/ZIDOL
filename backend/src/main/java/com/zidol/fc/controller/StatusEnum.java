package com.zidol.fc.controller;

import lombok.Getter;

@Getter
public enum StatusEnum {
    OK(200, "OK"),
    BAD_REQUEST(400, "BAD_REQUEST"),
    NOT_FOUND(404, "NOT_FOUND"),
    INTERNAL_SERVER_ERROR(500, "INTERNAL_SERVER_ERROR");

    private int status;
    private String code;

    StatusEnum(int status, String code) {
        this.status = status;
        this.code = code;
    }
}
