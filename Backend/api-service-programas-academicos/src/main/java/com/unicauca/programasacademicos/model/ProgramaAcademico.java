package com.unicauca.programasacademicos.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
@Table(name = "programa")
public class ProgramaAcademico {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_PROGRAMA")
    private Long idPrograma;

    @NotEmpty
    @Column(name = "SNIES")
    private Long snies;

    @NotEmpty
    @Column(name = "NOMBRE_PROGRAMA")
    private String nombrePrograma;

    @Column(name = "PROG_ACTIVO")
    private Boolean programaActivo;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "ID_FACULTAD", nullable = false)
    @JsonIgnore
    private Facultad facultadVinculado;
}
