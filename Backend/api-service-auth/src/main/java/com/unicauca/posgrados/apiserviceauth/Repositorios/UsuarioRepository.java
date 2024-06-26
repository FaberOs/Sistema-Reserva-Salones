package com.unicauca.posgrados.apiserviceauth.Repositorios;

import com.unicauca.posgrados.apiserviceauth.Modelos.UsuarioModel;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;


public interface UsuarioRepository extends JpaRepository<UsuarioModel, Long> {

    Optional<UsuarioModel> findByUsername(String username);
}