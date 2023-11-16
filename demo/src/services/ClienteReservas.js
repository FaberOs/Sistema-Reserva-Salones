import axios from "axios";

const Client_Url = "http://localhost:8081/api/reservas";

class ClienteReserva {
    Reservar(data) {
        return axios.post(Client_Url, data);
    }

    ObtenerReservaPorId(id) {
        const url = `${Client_Url}/${id}`;
        return axios.get(url);
    }

    ObtenerTodasLasReservas() {
        return axios.get(Client_Url);
    }

    ActualizarReserva(id, data) {
        const url = `${Client_Url}/${id}`;
        return axios.put(url, data);
    }

    EliminarReserva(id) {
        const url = `${Client_Url}/${id}`;
        return axios.delete(url);
    }

    CambiarEstadoReserva(idReserva, nuevoEstado) {
        const url = `${Client_Url}/cambiarEstado?idReserva=${idReserva}&nuevoEstado=${nuevoEstado}`;
        return axios.put(url);
    }
}

export default new ClienteReserva();