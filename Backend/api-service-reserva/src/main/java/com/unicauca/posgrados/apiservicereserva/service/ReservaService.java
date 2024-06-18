package com.unicauca.posgrados.apiservicereserva.service;


import com.unicauca.posgrados.apiservicereserva.exception.ReservaNotFoundException;
import org.springframework.stereotype.Service;
import com.unicauca.posgrados.apiservicereserva.repository.ReservaRepository;
import com.unicauca.posgrados.apiservicereserva.modelo.Reserva;
import java.util.*;
import java.util.Optional;

@Service
public class ReservaService {

    private final ReservaRepository reservaRepository;
    
    public ReservaService(ReservaRepository reservaRepository) {
        this.reservaRepository = reservaRepository;
    }

    public Reserva crearReserva(Reserva reserva) {
        return reservaRepository.save(reserva);
    }

    public List<Reserva> obtenerTodasLasReservas() {
        return reservaRepository.findAll();
    }

    public Reserva obtenerReservaPorId(Long id) {
        Optional<Reserva> optionalReserva = reservaRepository.findById(id);
        
        if (optionalReserva.isPresent()) {
            return optionalReserva.get();
        } else {
            // Manejar el caso en el que no se encontró la reserva, por ejemplo, lanzar una excepción
            throw new ReservaNotFoundException("No se encontró la reserva con ID: " + id);
        }
    }

    public List<Reserva> obtenerReservasPorEstado(String estado) {
        return reservaRepository.findByEstadoReserva(estado);
    }

    public Reserva actualizarReserva(Reserva reserva) {
        return reservaRepository.save(reserva);
    }

    public void eliminarReserva(Long id) {
        reservaRepository.deleteById(id);
    }
    
    public Reserva cambiarEstadoReserva(Long idReserva, String nuevoEstado) {
        Optional<Reserva> optionalReserva = reservaRepository.findById(idReserva);

        if (optionalReserva.isPresent()) {
            Reserva reserva = optionalReserva.get();
            reserva.setEstadoReserva(nuevoEstado);
            return reservaRepository.save(reserva);
        } else {
            throw new ReservaNotFoundException("Reserva no encontrada con ID: " + idReserva);
        }
    }

}
