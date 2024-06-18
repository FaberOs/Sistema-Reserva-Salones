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
@Table(name = "reservas_auditorio")
public class ReservaAuditorio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_reserva")
    private Long idReserva;

    @Column(name = "id_auditorio")
    private Long idAuditorio;

    @Column(name = "evento")
    private String evento;

    @Temporal(TemporalType.DATE)
    @Column(name = "fecha_reserva")
    private Date fechaReserva;


     @Column(name = "nombre_profesor")
    private String nombreProfesor;

    @Column(name = "correo_institucional")
    private String correoInstitucional;

    @Column(name ="programa_profesor")
    private String programaProfesor;

    @Column(name = "hora_inicio")
    private String  horaInicio;

    @Column(name = "numero_estudiantes")
    private int numeroEstudiantes;

    @Column(name = "hora_final")
    private String  horaFinal;

    @Column(name = "cantidad_dias")
    private int cantidadDias;

    @Temporal(TemporalType.DATE)
    @Column(name = "dia_inicio")
    private Date diaInicio;

    @Temporal(TemporalType.DATE)
    @Column(name = "dia_fin")
    private Date diaFin;

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
