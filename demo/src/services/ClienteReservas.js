import axios from "axios";

const ReservasApiUrl = "http://localhost:8081/api/reservas";

class ReservasApiClient {
  /**
   * Realiza una solicitud para reservar un espacio.
   *
   * @param {Object} data - Datos de la reserva.
   * @returns {Promise} Promesa que se resuelve con la respuesta de la solicitud.
   */
  Reservar(data) {
    return axios.post(ReservasApiUrl, data);
  }

  /**
   * Obtiene la información de una reserva por su ID.
   *
   * @param {number} id - ID de la reserva.
   * @returns {Promise} Promesa que se resuelve con la respuesta de la solicitud.
   */
  ObtenerReservaPorId(id) {
    const url = `${ReservasApiUrl}/${id}`;
    return axios.get(url);
  }

  /**
   * Obtiene todas las reservas.
   *
   * @returns {Promise} Promesa que se resuelve con la respuesta de la solicitud.
   */
  ObtenerTodasLasReservas() {
    return axios.get(ReservasApiUrl);
  }

  /**
   * Actualiza la información de una reserva.
   *
   * @param {number} id - ID de la reserva.
   * @param {Object} data - Nuevos datos de la reserva.
   * @returns {Promise} Promesa que se resuelve con la respuesta de la solicitud.
   */
  ActualizarReserva(id, data) {
    const url = `${ReservasApiUrl}/${id}`;
    return axios.put(url, data);
  }

  /**
   * Elimina una reserva por su ID.
   *
   * @param {number} id - ID de la reserva.
   * @returns {Promise} Promesa que se resuelve con la respuesta de la solicitud.
   */
  EliminarReserva(id) {
    const url = `${ReservasApiUrl}/${id}`;
    return axios.delete(url);
  }

  /**
   * Cambia el estado de una reserva.
   *
   * @param {number} idReserva - ID de la reserva.
   * @param {string} nuevoEstado - Nuevo estado de la reserva.
   * @returns {Promise} Promesa que se resuelve con la respuesta de la solicitud.
   */
  CambiarEstadoReserva(idReserva, nuevoEstado) {
    const url = `${ReservasApiUrl}/cambiarEstado?idReserva=${idReserva}&nuevoEstado=${nuevoEstado}`;
    return axios.put(url);
  }
}

export default new ReservasApiClient();
