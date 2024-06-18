import axios from "axios";

const FacultadesApiUrl = "http://localhost:8083/api/facultades";

class ClienteFacultades {
  /**
   * Realiza una solicitud para crear una nueva facultad.
   *
   * @param {Object} data - Datos de la facultad.
   * @returns {Promise} Promesa que se resuelve con la respuesta de la solicitud.
   */
  CrearFacultad(data) {
    return axios.post(FacultadesApiUrl, data);
  }

  /**
   * Obtiene la información de una facultad por su ID.
   *
   * @param {number} id - ID de la facultad.
   * @returns {Promise} Promesa que se resuelve con la respuesta de la solicitud.
   */
  ObtenerFacultadPorId(id) {
    const url = `${FacultadesApiUrl}/${id}`;
    return axios.get(url);
  }

  /**
   * Obtiene todas las facultades.
   *
   * @returns {Promise} Promesa que se resuelve con la respuesta de la solicitud.
   */
  ObtenerTodasLasFacultades() {
    return axios.get(FacultadesApiUrl);
  }

  /**
   * Actualiza la información de una facultad.
   *
   * @param {number} id - ID de la facultad.
   * @param {Object} data - Nuevos datos de la facultad.
   * @returns {Promise} Promesa que se resuelve con la respuesta de la solicitud.
   */
  ActualizarFacultad(id, data) {
    const url = `${FacultadesApiUrl}/${id}`;
    return axios.put(url, data);
  }

  /**
   * Elimina una facultad por su ID.
   *
   * @param {number} id - ID de la facultad.
   * @returns {Promise} Promesa que se resuelve con la respuesta de la solicitud.
   */
  EliminarFacultad(id) {
    const url = `${FacultadesApiUrl}/${id}`;
    return axios.delete(url);
  }
}

export default new ClienteFacultades();
