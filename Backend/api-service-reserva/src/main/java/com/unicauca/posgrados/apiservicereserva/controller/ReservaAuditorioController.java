package com.unicauca.posgrados.apiservicereserva.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.unicauca.posgrados.apiservicereserva.service.ReservaAuditorioService;
import com.unicauca.posgrados.apiservicereserva.modelo.ReservaAuditorio;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/reservas-auditorio")
@AllArgsConstructor
public class ReservaAuditorioController {

    private final ReservaAuditorioService reservaAuditorioService;

    /**
     * Crea una nueva reserva de auditorio.
     *
     * Tipo de petición: POST
     * Ruta completa: http://localhost:8081/api/reservas-auditorio
     * Parámetros de entrada: Un objeto JSON de ReservaAuditorio con los detalles de la reserva de auditorio.
     * Respuesta: El objeto JSON de la reserva de auditorio creada con un código de estado 201 (Created).
     */
    @PostMapping
    public ResponseEntity<ReservaAuditorio> crearReservaAuditorio(@RequestBody ReservaAuditorio reservaAuditorio) {
        ReservaAuditorio nuevaReservaAuditorio = reservaAuditorioService.crearReservaAuditorio(reservaAuditorio);
        return new ResponseEntity<>(nuevaReservaAuditorio, HttpStatus.CREATED);
    }

    /**
     * Obtiene una reserva de auditorio por su ID.
     *
     * Tipo de petición: GET
     * Ruta completa: http://localhost:8081/api/reservas-auditorio/{id}
     * Parámetros de entrada: ID de la reserva de auditorio.
     * Respuesta: El objeto JSON de la reserva de auditorio con un código de estado 200 (OK).
     */
    @GetMapping("/{id}")
    public ResponseEntity<ReservaAuditorio> obtenerReservaAuditorioPorId(@PathVariable Long id) {
        ReservaAuditorio reservaAuditorio = reservaAuditorioService.obtenerReservaAuditorioPorId(id);
        return new ResponseEntity<>(reservaAuditorio, HttpStatus.OK);
    }

    /**
     * Obtiene todas las reservas de auditorio.
     *
     * Tipo de petición: GET
     * Ruta completa: http://localhost:8081/api/reservas-auditorio
     * Parámetros de entrada: Ninguno.
     * Respuesta: Una lista de objetos JSON de reservas de auditorio con un código de estado 200 (OK).
     */
    @GetMapping
    public ResponseEntity<List<ReservaAuditorio>> obtenerTodasLasReservasAuditorio() {
        List<ReservaAuditorio> reservasAuditorio = reservaAuditorioService.obtenerTodasLasReservasAuditorio();
        return new ResponseEntity<>(reservasAuditorio, HttpStatus.OK);
    }

    /**
     * Actualiza una reserva de auditorio por su ID.
     *
     * Tipo de petición: PUT
     * Ruta completa: http://localhost:8081/api/reservas-auditorio/{id}
     * Parámetros de entrada: ID de la reserva de auditorio y un objeto JSON de ReservaAuditorio con los detalles actualizados.
     * Respuesta: El objeto JSON de la reserva de auditorio actualizada con un código de estado 200 (OK).
     */
    @PutMapping("/{id}")
    public ResponseEntity<ReservaAuditorio> actualizarReservaAuditorio(@PathVariable Long id, @RequestBody ReservaAuditorio reservaAuditorio) {
        ReservaAuditorio reservaAuditorioActualizada = reservaAuditorioService.actualizarReservaAuditorio(reservaAuditorio);
        return new ResponseEntity<>(reservaAuditorioActualizada, HttpStatus.OK);
    }

    /**
     * Elimina una reserva de auditorio por su ID.
     *
     * Tipo de petición: DELETE
     * Ruta completa: http://localhost:8081/api/reservas-auditorio/{id}
     * Parámetros de entrada: ID de la reserva de auditorio.
     * Respuesta: Un mensaje indicando que la reserva de auditorio se ha eliminado con un código de estado 200 (OK).
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarReservaAuditorio(@PathVariable Long id) {
        reservaAuditorioService.eliminarReservaAuditorio(id);
        return new ResponseEntity<>("La reserva de auditorio ha sido eliminada", HttpStatus.OK);
    }

    /**
     * Método HTTP: PUT
     * Ruta completa: http://localhost:8081/api/reservas-auditorio/cambiarEstado
     *
     * Descripción: Este método permite cambiar el estado de una reserva de auditorio existente.
     * Se debe proporcionar el ID de la reserva de auditorio que se desea modificar y el nuevo estado que se le asignará.
     *
     * Ejemplo de Uso:
     *
     * ```
     * curl -X PUT "http://localhost:8081/api/reservas-auditorio/cambiarEstado?idReserva=1&nuevoEstado=NuevoEstadoDeseado"
     * ```
     *
     * Parámetros:
     * - `idReserva` (Tipo: Long): El ID de la reserva de auditorio que se desea modificar.
     * - `nuevoEstado` (Tipo: String): El nuevo estado que se asignará a la reserva de auditorio.
     *
     * Tipo de Respuesta: ResponseEntity<ReservaAuditorio>
     * Código de Estado:
     * - 200 (OK) si la operación se realiza con éxito.
     *
     * Respuesta: El objeto de reserva de auditorio modificado con su nuevo estado.
     */
    @PutMapping("/cambiarEstado")
    public ResponseEntity<ReservaAuditorio> cambiarEstadoReservaAuditorio(
            @RequestParam Long idReserva,
            @RequestParam String nuevoEstado) {
        ReservaAuditorio reservaAuditorio = reservaAuditorioService.cambiarEstadoReservaAuditorio(idReserva, nuevoEstado);
        return new ResponseEntity<>(reservaAuditorio, HttpStatus.OK);
    }
}
