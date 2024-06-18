package com.unicauca.programasacademicos.controller;

import com.unicauca.programasacademicos.exception.ResourceNotFoundException;
import com.unicauca.programasacademicos.model.ProgramaAcademico;
import com.unicauca.programasacademicos.service.FacultadServiceImpl;
import com.unicauca.programasacademicos.service.ProgramaAcademicoService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
@AllArgsConstructor
public class ProgramaAcademicoController {

    private ProgramaAcademicoService programaAcademicoService;

    private FacultadServiceImpl facultadService;

    // Crea un nuevo programa académico asociado a una facultad específica.
    // Ruta: POST /api/facultad/{idFacultad}/programa-academico
    // Parámetros: idFacultad (Path Variable), programaAcademicoRequest (Request
    // Body)
    // Retorno: ProgramaAcademico (201 CREATED o 404 NOT FOUND)
    @PostMapping("/facultad/{idFacultad}/programa-academico")
    public ResponseEntity<ProgramaAcademico> createProgramaAcademico(@PathVariable("idFacultad") Long idFacultad,
            @RequestBody ProgramaAcademico programaAcademicoRequest) {
        ProgramaAcademico programaAcademico = facultadService.getFacultadById(idFacultad).map(facultad -> {
            programaAcademicoRequest.setFacultadVinculado(facultad);
            return programaAcademicoService.createProgramaAcademico(programaAcademicoRequest);
        }).orElseThrow(() -> new ResourceNotFoundException("Facultad no encontrada"));
        return new ResponseEntity<>(programaAcademico, HttpStatus.CREATED);
    }
    // Obtiene un programa académico específico según su identificador.
    // Ruta: GET /api/programa-academico/{id}
    // Parámetros: id (Path Variable)
    // Retorno: ProgramaAcademico (200 OK o 404 NOT FOUND)
    @GetMapping("/programa-academico/{id}")
    public ResponseEntity<ProgramaAcademico> getProgramaAcademicoById(@PathVariable("id") Long id) {
        ProgramaAcademico programaAcademico = programaAcademicoService.getProgramaAcademicoOptionalById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Not found ProgramaAcademico with id = " + id));

        return new ResponseEntity<>(programaAcademico, HttpStatus.OK);
    }
    // Obtiene un programa académico específico según su identificador.
    // Ruta: GET /api/programa-academico/{id}
    // Parámetros: id (Path Variable)
    // Retorno: ProgramaAcademico (200 OK o 404 NOT FOUND)
    @GetMapping("/programa-academico")
    public ResponseEntity<List<ProgramaAcademico>> getAllProgramaAcademico() {
        List<ProgramaAcademico> programas = programaAcademicoService.getAllProgramasAcademicos();
        return new ResponseEntity<>(programas, HttpStatus.OK);
    }
    // Actualiza un programa académico existente según su identificador.
    // Ruta: PUT /api/programa-academico/{id}
    // Parámetros: id (Path Variable), programaAcademicoRequest (Request Body)
    // Retorno: ProgramaAcademico (200 OK o 404 NOT FOUND)
    @PutMapping("/programa-academico/{id}")
    public ResponseEntity<ProgramaAcademico> updateProgramaAcademico(@PathVariable("id") Long idPrograma,
            @RequestBody ProgramaAcademico programaAcademicoRequest) {
        ProgramaAcademico programaAcademico = programaAcademicoService.getProgramaAcademicoOptionalById(idPrograma)
                .orElseThrow(() -> new ResourceNotFoundException("ProgramaAcademicoId " + idPrograma + " not found"));

        programaAcademico.setSnies(programaAcademicoRequest.getSnies());
        programaAcademico.setNombrePrograma(programaAcademicoRequest.getNombrePrograma());

        return new ResponseEntity<>(programaAcademicoService.createProgramaAcademico(programaAcademico), HttpStatus.OK);
    }
    // Elimina un programa académico existente según su identificador.
    // Ruta: DELETE /api/programa-academico/{id}
    // Parámetros: id (Path Variable)
    // Retorno: HttpStatus (204 NO CONTENT o 404 NOT FOUND)
    @DeleteMapping("/programa-academico/{id}")
    public ResponseEntity<HttpStatus> deleteProgramaAcademico(@PathVariable("id") long id) {
        programaAcademicoService.removeProgramaAcademico(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
