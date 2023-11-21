import axios from 'axios';

const BASE_URL = 'http://localhost:8085/api/incidencias';

class ClienteIncidencias {
  // Guardar una nueva incidencia
  saveIncidencia(incidencia) {
    return axios.post(BASE_URL, incidencia);
  }

  // Obtener una incidencia por su ID
  getIncidenciaById(id) {
    return axios.get(`${BASE_URL}/${id}`);
  }

  // Obtener todas las incidencias
  getAllIncidencias() {
    return axios.get(BASE_URL);
  }

  // Puedes agregar más métodos según tus requerimientos
}

export default new ClienteIncidencias();
