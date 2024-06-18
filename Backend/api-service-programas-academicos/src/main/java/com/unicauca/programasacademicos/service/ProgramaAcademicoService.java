package com.unicauca.programasacademicos.service;

import com.unicauca.programasacademicos.model.ProgramaAcademico;

import java.util.List;
import java.util.Optional;

public interface ProgramaAcademicoService {

    ProgramaAcademico createProgramaAcademico(ProgramaAcademico programaAcademico);

    ProgramaAcademico getProgramaAcademicoById(Long idProgramaAcademico);

    Optional<ProgramaAcademico> getProgramaAcademicoOptionalById(Long idProgramaAcademico);

    List<ProgramaAcademico> getAllProgramasAcademicos();

    ProgramaAcademico updateProgramaAcademico(ProgramaAcademico programaAcademico);

    void removeProgramaAcademico(Long idProgramaAcademico);
}
