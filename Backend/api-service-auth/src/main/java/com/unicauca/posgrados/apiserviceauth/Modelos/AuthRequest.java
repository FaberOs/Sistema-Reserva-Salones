package com.unicauca.posgrados.apiserviceauth.Modelos;


public class AuthRequest {

    private String username;
    private String contrasenia;

    public AuthRequest() {
    }

    public AuthRequest(String username, String contrasenia) {
        this.username = username;
        this.contrasenia = contrasenia;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getContrasenia() {
        return contrasenia;
    }

    public void setContrasenia(String contrasenia) {
        this.contrasenia = contrasenia;
    }
}