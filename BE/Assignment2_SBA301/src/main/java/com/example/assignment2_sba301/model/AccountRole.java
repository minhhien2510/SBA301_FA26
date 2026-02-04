package com.example.assignment2_sba301.model;

public enum AccountRole {
    ADMIN(1),
    STAFF(2);

    private final int code;

    AccountRole(int code) {
        this.code = code;
    }

    public int getCode() {
        return code;
    }

    public static AccountRole fromCode(Integer code) {
        if (code == null) {
            return null;
        }
        for (AccountRole role : values()) {
            if (role.code == code) {
                return role;
            }
        }
        throw new IllegalArgumentException("Unknown role code: " + code);
    }
}

