import { IonContent, IonPage, IonCard, IonItem,IonList, IonLabel, IonButton, IonThumbnail, IonImg, IonToolbar, IonTitle, IonApp, IonText, IonItemDivider } from '@ionic/react';
import React, { useState , useEffect} from 'react';
import './Usuarios.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UsuariosDataService from "../Service/UsuarioService";



type Item = {
  src: string;
  
};
const items: Item[] = [{ src: 'http://carismartes.com.br/assets/global/images/avatars/avatar1_big.png' }];
 const UsuariosDelete: React.FC = () => {
  const [courses, setData] = useState([]);
  

  useEffect(() => {
    axios.delete('http://localhost:58494/Usuario')
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
        <IonPage>

        <IonContent>
        <IonItem>
            <IonTitle>Excluir Usuário</IonTitle>
        </IonItem>
        <IonItemDivider></IonItemDivider>
            <IonItem>
            <IonText>
                Deseja Realmente Excluir o usuário ?
            </IonText>
    
            </IonItem>
            
 
        <IonItem>
        <button ><IonButton href="/Usuarios" color="medium">Voltar</IonButton></button> 
        <button><IonButton color="danger">Confirmar</IonButton></button>
        </IonItem>
        
    </IonContent>
</IonPage>
</IonApp>  



    );
};



export default UsuariosDelete;