package com.unicauca.servicesalones.service;

import com.unicauca.servicesalones.entity.Auditorio;
import com.unicauca.servicesalones.repository.AuditorioRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class AuditorioService {

    private final AuditorioRepository auditorioRepository;

   
    public Auditorio createAuditorio(Auditorio auditorio) {
        return auditorioRepository.save(auditorio);
    }

   public Auditorio getAuditorioById(Long idAuditorio) {
        Optional<Auditorio> optionalAuditorio = auditorioRepository.findById(idAuditorio);
        return optionalAuditorio.orElse(null);
    }

   
    public List<Auditorio> getAllAuditorios() {
        return auditorioRepository.findAll();
    }

    
    public Auditorio updateAuditorio(Auditorio auditorio) {
        Optional<Auditorio> optionalExistingAuditorio = auditorioRepository.findById(auditorio.getIdAuditorio());
        if (optionalExistingAuditorio.isPresent()) {
            Auditorio existingAuditorio = optionalExistingAuditorio.get();
            existingAuditorio.setCapacidad(auditorio.getCapacidad());
            existingAuditorio.setNombre(auditorio.getNombre());
            // Puedes agregar más actualizaciones según los atributos de Auditorio
            return auditorioRepository.save(existingAuditorio);
        } else {
            // Manejar el caso en el que no se encuentra el auditorio
            return null;
        }
    }

    
    public void deleteAuditorio(Long idAuditorio) {
        auditorioRepository.deleteById(idAuditorio);
    }
}
