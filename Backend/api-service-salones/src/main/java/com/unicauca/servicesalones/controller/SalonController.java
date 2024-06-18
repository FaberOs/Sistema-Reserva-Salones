package com.unicauca.servicesalones.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.unicauca.servicesalones.entity.Salon;
import com.unicauca.servicesalones.service.SalonService;

import lombok.AllArgsConstructor;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/salones")
@AllArgsConstructor
public class SalonController {

    private SalonService salonService;

    /**
     * Crear Salón
     *
     * Método: POST
     * Ruta completa: http://localhost:8082/api/salones
     *
     * Descripción: Crea un nuevo salón.
     *
     * Parámetros de entrada:
     * - Un objeto Salon en el cuerpo de la solicitud que contiene los detalles del salón.
     *
     * Tipo de respuesta:
     * - Un objeto Salon con un código de estado 201 (Created) si se crea el salón con éxito.
     */
    @PostMapping
    public ResponseEntity<Salon> createSalon(@RequestBody Salon salon){
        Salon savedSalon = salonService.createSalon(salon);
        return new ResponseEntity<>(savedSalon, HttpStatus.CREATED);
    }
    /**
     * Obtener Salón por ID
     *
     * Método: GET
     * Ruta completa: http://localhost:8082/api/salones/{id}
     *
     * Descripción: Obtiene un salón por su ID.
     *
     * Parámetros de entrada:
     * - id (PathVariable) - El ID del salón que se desea obtener.
     *
     * Tipo de respuesta:
     * - Un objeto Salon con un código de estado 200 (OK) si se encuentra.
     */
    @GetMapping("{id}")
    public ResponseEntity<Salon> getSalonById(@PathVariable("id") Long idSalon){
        Salon salon = salonService.getSalonById(idSalon);
        return new ResponseEntity<>(salon, HttpStatus.OK);
    }
    /**
     * Obtener Todos los Salones
     *
     * Método: GET
     * Ruta completa: http://localhost:8082/api/salones
     *
     * Descripción: Obtiene todos los salones almacenados en el sistema.
     *
     * Parámetros de entrada: No hay parámetros de entrada requeridos.
     *
     * Tipo de respuesta:
     * - Una lista de objetos Salon con un código de estado 200 (OK) si se encuentran salones.
     */
    @GetMapping
    public ResponseEntity<List<Salon>> getAllSalones(){
        List<Salon> salones = salonService.getAllSalones();
        return new ResponseEntity<>(salones, HttpStatus.OK);
    }
    /**
     * Actualizar Salón por ID
     *
     * Método: PUT
     * Ruta completa: http://localhost:8082/api/salones/{id}
     *
     * Descripción: Actualiza un salón por su ID con los datos proporcionados en el cuerpo de la solicitud.
     *
     * Parámetros de entrada:
     * - id (PathVariable) - El ID del salón que se desea actualizar.
     * - salon (RequestBody) - Los datos del salón actualizado.
     *
     * Tipo de respuesta:
     * - Un objeto Salon con un código de estado 200 (OK) si se actualiza con éxito.
     */
    @PutMapping("{id}")
    public ResponseEntity<Salon> updateSalon(@PathVariable("id") Long idSalon, @RequestBody Salon salon){
        salon.setIdSalon(idSalon);
        Salon updatedSalon = salonService.updateSalon(salon);
        return new ResponseEntity<>(updatedSalon, HttpStatus.OK);
    }
    /**
     * Eliminar Salón por ID
     *
     * Método: DELETE
     * Ruta completa: http://localhost:8082/api/salones/{id}
     *
     * Descripción: Elimina un salón por su ID.
     *
     * Parámetros de entrada:
     * - id (PathVariable) - El ID del salón que se desea eliminar.
     *
     * Tipo de respuesta:
     * - Un mensaje indicando que el salón se ha eliminado con un código de estado 200 (OK).
     */
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteSalon(@PathVariable Long idSalon){
        salonService.deleteSalon(idSalon);
        return new ResponseEntity<>("Salón borrado satisfactoriamente!", HttpStatus.OK);
    }

    /**
 * Obtener Salones Activos
 *
 * Método: GET
 * Ruta completa: http://localhost:8082/api/salones/activos
 *
 * Descripción: Obtiene todos los salones con estado activo.
 *
 * Parámetros de entrada: No hay parámetros de entrada requeridos.
 *
 * Tipo de respuesta:
 * - Una lista de objetos Salon con un código de estado 200 (OK) si se encuentran salones activos.
 */
@GetMapping("/activos")
public ResponseEntity<List<Salon>> getSalonesActivos() {
    List<Salon> salonesActivos = salonService.getSalonesActivos();
    return new ResponseEntity<>(salonesActivos, HttpStatus.OK);
}

/**
 * Cambiar Estado de Salón por ID
 *
 * Método: PATCH
 * Ruta completa: http://localhost:8082/api/salones/{id}/cambiarEstado
 *
 * Descripción: Cambia el estado de un salón por su ID con el nuevo estado proporcionado en el cuerpo de la solicitud.
 *
 * Parámetros de entrada:
 * - id (PathVariable) - El ID del salón que se desea actualizar.
 * - nuevoEstado (RequestBody) - El nuevo estado del salón (booleano).
 *
 * Tipo de respuesta:
 * - Un objeto Salon con un código de estado 200 (OK) si se actualiza con éxito.
 */
@PatchMapping("{id}/cambiarEstado")
public ResponseEntity<Salon> cambiarEstadoSalon(@PathVariable("id") Long idSalon, @RequestBody boolean nuevoEstado) {
    Salon salon = salonService.cambiarEstadoSalon(idSalon, nuevoEstado);

    if (salon != null) {
        return new ResponseEntity<>(salon, HttpStatus.OK);
    } else {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}

}
