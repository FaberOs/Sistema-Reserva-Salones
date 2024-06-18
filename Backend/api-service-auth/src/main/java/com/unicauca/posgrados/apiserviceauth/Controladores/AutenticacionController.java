package com.unicauca.posgrados.apiserviceauth.Controladores;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.unicauca.posgrados.apiserviceauth.Modelos.UsuarioModel;
import com.unicauca.posgrados.apiserviceauth.Modelos.AuthRequest;
import com.unicauca.posgrados.apiserviceauth.Servicios.UsuarioServicesInt;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/login")
public class AutenticacionController {

    @Autowired
    public UsuarioServicesInt usuarioService; // Suponiendo que tienes un servicio para gestionar usuarios

    /**
     * Autentica a un usuario por nombre de usuario y contraseña.
     * 
     * Método HTTP: Post
     * Ruta completa: http://localhost:8080/api/login/autenticar
     * 
     * @param username    El nombre de usuario del usuario.
     * @param contrasenia La contraseña del usuario.
     * @return El usuario autenticado con un código de estado 200 (OK) si la autenticación es exitosa.
     *         Si la contraseña no coincide, devuelve un código de estado 401 (Unauthorized).
     *         Si el usuario no existe, devuelve un código de estado 404 (Not Found).
     */
    @PostMapping("/autenticar")
    public ResponseEntity<UsuarioModel> autenticarUsuario(@RequestBody AuthRequest authRequest) {
        // authRequest debe ser una clase que contenga username y contrasenia como atributos.
        String username = authRequest.getUsername();
        String contrasenia = authRequest.getContrasenia();

        // Lógica para autenticar al usuario
        UsuarioModel usuario = usuarioService.autenticar(username, contrasenia);
        System.out.println("llega peticion");

        if (usuario != null) {
            return new ResponseEntity<>(usuario, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED); // Código de estado 401 Unauthorized
        }
    }


    /**
     * Obtiene un usuario por su nombre de usuario.
     * 
     * Método HTTP: GET
     * Ruta completa: http://localhost:8080/api/login/username
     * 
     * @param username El nombre de usuario del usuario a buscar.
     * @return El usuario encontrado con un código de estado 200 (OK) si existe.
     *         Si el usuario no existe, devuelve un código de estado 404 (Not Found).
     */
    @GetMapping("/username")
    public ResponseEntity<UsuarioModel> getUserByUsername(@RequestParam("username") String username){
        UsuarioModel user = usuarioService.getUserByUsername(username);
        if (user != null) {
            return new ResponseEntity<>(user, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
