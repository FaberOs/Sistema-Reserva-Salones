package com.unicauca.programasacademicos.service;

import com.unicauca.programasacademicos.model.Facultad;
import com.unicauca.programasacademicos.repository.FacultadRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class FacultadServiceImpl implements FacultadService{

    private FacultadRepository facultadRepository;

    @Override
    public Facultad createFacultad(Facultad facultad) {
        return facultadRepository.save(facultad);
    }

    @Override
    public Optional<Facultad> getFacultadById(Long idFacultad) {
        Optional<Facultad> optionalFacultad = facultadRepository.findById(idFacultad);
        return optionalFacultad;
    }

    @Override
    public List<Facultad> getAllFacultades() {
        return facultadRepository.findAll();
    }

    @Override
    public Facultad updateFacultad(Facultad facultad) {
        Facultad existingFacultad = facultadRepository.findById(facultad.getIdFacultad()).get();
        existingFacultad.setNombreFacultad(facultad.getNombreFacultad());
        return facultadRepository.save(existingFacultad);
    }

    @Override
    public void removeFacultad(Long idFacultad) {

    }
}
