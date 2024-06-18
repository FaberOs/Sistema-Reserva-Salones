package com.unicauca.posgrados.apiserviceauth.Controladores;

import lombok.AllArgsConstructor;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import com.unicauca.posgrados.apiserviceauth.Modelos.UsuarioModel;
import com.unicauca.posgrados.apiserviceauth.Servicios.UsuarioServicesInt;
@RestController
@AllArgsConstructor
@RequestMapping("api/usuario")
public class UsuarioController {
    
    private UsuarioServicesInt userService;

    /**
     * Crea un nuevo usuario.
     * 
     * Método HTTP: POST
     * Ruta completa: http://localhost:8080/api/usuario
     * 
     * @param user El usuario a crear.
     * @return El usuario creado con un código de estado 201 (Created).
     */
    @PostMapping
    public ResponseEntity<UsuarioModel> createUser(@RequestBody UsuarioModel user){
        UsuarioModel savedUser = userService.createUser(user);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

    /**
     * Obtiene un usuario por su ID.
     * 
     * Método HTTP: GET
     * Ruta completa: http://localhost:8080/api/usuario/{id}
     * 
     * @param userId El ID del usuario.
     * @return El usuario encontrado con un código de estado 200 (OK) o un código de estado 404 (Not Found) si no se encuentra.
     */
    @GetMapping("{id}")
    public ResponseEntity<UsuarioModel> getUserById(@PathVariable("id") Long userId){
        UsuarioModel user = userService.getUserById(userId);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    /**
     * Obtiene un usuario por su nombre de usuario.
     * 
     * Método HTTP: GET
     * Ruta completa: http://localhost:8080/api/usuario/username
     * 
     * @param username El nombre de usuario.
     * @return El usuario encontrado con un código de estado 200 (OK) o un código de estado 404 (Not Found) si no se encuentra.
     */
    @GetMapping("/username")
    public ResponseEntity<UsuarioModel> getUserByUsername(@RequestParam("username") String username){
        UsuarioModel user = userService.getUserByUsername(username);
        if (user != null) {
            return new ResponseEntity<>(user, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    /**
     * Obtiene todos los usuarios.
     * 
     * Método HTTP: GET
     * Ruta completa: http://localhost:8080/api/usuario
     * 
     * @return Una lista de usuarios con un código de estado 200 (OK).
     */
    @GetMapping
    public ResponseEntity<List<UsuarioModel>> getAllUsers(){
        List<UsuarioModel> users = userService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    /**
     * Actualiza un usuario por su ID.
     * 
     * Método HTTP: PUT
     * Ruta completa: http://localhost:8080/api/usuario/{id}
     * 
     * @param userId El ID del usuario a actualizar.
     * @param user   Los nuevos datos del usuario.
     * @return El usuario actualizado con un código de estado 200 (OK).
     */
    @PutMapping("{id}")
    public ResponseEntity<UsuarioModel> updateUser(@PathVariable("id") Long userId, @RequestBody UsuarioModel user){
        user.setId(userId);
        UsuarioModel updatedUser = userService.updateUser(user);
        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    }

    /**
     * Elimina un usuario por su ID.
     * 
     * Método HTTP: DELETE
     * Ruta completa: http://localhost:8080/api/usuario/{id}
     * 
     * @param userId El ID del usuario a eliminar.
     * @return Un mensaje de éxito con un código de estado 200 (OK).
     */
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id") Long userId){
        userService.deleteUser(userId);
        return new ResponseEntity<>("User successfully deleted!", HttpStatus.OK);
    }

    /**
     * Obtiene todos los coordinadores.
     * 
     * Método HTTP: GET
     * Ruta completa: http://localhost:8080/api/usuario/todos
     * 
     * @return Una lista de usuarios que son coordinadores con un código de estado 200 (OK).
     */
    @GetMapping("/todos")
    public ResponseEntity<List<UsuarioModel>> obtenerTodosUsuarios() {
        List<UsuarioModel> users = userService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }
}
