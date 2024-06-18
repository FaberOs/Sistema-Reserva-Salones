package com.unicauca.servicesalones.service;

import com.unicauca.servicesalones.entity.Salon;

import java.util.List;

public interface SalonService {

    Salon createSalon(Salon salon);

    Salon getSalonById(Long idSalon);

    List<Salon> getAllSalones();

    Salon updateSalon(Salon salon);

    void deleteSalon(Long idSalon);
    List<Salon> getSalonesActivos();
    Salon cambiarEstadoSalon(Long idSalon, boolean nuevoEstado);

}
