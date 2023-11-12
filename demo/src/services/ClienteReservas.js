import axios from "axios";

const Client_Url = "http://localhost:8081/api/reservas";

class ClienteReserva{
    Reservar(String){
        return axios.post(Client_Url,String);
    }
}

export default new ClienteReserva();