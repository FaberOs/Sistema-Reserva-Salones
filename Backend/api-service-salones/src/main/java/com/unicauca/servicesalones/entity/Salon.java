package com.unicauca.servicesalones.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "salon")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Salon {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idSalon;
   
    @Column(name = "capacidad")
  
    private Long capacidad;
   
    @Column(name = "numeracion_salon", unique = true)
    private Long numeracionSalon;
   
    @Column(name = "tipo")
    private String tipo;

    @Column(name = "estado")
    private boolean estado;
}
