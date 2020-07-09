import React, { useState } from "react";
import UsuariosDataService from "../Service/UsuarioService";
import "bootstrap/dist/css/bootstrap.min.css";

const AddUsuarios = () => {
    const initialUsuariosState = {
        Id_Usuario: null,
        Nome: "",
        CPF: "",
        Dt_Nascimento:"",
        Sexo:"",
        Email: "",
        Senha: ""

    };

    const [Usuarios, setUsuarios] = useState(initialUsuariosState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUsuarios({ ...Usuarios, [name]: value });
      };

      const saveUsuarios = () => {
        var data = {
            Id_Usuario: Usuarios.Id_Usuario,
            Nome: Usuarios.Nome,
            CPF: Usuarios.CPF,
            Dt_Nascimento:Usuarios.Dt_Nascimento,
            Sexo:Usuarios.Sexo,
            Email:Usuarios.Email,
            Senha:Usuarios.Senha

        };
        UsuariosDataService.create(data)
        .then(response => {
            setUsuarios({
            Id_Usuario: response.data.Id_Usuario,
            Nome: response.data.Nome,
            CPF: response.data.CPF,
            Dt_Nascimento: response.data.Dt_Nascimento,
            Sexo: response.data.Sexo,
            Email: response.data.Email,
            Senha: response.data.senha

          });
          setSubmitted(true);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    };
    const newUsuario = () => {
        setUsuarios(initialUsuariosState);
        setSubmitted(false);
      };

      return (
        <div className="submit-form">
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={newUsuario}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="Nome">Nome</label>
              <input
                type="text"
                className="form-control"
                id="Nome"
                required
                value={Usuarios.Nome}
                onChange={handleInputChange}
                name="Nome"
              />
            </div>
  
            <div className="form-group">
              <label htmlFor="CPF">CPF</label>
              <input
                type="text"
                className="form-control"
                id="CPF"
                required
                value={Usuarios.CPF}
                onChange={handleInputChange}
                name="CPF"
              />
            </div>
  
            <button onClick={saveUsuarios} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  };
    
    
    


    export default AddUsuarios;

