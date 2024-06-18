import axios from 'axios';

const API_URL = 'http://localhost:8081/api/reservas-auditorio';

const ClienteReservaAuditorio = {
  obtenerReservaPorId: (id) => {
    return axios.get(`${API_URL}/${id}`);
  },

  obtenerTodasLasReservas: () => {
    return axios.get(API_URL);
  },

  crearReservaAuditorio: (reservaAuditorio) => {
    return axios.post(API_URL, reservaAuditorio);
  },

  actualizarReservaAuditorio: (id, reservaAuditorio) => {
    return axios.put(`${API_URL}/${id}`, reservaAuditorio);
  },

  eliminarReservaAuditorio: (id) => {
    return axios.delete(`${API_URL}/${id}`);
  },

  cambiarEstadoReservaAuditorio: (idReserva, nuevoEstado) => {
    return axios.put(`${API_URL}/cambiarEstado?idReserva=${idReserva}&nuevoEstado=${nuevoEstado}`);
  },
};

export default ClienteReservaAuditorio;
