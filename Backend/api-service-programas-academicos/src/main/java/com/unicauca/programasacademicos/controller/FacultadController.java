package com.unicauca.programasacademicos.controller;

import com.unicauca.programasacademicos.model.Facultad;
import com.unicauca.programasacademicos.service.FacultadService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * FacultadController
 * 
 * Este controlador gestiona las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para las facultades.
 * Las operaciones permiten la creación, consulta, actualización y eliminación de facultades.
 */
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/facultades")
@AllArgsConstructor
public class FacultadController {

    private FacultadService facultadService;

    /**
     * Crear Facultad
     * 
     * Método: POST
     * Ruta completa: http://localhost:8083/api/facultades
     *
     * Descripción: Crea una nueva facultad.
     *
     * Parámetros de entrada:
     * - Un objeto Facultad en el cuerpo de la solicitud que contiene los detalles de la facultad.
     *
     * Tipo de respuesta:
     * - Un objeto Facultad con un código de estado 201 (Created) si se crea la facultad con éxito.
     */
    @PostMapping
    public ResponseEntity<Facultad> createFacultad(@RequestBody Facultad facultad){
        Facultad savedFacultad = facultadService.createFacultad(facultad);
        return new ResponseEntity<>(savedFacultad, HttpStatus.CREATED);
    }

    /**
     * Obtener Facultad por ID
     * 
     * Método: GET
     * Ruta completa: http://localhost:8083/api/facultades/{id}
     *
     * Descripción: Obtiene una facultad por su ID.
     *
     * Parámetros de entrada:
     * - id (PathVariable) - El ID de la facultad que se desea obtener.
     *
     * Tipo de respuesta:
     * - Un objeto Facultad con un código de estado 200 (OK) si se encuentra.
     */
    @GetMapping("{id}")
    public ResponseEntity<Facultad> getFacultadById(@PathVariable("id") Long idFacultad){
        Facultad facultad = facultadService.getFacultadById(idFacultad).get();
        return new ResponseEntity<>(facultad, HttpStatus.OK);
    }
    /**
     * Obtener Todas las Facultades
     * 
     * Método: GET
     * Ruta completa: http://localhost:8083/api/facultades
     *
     * Descripción: Obtiene todas las facultades almacenadas en el sistema.
     *
     * Parámetros de entrada: No hay parámetros de entrada requeridos.
     *
     * Tipo de respuesta:
     * - Una lista de objetos Facultad con un código de estado 200 (OK) si se encuentran facultades.
     */
    @GetMapping
    public ResponseEntity<List<Facultad>> getAllFacultades(){
        List<Facultad> facultades = facultadService.getAllFacultades();
        return new ResponseEntity<>(facultades, HttpStatus.OK);
    }
    /**
     * Actualizar Facultad por ID
     * 
     * Método: PUT
     * Ruta completa: http://localhost:8083/api/facultades/{id}
     *
     * Descripción: Actualiza una facultad por su ID con los datos proporcionados en el cuerpo de la solicitud.
     *
     * Parámetros de entrada:
     * - id (PathVariable) - El ID de la facultad que se desea actualizar.
     * - facultad (RequestBody) - Los datos de la facultad actualizada.
     *
     * Tipo de respuesta:
     * - Un objeto Facultad con un código de estado 200 (OK) si se actualiza con éxito.
     */
    @PutMapping("{id}")
    public ResponseEntity<Facultad> updateFacultad(@PathVariable("id") Long idFacultad, @RequestBody Facultad facultad){
        facultad.setIdFacultad(idFacultad);
        Facultad updatedFacultad = facultadService.updateFacultad(facultad);
        return new ResponseEntity<>(updatedFacultad, HttpStatus.OK);
    }
    /**
     * Eliminar Facultad por ID
     * 
     * Método: DELETE
     * Ruta completa: http://localhost:8083/api/facultades/{id}
     *
     * Descripción: Elimina una facultad por su ID.
     *
     * Parámetros de entrada:
     * - id (PathVariable) - El ID de la facultad que se desea eliminar.
     *
     * Tipo de respuesta:
     * - Un mensaje indicando que la facultad se ha eliminado con un código de estado 200 (OK).
     */
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteFacultad(@PathVariable Long idFacultad){
        facultadService.removeFacultad(idFacultad);
        return new ResponseEntity<>("Facultad borrada satisfactoriamente!", HttpStatus.OK);
    }
}
