package com.unicauca.servicesalones.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Table(name = "auditorio")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Auditorio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idAuditorio;

    @Column(name = "capacidad")
    private Integer capacidad;

    @Column(name = "numeracion_salon")
    private Integer numeracionSalon;

    @Column(name = "nombre")
    private String nombre;

    
}
