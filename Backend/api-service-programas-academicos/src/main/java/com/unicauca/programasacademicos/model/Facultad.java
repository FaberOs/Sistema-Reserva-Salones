package com.unicauca.programasacademicos.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "facultad")
public class Facultad {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_FACULTAD")
    private Long  idFacultad;

    @NotEmpty
    @Column(name = "NOMBRE_FACULTAD")
    private String nombreFacultad;

    @Column(name = "FAC_ACTIVO")
    private Boolean facultadActivo;
}
