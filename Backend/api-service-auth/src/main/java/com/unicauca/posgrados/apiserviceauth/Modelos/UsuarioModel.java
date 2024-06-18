package com.unicauca.posgrados.apiserviceauth.Modelos;



import java.security.Permission;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Usuario")
public  class UsuarioModel {

    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Long id;

    @Column(name = "nombres")
    protected String nombres;

    @Column(name = "apellidos")
    protected String apellidos;

    @Column(name = "cargo_institucional")
    protected String cargoInstitucional;

    @Column(name = "codigo_institucional")
    protected String codigoInstitucional;

    @Column(name = "numero_identificacion")
    protected String numeroIdentificacion;

    
    @Column(name = "correo_institucional")
    protected String correoInstitucional;

    @Column(name = "username")
    private String username;

    @Column(name = "contrasenia")
    protected String contrasenia;

    @Column(name = "facultad")
    protected  String facultad;

    @Column(name = "programa")
    protected  String programa;

    @Column(name = "rol")
    protected String rol;





    public Long getLong(){
       
        return this.id;
    }

    public void setId(Long id){
        this.id =id;
    }

    public String getFacultad() {
        return facultad;
        
    }

    public void setFacultad(String facultad) {
        this.facultad = facultad;
    }

    public String getNombres() {
        return nombres;
    }

    public void setNombres(String nombres) {
        this.nombres = nombres;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public String getCargoInstitucional() {
        return cargoInstitucional;
    }

    public void setCargoInstitucional(String cargoInstitucional) {
        this.cargoInstitucional = cargoInstitucional;
    }

    public String getCodigoInstitucional() {
        return codigoInstitucional;
    }

    public void setCodigoInstitucional(String codigoInstitucional) {
        this.codigoInstitucional = codigoInstitucional;
    }

    public String getNumeroIdentificacion() {
        return numeroIdentificacion;
    }

    public void setNumeroIdentificacion(String numeroIdentificacion) {
        this.numeroIdentificacion = numeroIdentificacion;
    }

   

    public String getContrasenia() {
        return contrasenia;
    }

    public void setContrasenia(String contrasenia) {
        this.contrasenia = contrasenia;
    }

    public String getUsername(){
        return this.username;
    }

    public void setUsername(String username){
        this.username = username;
    }

    
 
public String getPassHash() {
    //return passHash;
    return null;
}

public String getRolName() {
    /*  if (rol != null) {
        return rol.name(); // Suponiendo que 'rol' es el campo que almacena el rol
    }*/
    return null; // O maneja la ausencia de un rol de la manera que desees


}



}