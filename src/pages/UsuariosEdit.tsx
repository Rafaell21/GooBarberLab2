import { IonContent, IonPage, IonCard, IonItem,IonList, IonLabel, IonButton, IonThumbnail, IonImg, IonToolbar, IonTitle, IonApp, IonInput, IonItemDivider, IonHeader } from '@ionic/react';
import React, { useState , useEffect} from 'react';
import './Usuarios.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UsuariosDataService from "../Service/UsuarioService";



type Item = {
  src: string;
  
};
const items: Item[] = [{ src: 'http://carismartes.com.br/assets/global/images/avatars/avatar1_big.png' }];
 const UsuariosEdit: React.FC = () => {
  const [courses, setData] = useState([]);
  

  useEffect(() => {
    axios.get('http://localhost:58494/Usuario/Salvar')
    .then(res => {
      setData(res.data);
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  return (
    <IonApp>
    <IonContent>
    <IonPage>
<IonHeader>
 <IonToolbar>
   <IonTitle>Edição de Usuários</IonTitle>
 </IonToolbar>
</IonHeader>
<IonContent>
 <IonList>
 
   <IonItemDivider>Nome</IonItemDivider>
   <IonItem>
     <IonInput type="text" id="Nome" required   placeholder="" ></IonInput>
   </IonItem>
   <IonItemDivider>CPF</IonItemDivider>
   <IonItem>
     <IonInput type="text" id="CPF" required   placeholder=""></IonInput>
   </IonItem>
   <IonItemDivider>Data de Nascimento :</IonItemDivider>
   <IonItem>
     <IonInput  placeholder=""></IonInput>
   </IonItem>
   <IonItemDivider>Sexo :</IonItemDivider>
   <IonItem>
     <IonInput  placeholder=""></IonInput>
   </IonItem>

   <div>
  
   <button ><IonButton href="/Usuarios" color="medium">Voltar</IonButton></button> 
           <button><IonButton color="success">Salvar</IonButton></button>
           
           
         </div>

  

</IonList>
</IonContent>
</IonPage>
</IonContent>


</IonApp>
    );
};



export default UsuariosEdit;




