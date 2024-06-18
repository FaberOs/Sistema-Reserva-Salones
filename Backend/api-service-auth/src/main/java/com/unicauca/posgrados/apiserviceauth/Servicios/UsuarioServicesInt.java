package com.unicauca.posgrados.apiserviceauth.Servicios;


import java.util.List;

import com.unicauca.posgrados.apiserviceauth.Modelos.UsuarioModel;

public interface UsuarioServicesInt {
    
    UsuarioModel createUser(UsuarioModel user);

    UsuarioModel getUserById(Long userId);

    UsuarioModel getUserByUsername(String username);

    List<UsuarioModel> getAllUsers();

    UsuarioModel updateUser(UsuarioModel user);

    void deleteUser(Long userId);

    UsuarioModel autenticar(String username, String contrasenia);

}
