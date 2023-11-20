import axios from "axios";

const Client_Url = "http://localhost:8083/api"; // Ajusta el puerto según sea necesario

class ClienteProgramaAcademico {
  // Crea un nuevo programa académico asociado a una facultad específica.
  // Ruta: POST /api/facultad/{idFacultad}/programa-academico
  // Parámetros: idFacultad (Path Variable), programaAcademicoRequest (Request Body)
  // Retorno: ProgramaAcademico (201 CREATED o 404 NOT FOUND)
  crearProgramaAcademico(idFacultad, programaAcademicoRequest) {
    const url = `${Client_Url}/facultad/${idFacultad}/programa-academico`;
    return axios.post(url, programaAcademicoRequest);
  }

  // Obtiene un programa académico específico según su identificador.
  // Ruta: GET /api/programa-academico/{id}
  // Parámetros: id (Path Variable)
  // Retorno: ProgramaAcademico (200 OK o 404 NOT FOUND)
  obtenerProgramaAcademicoPorId(id) {
    const url = `${Client_Url}/programa-academico/${id}`;
    return axios.get(url);
  }

  // Actualiza un programa académico existente según su identificador.
  // Ruta: PUT /api/programa-academico/{id}
  // Parámetros: id (Path Variable), programaAcademicoRequest (Request Body)
  // Retorno: ProgramaAcademico (200 OK o 404 NOT FOUND)
  actualizarProgramaAcademico(idPrograma, programaAcademicoRequest) {
    const url = `${Client_Url}/programa-academico/${idPrograma}`;
    return axios.put(url, programaAcademicoRequest);
  }

  // Elimina un programa académico existente según su identificador.
  // Ruta: DELETE /api/programa-academico/{id}
  // Parámetros: id (Path Variable)
  // Retorno: HttpStatus (204 NO CONTENT o 404 NOT FOUND)
  eliminarProgramaAcademico(id) {
    const url = `${Client_Url}/programa-academico/${id}`;
    return axios.delete(url);
  }

  obtenerTodasLosProgramasAcademicos() {
    const url = `${Client_Url}/programa-academico`;
    return axios.get(url);
  }
}

export default new ClienteProgramaAcademico();
