package com.unicauca.posgrados.Controladores;

import com.unicauca.posgrados.apiserviceauth.Controladores.AutenticacionController;
import com.unicauca.posgrados.apiserviceauth.Modelos.AuthRequest;
import com.unicauca.posgrados.apiserviceauth.Modelos.UsuarioModel;
import com.unicauca.posgrados.apiserviceauth.Servicios.UsuarioServicesInt;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
public class AutenticacionControllerTest {

    @Mock
    private UsuarioServicesInt usuarioService;

    private AutenticacionController autenticacionController;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        autenticacionController = new AutenticacionController();
        autenticacionController.usuarioService = usuarioService;
    }

    @Test
    public void testAutenticarUsuario() {
        // Crear una instancia de AuthRequest con username y contrasenia
        AuthRequest authRequest = new AuthRequest("username", "password");

        // Crear un usuario de ejemplo que se autenticará
        UsuarioModel usuarioAutenticado = new UsuarioModel();
        usuarioAutenticado.setUsername("username");

        // Configurar el comportamiento del servicio de usuario mock
        Mockito.when(usuarioService.autenticar(authRequest.getUsername(), authRequest.getContrasenia()))
                .thenReturn(usuarioAutenticado);

        // Ejecutar el método a probar
        ResponseEntity<UsuarioModel> responseEntity = autenticacionController.autenticarUsuario(authRequest);

        // Verificar el resultado
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody()).isEqualTo(usuarioAutenticado);
    }

    @Test
    public void testAutenticarUsuarioConContraseniaIncorrecta() {
        // Crear una instancia de AuthRequest con username y contrasenia
        AuthRequest authRequest = new AuthRequest("username", "password");

        // Configurar el servicio de usuario mock para devolver null, lo que indica una contraseña incorrecta
        Mockito.when(usuarioService.autenticar(authRequest.getUsername(), authRequest.getContrasenia()))
                .thenReturn(null);

        // Ejecutar el método a probar
        ResponseEntity<UsuarioModel> responseEntity = autenticacionController.autenticarUsuario(authRequest);

        // Verificar el resultado
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.UNAUTHORIZED);
        assertThat(responseEntity.getBody()).isNull();
    }

  
}
