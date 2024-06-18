package com.unicauca.posgrados.Controladores;

// En el archivo UsuarioControllerTest.java

import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.http.MediaType;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import org.springframework.beans.factory.annotation.Autowired;
import org.junit.Test;
import java.util.*;



import com.fasterxml.jackson.databind.ObjectMapper;

import com.unicauca.posgrados.apiserviceauth.Servicios.UsuarioServicesInt;
import com.unicauca.posgrados.apiserviceauth.Controladores.UsuarioController;  
import com.unicauca.posgrados.apiserviceauth.Modelos.UsuarioModel;

@RunWith(SpringRunner.class)
@WebMvcTest(UsuarioController.class)
public class UsuarioControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UsuarioServicesInt userService; // Mock del servicio

    @Test
    public void testCreateUser() throws Exception {
        UsuarioModel user = new UsuarioModel(); // Crea un usuario de ejemplo
        // Configura el comportamiento del servicio mock para el método createUser
        when(userService.createUser(any(UsuarioModel.class))).thenReturn(user);

        // Realiza la solicitud POST para crear un usuario
        mockMvc.perform(post("/api/usuario")
            .contentType(MediaType.APPLICATION_JSON)
            .content(asJsonString(user)))
            .andExpect(status().isCreated()); // Espera una respuesta con código 201 (Created)
    }

    @Test
    public void testGetUserById() throws Exception {
        Long userId = 1L; // ID de usuario de ejemplo
        UsuarioModel user = new UsuarioModel(); // Crea un usuario de ejemplo
        // Configura el comportamiento del servicio mock para el método getUserById
        when(userService.getUserById(userId)).thenReturn(user);

        // Realiza la solicitud GET para obtener un usuario por su ID
        mockMvc.perform(get("/api/usuario/{id}", userId))
            .andExpect(status().isOk()); // Espera una respuesta con código 200 (OK)
    }

    @Test
    public void testGetUserByUsername() throws Exception {
        String username = "exampleUser"; // Nombre de usuario de ejemplo
        UsuarioModel user = new UsuarioModel(); // Crea un usuario de ejemplo
        // Configura el comportamiento del servicio mock para el método getUserByUsername
        when(userService.getUserByUsername(username)).thenReturn(user);

        // Realiza la solicitud GET para obtener un usuario por su nombre de usuario
        mockMvc.perform(get("/api/usuario/username")
            .param("username", username))
            .andExpect(status().isOk()); // Espera una respuesta con código 200 (OK)
    }

    @Test
    public void testGetAllUsers() throws Exception {
        List<UsuarioModel> userList = new ArrayList<>(); // Crea una lista de usuarios de ejemplo
        // Configura el comportamiento del servicio mock para el método getAllUsers
        when(userService.getAllUsers()).thenReturn(userList);

        // Realiza la solicitud GET para obtener todos los usuarios
        mockMvc.perform(get("/api/usuario"))
            .andExpect(status().isOk()); // Espera una respuesta con código 200 (OK)
    }

    @Test
    public void testUpdateUser() throws Exception {
        Long userId = 1L; // ID de usuario de ejemplo
        UsuarioModel user = new UsuarioModel(); // Crea un usuario de ejemplo
        // Configura el comportamiento del servicio mock para el método updateUser
        when(userService.updateUser(any(UsuarioModel.class))).thenReturn(user);

        // Realiza la solicitud PUT para actualizar un usuario por su ID
        mockMvc.perform(put("/api/usuario/{id}", userId)
            .contentType(MediaType.APPLICATION_JSON)
            .content(asJsonString(user)))
            .andExpect(status().isOk()); // Espera una respuesta con código 200 (OK)
    }

    @Test
    public void testDeleteUser() throws Exception {
        Long userId = 1L; // ID de usuario de ejemplo
        // Configura el comportamiento del servicio mock para el método deleteUser
        doNothing().when(userService).deleteUser(userId);

        // Realiza la solicitud DELETE para eliminar un usuario por su ID
        mockMvc.perform(delete("/api/usuario/{id}", userId))
            .andExpect(status().isOk()); // Espera una respuesta con código 200 (OK)
    }

    // Método para convertir un objeto Java a una cadena JSON
    private static String asJsonString(final Object obj) {
        try {
            final ObjectMapper mapper = new ObjectMapper();
            return mapper.writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
