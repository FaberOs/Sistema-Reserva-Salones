package com.unicauca.posgrados.apiservicereserva.controller;

import com.unicauca.posgrados.apiservicereserva.service.ReservaStatsService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.unicauca.posgrados.apiservicereserva.service.ReservaService;
import com.unicauca.posgrados.apiservicereserva.modelo.Reserva;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/reservas")
@AllArgsConstructor
public class ReservaController {

    private ReservaService reservaService;

    private ReservaStatsService reservaStatsService;

    /**
     * Obtiene la cantidad de reservas por programa.
     *
     * Método HTTP: GET
     * Ruta completa: http://localhost:8081/api/reservas/stats/cantidadReservasPorPrograma
     * Parámetros de entrada: Ninguno.
     * Tipo de respuesta: Lista de mapas (List<Map<String, Object>>).
     */
    @GetMapping("/stats/cantidadReservasPorPrograma")
    public List<Map<String, Object>> obtenerCantidadReservasPorPrograma() {
        return reservaStatsService.obtenerCantidadReservasPorPrograma();
    }

    /**
     * Obtiene el número de solicitudes por salón.
     *
     * Método HTTP: GET
     * Ruta completa: http://localhost:8081/api/reservas/stats/numeroSolicitudesPorSalon
     * Parámetros de entrada: Ninguno.
     * Tipo de respuesta: ResponseEntity con lista de mapas (List<Map<String, Object>>).
     */
    @GetMapping("/stats/numeroSolicitudesPorSalon")
    public ResponseEntity<List<Map<String, Object>>> obtenerNumeroSolicitudesPorSalon() {
        List<Map<String, Object>> resultados = reservaStatsService.obtenerNumeroSolicitudesPorSalon();
        return ResponseEntity.ok(resultados);
    }





     /**
     * Obtiene el número de solicitudes por ESTADO.
     *
     * Método HTTP: GET
     * Ruta completa: http://localhost:8081/api/reservas/stats/cantidadReservasPorEstado
     * Parámetros de entrada: Ninguno.
     * Tipo de respuesta: ResponseEntity con lista de mapas (List<Map<String, Object>>).
     */
    @GetMapping("/stats/cantidadReservasPorEstado")
    public ResponseEntity<List<Map<String, Object>>> obtenerCantidadReservasPorEstado() {
        List<Map<String, Object>> resultados = reservaStatsService.obtenerCantidadReservasPorEstado();
        return ResponseEntity.ok(resultados);
    }
    
    /**
     * Crea una nueva reserva.
     *
     * Tipo de petición: POST
     * Ruta completa: http://localhost:8081/api/reservas
     * Parámetros de entrada: Un objeto JSON de Reserva con los detalles de la reserva.
     * Respuesta: El objeto JSON de la reserva creada con un código de estado 201 (Created).
     */
    @PostMapping
    public ResponseEntity<Reserva> crearReserva(@RequestBody Reserva reserva) {
        Reserva nuevaReserva = reservaService.crearReserva(reserva);
        return new ResponseEntity<>(nuevaReserva, HttpStatus.CREATED);
    }

    /**
     * Obtiene una reserva por su ID.
     *
     * Tipo de petición: GET
     * Ruta completa: http://localhost:8081/api/reservas/{id}
     * Parámetros de entrada: ID de la reserva.
     * Respuesta: El objeto JSON de la reserva con un código de estado 200 (OK).
     */
    @GetMapping("/{id}")
    public ResponseEntity<Reserva> obtenerReservaPorId(@PathVariable Long id) {
        Reserva reserva = reservaService.obtenerReservaPorId(id);
        
        return new ResponseEntity<>(reserva, HttpStatus.OK);
    }

    /**
     * Obtiene todas las reservas.
     *
     * Tipo de petición: GET
     * Ruta completa: http://localhost:8081/api/reservas
     * Parámetros de entrada: Ninguno.
     * Respuesta: Una lista de objetos JSON de reservas con un código de estado 200 (OK).
     */
    @GetMapping
    public ResponseEntity<List<Reserva>> obtenerTodasLasReservas() {
        List<Reserva> reservas = reservaService.obtenerTodasLasReservas();
        return new ResponseEntity<>(reservas, HttpStatus.OK);
    }

    /**
     * Actualiza una reserva por su ID.
     *
     * Tipo de petición: PUT
     * Ruta completa: http://localhost:8081/api/reservas/{id}
     * Parámetros de entrada: ID de la reserva y un objeto JSON de Reserva con los detalles actualizados.
     * Respuesta: El objeto JSON de la reserva actualizada con un código de estado 200 (OK).
     */
    @PutMapping("/{id}")
    public ResponseEntity<Reserva> actualizarReserva(@PathVariable Long id, @RequestBody Reserva reserva) {
        Reserva reservaActualizada = reservaService.actualizarReserva(reserva);
        return new ResponseEntity<>(reservaActualizada, HttpStatus.OK);
    }

    /**
     * Elimina una reserva por su ID.
     *
     * Tipo de petición: DELETE
     * Ruta completa: http://localhost:8081/api/reservas/{id}
     * Parámetros de entrada: ID de la reserva.
     * Respuesta: Un mensaje indicando que la reserva se ha eliminado con un código de estado 200 (OK).
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarReserva(@PathVariable Long id) {
        reservaService.eliminarReserva(id);
        return new ResponseEntity<>("La reserva ha sido eliminada", HttpStatus.OK);
    }

/**
 * Método HTTP: PUT
 * Ruta completa: http://localhost:8081/api/reservas/cambiarEstado
 * 
 * Descripción: Este método permite cambiar el estado de una reserva existente. Se debe proporcionar el ID de la reserva que se desea modificar y el nuevo estado que se le asignará.
 * 
 * Ejemplo de Uso:
 * 
 * ```
 * curl -X PUT "http://localhost:8081/api/reservas/cambiarEstado?idReserva=1&nuevoEstado=NuevoEstadoDeseado"
 * ```
 * 
 * Parámetros:
 * - `idReserva` (Tipo: Long): El ID de la reserva que se desea modificar.
 * - `nuevoEstado` (Tipo: String): El nuevo estado que se asignará a la reserva.
 * 
 * Tipo de Respuesta: ResponseEntity<Reserva>
 * Código de Estado:
 * - 200 (OK) si la operación se realiza con éxito.
 * 
 * Respuesta: El objeto de reserva modificado con su nuevo estado.
 */
@PutMapping("/cambiarEstado")
public ResponseEntity<Reserva> cambiarEstadoReserva(
        @RequestParam Long idReserva,
        @RequestParam String nuevoEstado) {
    Reserva reserva = reservaService.cambiarEstadoReserva(idReserva, nuevoEstado);
    return new ResponseEntity<>(reserva, HttpStatus.OK);
}


 /**
     * Obtener Reservas por Estado
     *
     * Método: GET
     * Ruta completa: http://localhost:8081/api/reservas/estado/{estado}
     *
     * Descripción: Obtiene todas las reservas que tienen el estado especificado.
     *
     * Parámetros de entrada:
     * - estado (PathVariable) - El estado de las reservas que se desea obtener.
     *
     * Tipo de respuesta:
     * - Una lista de objetos Reserva con un código de estado 200 (OK) si se encuentran reservas.
     */
    @GetMapping("/estado/{estado}")
    public ResponseEntity<List<Reserva>> obtenerReservasPorEstado(@PathVariable String estado) {
        List<Reserva> reservas = reservaService.obtenerReservasPorEstado(estado);
        return new ResponseEntity<>(reservas, HttpStatus.OK);
    }

}
