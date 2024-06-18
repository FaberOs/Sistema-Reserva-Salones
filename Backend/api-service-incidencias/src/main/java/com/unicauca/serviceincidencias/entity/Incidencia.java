package com.unicauca.serviceincidencias.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "incidencias")
public class Incidencia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="id_reserva")
    private Integer idReserva;

    
    @Temporal(TemporalType.DATE)
    private Date fechaReporte;

    @NotEmpty
    @Column(name ="mensaje")
    private String mensaje;

    @NotEmpty
    @Column(name ="asunto")
    private String asunto;

    @NotEmpty
    @Column(name ="remitente")
    private String remitente;
 
   public void setfechaReporte(String fechaReporte) throws ParseException {
        this.fechaReporte = new SimpleDateFormat("yyyy-MM-dd").parse(fechaReporte);
    }

}
