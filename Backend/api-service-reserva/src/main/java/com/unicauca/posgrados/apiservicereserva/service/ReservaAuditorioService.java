package com.unicauca.posgrados.apiservicereserva.service;

import org.springframework.stereotype.Service;
import com.unicauca.posgrados.apiservicereserva.repository.ReservaAuditorioRepository;
import com.unicauca.posgrados.apiservicereserva.modelo.ReservaAuditorio;

import java.util.List;
import java.util.Optional;

@Service
public class ReservaAuditorioService {

    private final ReservaAuditorioRepository reservaAuditorioRepository;

    public ReservaAuditorioService(ReservaAuditorioRepository reservaAuditorioRepository) {
        this.reservaAuditorioRepository = reservaAuditorioRepository;
    }

    public ReservaAuditorio crearReservaAuditorio(ReservaAuditorio reservaAuditorio) {
        return reservaAuditorioRepository.save(reservaAuditorio);
    }

    public List<ReservaAuditorio> obtenerTodasLasReservasAuditorio() {
        return reservaAuditorioRepository.findAll();
    }

    public ReservaAuditorio obtenerReservaAuditorioPorId(Long id) {
        Optional<ReservaAuditorio> optionalReservaAuditorio = reservaAuditorioRepository.findById(id);

        if (optionalReservaAuditorio.isPresent()) {
            return optionalReservaAuditorio.get();
        } else {
            throw null;
            // new ReservaAuditorioNotFoundException("No se encontró la reserva de auditorio con ID: " + id);
        }
    }

    public ReservaAuditorio actualizarReservaAuditorio(ReservaAuditorio reservaAuditorio) {
        return reservaAuditorioRepository.save(reservaAuditorio);
    }

    public void eliminarReservaAuditorio(Long id) {
        reservaAuditorioRepository.deleteById(id);
    }

    public ReservaAuditorio cambiarEstadoReservaAuditorio(Long idReserva, String nuevoEstado) {
        Optional<ReservaAuditorio> optionalReservaAuditorio = reservaAuditorioRepository.findById(idReserva);

        if (optionalReservaAuditorio.isPresent()) {
            ReservaAuditorio reservaAuditorio = optionalReservaAuditorio.get();
            reservaAuditorio.setEstadoReserva(nuevoEstado);
            return reservaAuditorioRepository.save(reservaAuditorio);
        } else {
            throw null;
            // new ReservaAuditorioNotFoundException("Reserva de auditorio no encontrada con ID: " + idReserva);
        }
    }
}
