package com.unicauca.servicesalones.repository;

import com.unicauca.servicesalones.entity.Salon;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SalonRepository extends JpaRepository<Salon, Long> {
}
