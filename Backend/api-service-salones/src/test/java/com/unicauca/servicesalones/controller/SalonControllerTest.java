package com.unicauca.servicesalones.controller;

import com.unicauca.servicesalones.entity.Salon;
import com.unicauca.servicesalones.service.SalonService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

/**
 * Clase de pruebas unitarias para SalonController.
 */
public class SalonControllerTest {

    @Mock
    private SalonService salonService;

    private SalonController salonController;

    @BeforeEach
    public void setUp() {
     //   MockitoAnnotations.initMocks(this);
        salonController = new SalonController(salonService);
    }

    /**
     * Prueba el método createSalon de SalonController.
     */
    @Test
    public void testCreateSalon() {
        Salon salonToCreate = new Salon();
        when(salonService.createSalon(salonToCreate)).thenReturn(salonToCreate);

        ResponseEntity<Salon> response = salonController.createSalon(salonToCreate);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(salonToCreate, response.getBody());
    }

    /**
     * Prueba el método getSalonById de SalonController.
     */
    @Test
    public void testGetSalonById() {
        Long idSalon = 1L;
        Salon salon = new Salon();
        when(salonService.getSalonById(idSalon)).thenReturn(salon);

        ResponseEntity<Salon> response = salonController.getSalonById(idSalon);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(salon, response.getBody());
    }

    /**
     * Prueba el método getAllSalones de SalonController.
     */
    @Test
    public void testGetAllSalones() {
        List<Salon> salones = Collections.singletonList(new Salon());
        when(salonService.getAllSalones()).thenReturn(salones);

        ResponseEntity<List<Salon>> response = salonController.getAllSalones();

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(salones, response.getBody());
    }

    /**
     * Prueba el método updateSalon de SalonController.
     */
    @Test
    public void testUpdateSalon() {
        Long idSalon = 1L;
        Salon updatedSalon = new Salon();
        when(salonService.updateSalon(updatedSalon)).thenReturn(updatedSalon);

        ResponseEntity<Salon> response = salonController.updateSalon(idSalon, updatedSalon);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(updatedSalon, response.getBody());
    }

    /**
     * Prueba el método deleteSalon de SalonController.
     */
    @Test
    public void testDeleteSalon() {
        Long idSalon = 1L;

        ResponseEntity<String> response = salonController.deleteSalon(idSalon);

        verify(salonService, times(1)).deleteSalon(idSalon);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Salón borrado satisfactoriamente!", response.getBody());
    }
}
