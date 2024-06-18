package com.unicauca.programasacademicos.service;

import com.unicauca.programasacademicos.model.Facultad;

import java.util.List;
import java.util.Optional;

public interface FacultadService {

    Facultad createFacultad(Facultad facultad);

    Optional<Facultad> getFacultadById(Long idFacultad);

    List<Facultad> getAllFacultades();

    Facultad updateFacultad(Facultad facultad);

    void removeFacultad(Long idFacultad);
}
