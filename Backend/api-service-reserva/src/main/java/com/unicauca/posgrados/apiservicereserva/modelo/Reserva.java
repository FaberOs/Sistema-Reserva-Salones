package com.unicauca.posgrados.apiservicereserva.modelo;

import jakarta.persistence.*;
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
@Table(name = "reserva")
public class Reserva {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idReserva;

    @Column(name = "id_salon")
    private Long idSalon;

    @Column(name = "nombre_profesor")
    private String nombreProfesor;

    @Column(name = "correo_institucional")
    private String correoInstitucional;

    @Column(name ="programa_profesor")
    private String programaProfesor;

    @Column(name = "hora_inicio")
    private String  horaInicio;


    @Column(name = "hora_final")
    private String  horaFinal;

    private String mensaje;

    @Column(name = "cantidad_dias")
    private int cantidadDias;

    @Temporal(TemporalType.DATE)
    @Column(name = "dia_inicio")
    private Date diaInicio;

    @Temporal(TemporalType.DATE)
    @Column(name = "dia_fin")
    private Date diaFin;

    @Column(name = "numero_estudiantes")
    private int numeroEstudiantes;

    @Column(name = "estado_reserva")
    private String estadoReserva;

   /*  public void setHoraInicio(String horaInicio) {
        // Define el formato deseado para la cadena de hora con AM/PM
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("hh:mm a");
        
        // Parsa la cadena de hora en LocalTime usando el formato especificado
        this.horaInicio = LocalTime.parse(horaInicio, formatter);
    }
    public void setHoraFinal(String horaInicio) {
        // Define el formato deseado para la cadena de hora con AM/PM
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("hh:mm a");
        
        // Parsa la cadena de hora en LocalTime usando el formato especificado
        this.horaFinal = LocalTime.parse(horaInicio, formatter);
    }*/


    public void setDiaInicio(String diaInicio) throws ParseException {
        this.diaInicio = new SimpleDateFormat("yyyy-MM-dd").parse(diaInicio);
    }

    public void setDiaFin(String diaFin) throws ParseException {
        this.diaFin = new SimpleDateFormat("yyyy-MM-dd").parse(diaFin);
    }
}