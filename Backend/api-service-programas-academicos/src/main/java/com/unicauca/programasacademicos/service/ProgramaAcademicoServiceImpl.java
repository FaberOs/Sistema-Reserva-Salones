package com.unicauca.programasacademicos.service;

import com.unicauca.programasacademicos.model.ProgramaAcademico;
import com.unicauca.programasacademicos.repository.ProgramaAcademicoRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ProgramaAcademicoServiceImpl implements ProgramaAcademicoService{

    private ProgramaAcademicoRepository programaAcademicoRepository;

    @Override
    public ProgramaAcademico createProgramaAcademico(ProgramaAcademico programaAcademico) {
        return programaAcademicoRepository.save(programaAcademico);
    }

    @Override
    public ProgramaAcademico getProgramaAcademicoById(Long idProgramaAcademico) {
        Optional<ProgramaAcademico> optionalProgramaAcademico = programaAcademicoRepository.findById(idProgramaAcademico);
        return optionalProgramaAcademico.get();
    }

    @Override
    public Optional<ProgramaAcademico> getProgramaAcademicoOptionalById(Long idProgramaAcademico) {
        return programaAcademicoRepository.findById(idProgramaAcademico);
    }

    @Override
    public List<ProgramaAcademico> getAllProgramasAcademicos() {
        return programaAcademicoRepository.findAll();
    }

    @Override
    public ProgramaAcademico updateProgramaAcademico(ProgramaAcademico programaAcademico) {
        ProgramaAcademico existingProgramaAcademico = programaAcademicoRepository.findById(programaAcademico.getIdPrograma()).get();
        existingProgramaAcademico.setSnies(programaAcademico.getSnies());
        existingProgramaAcademico.setNombrePrograma(programaAcademico.getNombrePrograma());
        return programaAcademicoRepository.save(existingProgramaAcademico);
    }

    @Override
    public void removeProgramaAcademico(Long idProgramaAcademico) {

    }
}
