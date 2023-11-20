import axios from "axios";

const BASE_URL = "http://localhost:8082/api/salones";

class ClienteSalon {
  // Crear Salón
  crearSalon(salon) {
    return axios.post(BASE_URL, salon);
  }

  // Obtener Salón por ID
  obtenerSalonPorId(id) {
    return axios.get(`${BASE_URL}/${id}`);
  }

  // Obtener Todos los Salones
  obtenerTodosLosSalones() {
    return axios.get(BASE_URL);
  }

  // Actualizar Salón por ID
  actualizarSalon(id, salon) {
    return axios.put(`${BASE_URL}/${id}`, salon);
  }

  // Eliminar Salón por ID
  eliminarSalon(id) {
    return axios.delete(`${BASE_URL}/${id}`);
  }
}

export default new ClienteSalon();
