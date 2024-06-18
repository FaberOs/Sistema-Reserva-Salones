package com.unicauca.posgrados.apiservicereserva.service;

import com.unicauca.posgrados.apiservicereserva.modelo.Reserva;
import com.unicauca.posgrados.apiservicereserva.repository.ReservaRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class ReservaStatsService {

    @Autowired
    private ReservaRepository reservaRepository;
    public List<Map<String, Object>> obtenerCantidadReservasPorPrograma() {
        return reservaRepository.obtenerCantidadReservasPorPrograma();
    }

    public List<Map<String, Object>> obtenerNumeroSolicitudesPorSalon() {
        return reservaRepository.obtenerNumeroSolicitudesPorSalon();
    }

    public List<Map<String, Object>> obtenerCantidadReservasPorEstado() {
        return reservaRepository.obtenerCantidadReservasPorEstado();
    }
    
}
