import axios from "axios";

const Client_Url = "http://localhost:8080/api/login/autenticar";

class ClienteAutenticacion{
    Autenticar(String){
        return axios.post(Client_Url,String);
    }
    /*Autenticar(){
        return axios.post(Client_Url,{
            "username": "juanperez",
            "contrasenia": "contraseña1"
        });
    }*/
}

export default new ClienteAutenticacion();