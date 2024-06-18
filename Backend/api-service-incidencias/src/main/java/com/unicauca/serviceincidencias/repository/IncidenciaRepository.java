package com.unicauca.serviceincidencias.repository;

import com.unicauca.serviceincidencias.entity.Incidencia;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IncidenciaRepository extends JpaRepository<Incidencia, Long> {
}
