package com.unicauca.serviceincidencias.service;

import com.unicauca.serviceincidencias.entity.Incidencia;

import java.util.List;

public interface IncidenciaService {
    Incidencia createIncidencia(Incidencia incidencia);

    Incidencia getIncidenciaById(Long idIncidencia);

    List<Incidencia> getAllIncidencias();

    Incidencia updateIncidencia(Incidencia incidencia);

    void removeIncidencia(Long idIncidencia);
}
