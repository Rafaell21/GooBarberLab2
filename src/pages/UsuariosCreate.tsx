import { IonContent, IonPage, IonCard, IonItem,IonList, IonLabel, IonButton, IonThumbnail, IonImg, IonToolbar, IonTitle, IonApp, IonInput, IonItemDivider, IonHeader } from '@ionic/react';
import React, { useState , useEffect} from 'react';
import './Usuarios.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UsuariosDataService from "../Service/UsuarioService";

type Item = {
  src: string;
  };

   const AddUsuarios = () => {
     const initialUsuariosState = {
         id_Usuario: 0,
         nome: "",
         cpf: "",
         dt_Nascimento:"",
         sexo:"",
         email: "",
         senha: ""
     };
  
    const [Usuarios, setUsuarios] = useState(initialUsuariosState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange =  (event: any) => {

      const { name, value } = event.target;
      setUsuarios({ ...Usuarios, [name]: value });
    };
  
     const saveUsuarios = () => {

       var data = {
           id_Usuario: Usuarios.id_Usuario,
           nome: Usuarios.nome,
           cpf: Usuarios.cpf,
           dt_Nascimento:Usuarios.dt_Nascimento,
           sexo:Usuarios.sexo,
           email:Usuarios.email,
           senha:Usuarios.senha
        };

       UsuariosDataService.create(data)
          .then((response: any) => {
           setUsuarios({
           id_Usuario: response.data.id_Usuario,
           nome: response.data.nome,
           cpf: response.data.cpf,
           dt_Nascimento: response.data.dt_Nascimento,
           sexo: response.data.sexo,
           email: response.data.email,
           senha: response.data.senha
           });
         setSubmitted(true);
         
        })
       .catch(e => {
         console.log(e);
       });
   };
   const newUsuario = () => {
       setUsuarios(initialUsuariosState);
       setSubmitted(false);
      
       console.log("ok")
     };


    




const items: Item[] = [{ src: 'http://carismartes.com.br/assets/global/images/avatars/avatar1_big.png' }];



  

  // useEffect(() => {
  //   axios.post('http://localhost:58494/Usuario/Salvar')
  //   .then(res => {
  //     setData(res.data);
  //     console.log(res.data);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  // }, []);
  

  return (
    <IonApp>
    <IonContent>
    <IonPage>
    
<IonHeader>
 <IonToolbar>
   <IonTitle>Cadastro de Usuários</IonTitle>
 </IonToolbar>
</IonHeader>
<IonContent>
 <IonList>
 
   <IonItemDivider>Nome</IonItemDivider>
   <IonItem>
     <IonInput onIonChange={handleInputChange} value={Usuarios.nome} type="text" id="nome" name="nome" required   placeholder="" ></IonInput>
   </IonItem>
   <IonItemDivider>CPF</IonItemDivider>
   <IonItem>
     <IonInput onIonChange={handleInputChange} value={Usuarios.cpf} type="text" id="cpf" name="cpf" required   placeholder=""></IonInput>
   </IonItem>
   <IonItemDivider>Data de Nascimento :</IonItemDivider>
   <IonItem>
     <IonInput onIonChange={handleInputChange} value={Usuarios.dt_Nascimento} type="text" id="dt_nascimento" name="dt_Nascimento" required   placeholder=""  ></IonInput>
   </IonItem>
   <IonItemDivider>Sexo :</IonItemDivider>
   <IonItem>
     <IonInput onIonChange={handleInputChange} value={Usuarios.sexo} type="text" id="sexo" name="sexo" required placeholder=""></IonInput>
   </IonItem>
   <IonItemDivider>Email :</IonItemDivider>
   <IonItem>
     <IonInput  onIonChange={handleInputChange} value={Usuarios.email}  type="text" id="email"  name="email" required placeholder=""></IonInput>
   </IonItem>
   <IonItemDivider>Senha :</IonItemDivider>
   <IonItem>
     <IonInput onIonChange={handleInputChange} value={Usuarios.senha}  type="text" id="senha"   name="senha" required placeholder=""></IonInput>
   </IonItem>

   <div>
  
   <button onClick={newUsuario}  ><IonButton  color="medium">Voltar</IonButton></button> 
           <button onClick={saveUsuarios}  ><IonButton color="success">Castrar</IonButton></button>
           
           
         </div>


</IonList>
</IonContent>
</IonPage>
</IonContent>


</IonApp>
    );
};





export default AddUsuarios;


