package com.unicauca.servicesalones.controller;

import com.unicauca.servicesalones.entity.Auditorio;
import com.unicauca.servicesalones.service.AuditorioService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/auditorios")
@AllArgsConstructor
public class AuditorioController {

    private final AuditorioService auditorioService;

    /**
     * Crear Auditorio
     *
     * Método: POST
     * Ruta completa: http://localhost:8082/api/auditorios
     *
     * Descripción: Crea un nuevo auditorio.
     *
     * Parámetros de entrada:
     * - Un objeto Auditorio en el cuerpo de la solicitud que contiene los detalles del auditorio.
     *
     * Tipo de respuesta:
     * - Un objeto Auditorio con un código de estado 201 (Created) si se crea el auditorio con éxito.
     */
    @PostMapping
    public ResponseEntity<Auditorio> createAuditorio(@RequestBody Auditorio auditorio){
        Auditorio savedAuditorio = auditorioService.createAuditorio(auditorio);
        return new ResponseEntity<>(savedAuditorio, HttpStatus.CREATED);
    }

    /**
     * Obtener Auditorio por ID
     *
     * Método: GET
     * Ruta completa: http://localhost:8082/api/auditorios/{id}
     *
     * Descripción: Obtiene un auditorio por su ID.
     *
     * Parámetros de entrada:
     * - id (PathVariable) - El ID del auditorio que se desea obtener.
     *
     * Tipo de respuesta:
     * - Un objeto Auditorio con un código de estado 200 (OK) si se encuentra.
     */
    @GetMapping("{id}")
    public ResponseEntity<Auditorio> getAuditorioById(@PathVariable("id") Long idAuditorio){
        Auditorio auditorio = auditorioService.getAuditorioById(idAuditorio);
        return new ResponseEntity<>(auditorio, HttpStatus.OK);
    }

    /**
     * Obtener Todos los Auditorios
     *
     * Método: GET
     * Ruta completa: http://localhost:8082/api/auditorios
     *
     * Descripción: Obtiene todos los auditorios almacenados en el sistema.
     *
     * Parámetros de entrada: No hay parámetros de entrada requeridos.
     *
     * Tipo de respuesta:
     * - Una lista de objetos Auditorio con un código de estado 200 (OK) si se encuentran auditorios.
     */
    @GetMapping
    public ResponseEntity<List<Auditorio>> getAllAuditorios(){
        List<Auditorio> auditorios = auditorioService.getAllAuditorios();
        return new ResponseEntity<>(auditorios, HttpStatus.OK);
    }

    /**
     * Actualizar Auditorio por ID
     *
     * Método: PUT
     * Ruta completa: http://localhost:8082/api/auditorios/{id}
     *
     * Descripción: Actualiza un auditorio por su ID con los datos proporcionados en el cuerpo de la solicitud.
     *
     * Parámetros de entrada:
     * - id (PathVariable) - El ID del auditorio que se desea actualizar.
     * - auditorio (RequestBody) - Los datos del auditorio actualizado.
     *
     * Tipo de respuesta:
     * - Un objeto Auditorio con un código de estado 200 (OK) si se actualiza con éxito.
     */
    @PutMapping("{id}")
    public ResponseEntity<Auditorio> updateAuditorio(@PathVariable("id") Long idAuditorio, @RequestBody Auditorio auditorio){
        auditorio.setIdAuditorio(idAuditorio);
        Auditorio updatedAuditorio = auditorioService.updateAuditorio(auditorio);
        return new ResponseEntity<>(updatedAuditorio, HttpStatus.OK);
    }

    /**
     * Eliminar Auditorio por ID
     *
     * Método: DELETE
     * Ruta completa: http://localhost:8082/api/auditorios/{id}
     *
     * Descripción: Elimina un auditorio por su ID.
     *
     * Parámetros de entrada:
     * - id (PathVariable) - El ID del auditorio que se desea eliminar.
     *
     * Tipo de respuesta:
     * - Un mensaje indicando que el auditorio se ha eliminado con un código de estado 200 (OK).
     */
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteAuditorio(@PathVariable Long idAuditorio){
        auditorioService.deleteAuditorio(idAuditorio);
        return new ResponseEntity<>("Auditorio borrado satisfactoriamente!", HttpStatus.OK);
    }
}
