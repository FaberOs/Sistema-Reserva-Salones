import axios from "axios";

const BASE_URL = "http://localhost:8082/api/auditorios";

class ClienteAuditorio {
  // Crear Auditorio
  crearAuditorio(auditorio) {
    return axios.post(BASE_URL, auditorio);
  }

  // Obtener Auditorio por ID
  obtenerAuditorioPorId(id) {
    return axios.get(`${BASE_URL}/${id}`);
  }

  // Obtener Todos los Auditorios
  obtenerTodosLosAuditorios() {
    return axios.get(BASE_URL);
  }

  // Actualizar Auditorio por ID
  actualizarAuditorio(id, auditorio) {
    return axios.put(`${BASE_URL}/${id}`, auditorio);
  }

  // Eliminar Auditorio por ID
  eliminarAuditorio(id) {
    return axios.delete(`${BASE_URL}/${id}`);
  }
}

export default new ClienteAuditorio();
