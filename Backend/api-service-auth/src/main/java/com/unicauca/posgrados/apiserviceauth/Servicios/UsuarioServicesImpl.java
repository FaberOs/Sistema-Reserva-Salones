package com.unicauca.posgrados.apiserviceauth.Servicios;


import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import com.unicauca.posgrados.apiserviceauth.Modelos.UsuarioModel;
import com.unicauca.posgrados.apiserviceauth.Repositorios.UsuarioRepository;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UsuarioServicesImpl implements UsuarioServicesInt {

    private UsuarioRepository userRepository;

    @Override
    public UsuarioModel createUser(UsuarioModel user) {
        return userRepository.save(user);
    }

    @Override
    public UsuarioModel getUserById(Long userId) {
        Optional<UsuarioModel> optionalUser = userRepository.findById(userId);
        return optionalUser.get();
    }

    @Override
    public UsuarioModel getUserByUsername(String username) {
        Optional<UsuarioModel> optionalUser = userRepository.findByUsername(username);
        return optionalUser.get();
    }

    @Override
    public List<UsuarioModel> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public UsuarioModel updateUser(UsuarioModel user) {
        UsuarioModel existingUser = userRepository.findById(user.getId()).get();
        existingUser.setNombres(user.getNombres());
        existingUser.setApellidos(user.getApellidos());
        existingUser.setUsername(user.getUsername());
        UsuarioModel updatedUser = userRepository.save(existingUser);
        return updatedUser;
    }

    @Override
    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }

    @Override
    public UsuarioModel autenticar(String username, String contrasenia) {
        // Busca un usuario por nombre de usuario
        Optional<UsuarioModel> optionalUsuario = userRepository.findByUsername(username);
    
        // Verifica si el Optional contiene un usuario
        if (optionalUsuario.isPresent()) {
            UsuarioModel usuario = optionalUsuario.get();
    
            // Verifica si la contraseña coincide
            if (usuario.getContrasenia().equals(contrasenia)) {
                return usuario; // Devuelve el usuario autenticado
            }
        }
    
        return null; // Si no se encontró el usuario o la contraseña no coincide
    }
}