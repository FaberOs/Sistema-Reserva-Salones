package com.unicauca.servicesalones.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.unicauca.servicesalones.entity.Salon;
import com.unicauca.servicesalones.repository.SalonRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class SalonServiceImpl implements SalonService {

    private SalonRepository salonRepository;

    @Override
    public Salon createSalon(Salon salon) {
        return salonRepository.save(salon);
    }

    @Override
    public Salon getSalonById(Long idSalon) {
        Optional<Salon> optionalSalon = salonRepository.findById(idSalon);
        return optionalSalon.get();
    }

    @Override
    public List<Salon> getAllSalones() {
        return salonRepository.findAll();
    }

    @Override
    public Salon updateSalon(Salon salon) {
        Salon existingSalon = salonRepository.findById(salon.getIdSalon()).get();
        existingSalon.setCapacidad(salon.getCapacidad());
        existingSalon.setNumeracionSalon(salon.getNumeracionSalon());
        return salonRepository.save(existingSalon);
    }

    @Override
    public void deleteSalon(Long idSalon) {
        salonRepository.deleteById(idSalon);
    }

    @Override
    public List<Salon> getSalonesActivos() {
        List<Salon> allSalones = salonRepository.findAll();
        return allSalones.stream()
                .filter(Salon::isEstado) // Filtra los salones con estado activo
                .collect(Collectors.toList());
    }

    @Override
    public Salon cambiarEstadoSalon(Long idSalon, boolean nuevoEstado) {
        Salon existingSalon = salonRepository.findById(idSalon).orElse(null);

        if (existingSalon != null) {
            existingSalon.setEstado(nuevoEstado);
            return salonRepository.save(existingSalon);
        }

        return null; // Puedes manejar esto según tus necesidades (lanzar una excepción, devolver un
                     // valor predeterminado, etc.)
    }

}
