import http from "../http-common";

const getAll = () => {
    return http.get("/Usuario/ListarUsuarios");
  };

  const get = id => {
    return get(`/Usuario/ListarUsuariosbyid${id}`);
  };

  const create = data => {
     return http.post("http://localhost:58494/Usuario/Salvar", data);
  };

  const create_novo = data => {
    // console.log("OK")
    // return http.post("http://localhost:58494/Usuario/Salvar", data);
    return fetch("http://localhost:58494/Usuario/Salvar", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    
  };

  export default {
    getAll,
    get,
    create,
    create_novo
  };
  