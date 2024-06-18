package com.unicauca.posgrados.apiservicereserva.repository;

import com.unicauca.posgrados.apiservicereserva.modelo.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.*;

public interface ReservaRepository extends JpaRepository<Reserva, Long> {

        @Query(value = "SELECT id_salon AS \"Salon\", count(*) AS \"NumeroSolicitudes\" " +
                        "FROM reserva " +
                        "GROUP BY id_salon", nativeQuery = true)
        List<Map<String, Object>> obtenerNumeroSolicitudesPorSalon();

        @Query(value = "SELECT programa_profesor AS Programa, count(*) AS CantidadReservas " +
                        "FROM reserva " +
                        "GROUP BY programa_profesor", nativeQuery = true)
        List<Map<String, Object>> obtenerCantidadReservasPorPrograma();

        /*
         * @Query(value =
         * "SELECT estado_reserva AS Estado, count(*) AS CantidadReservas " +
         * "FROM Reserva " +
         * "WHERE estado_reserva IN ('APROBADA', 'RECHAZADA') " +
         * "GROUP BY estado_reserva", nativeQuery = true)
         * List<Map<String, Object>> obtenerCantidadReservasPorEstado();
         */

        @Query(value = "SELECT estado_reserva AS Estado, count(*) AS CantidadReservas " +
                        "FROM reserva " +
                        "GROUP BY estado_reserva", nativeQuery = true)
        List<Map<String, Object>> obtenerCantidadReservasPorEstado();

        List<Reserva> findByEstadoReserva(String estado);
}
