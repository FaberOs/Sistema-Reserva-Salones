package com.unicauca.serviceincidencias.controller;

import com.unicauca.serviceincidencias.entity.Incidencia;
import com.unicauca.serviceincidencias.service.IncidenciaService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@AllArgsConstructor
@RequestMapping("/api/incidencias")
public class IncidenciaController {

    private IncidenciaService incidenciaService;

    @PostMapping
    public ResponseEntity<Incidencia> createIncidencia(@RequestBody Incidencia incidencia) {
        Incidencia savedIncidencia = incidenciaService.createIncidencia(incidencia);
        return new ResponseEntity<>(savedIncidencia, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<Incidencia> getIncidenciaById(@PathVariable("id") Long idIncidencia) {
        Incidencia incidencia = incidenciaService.getIncidenciaById(idIncidencia);
        return new ResponseEntity<>(incidencia, HttpStatus.OK);
    }

    @GetMapping()
    public ResponseEntity<List<Incidencia>> getAllIncidencias() {
        List<Incidencia> lstIncidencias = incidenciaService.getAllIncidencias();
        return new ResponseEntity<>(lstIncidencias, HttpStatus.OK);
    }

    @PutMapping("{id}")
    public ResponseEntity<Incidencia> updateIncidencia(@PathVariable("id") Long idIncidencia, @RequestBody Incidencia incidencia) {
        incidencia.setId(idIncidencia);
        Incidencia updatedIncidencia = incidenciaService.updateIncidencia(incidencia);
        return new ResponseEntity<>(updatedIncidencia, HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteIncidencia(@PathVariable Long idIncidencia) {
        incidenciaService.removeIncidencia(idIncidencia);
        return new ResponseEntity<>("Incidencia borrada satisfactoriamente!", HttpStatus.OK);
    }
}
