package com.unicauca.serviceincidencias.service;

import com.unicauca.serviceincidencias.entity.Incidencia;
import com.unicauca.serviceincidencias.repository.IncidenciaRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class IncidenciaServiceImpl implements IncidenciaService{

    private IncidenciaRepository incidenciaRepository;

    @Override
    public Incidencia createIncidencia(Incidencia incidencia) {
        return incidenciaRepository.save(incidencia);
    }

    @Override
    public Incidencia getIncidenciaById(Long idIncidencia) {
        Optional<Incidencia> optionalIncidencia = incidenciaRepository.findById(idIncidencia);
        return optionalIncidencia.get();
    }

    @Override
    public List<Incidencia> getAllIncidencias() {
        return incidenciaRepository.findAll();
    }

    @Override
    public Incidencia updateIncidencia(Incidencia incidencia) {
        Incidencia existingIncidencia = incidenciaRepository.findById(incidencia.getId()).get();
        existingIncidencia.setMensaje(incidencia.getMensaje());
        return incidenciaRepository.save(existingIncidencia);
    }

    @Override
    public void removeIncidencia(Long idIncidencia) {
        incidenciaRepository.deleteById(idIncidencia);
    }
}
