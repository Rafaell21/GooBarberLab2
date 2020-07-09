import { IonContent, IonPage, IonCard, IonItem,IonList, IonLabel, IonButton, IonThumbnail, IonImg, IonToolbar, IonTitle, IonApp } from '@ionic/react';
import React, { useState , useEffect} from 'react';
import './Usuarios.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UsuariosDataService from "../Service/UsuarioService";



type Item = {
  src: string;
  
};
const items: Item[] = [{ src: 'http://carismartes.com.br/assets/global/images/avatars/avatar1_big.png' }];
 const UsuariosDetails: React.FC = () => {
  const [courses, setData] = useState([]);
  

  useEffect(() => {
    axios.get('http://localhost:58494/Usuario/currentUser')
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
   
    <IonToolbar>
          <IonTitle>Detalhes Usuário</IonTitle>
        </IonToolbar>
 


     
        
              <br />
        {courses.map((course: any) => (
        <IonList>
          <IonCard key={course.id_Usuario}>
          {items.map((image, i) => (
        <IonItem key={i}>
          <IonThumbnail slot="start">
            <IonImg src={image.src} />
          </IonThumbnail>
                                               
               <IonLabel>
                
                <p>Nome: <b>{course.nome}</b></p>
                <p>CPF: {course.cpf}</p>
                <p>Nascimento: {course.dt_Nascimento}</p>
                <p>Sexo: {course.sexo}</p>
                <div>
                
                 {/* <button ><IonButton color="warning">Editar</IonButton></button> 
                 <button ><IonButton color="danger">Excluir</IonButton></button>  */}

                  </div>
                </IonLabel>
            </IonItem>
           ))}
        </IonCard>
      </IonList>
    

        ))
        }
        
        <button ><IonButton href="/Usuarios" color="medium">Voltar</IonButton></button> 
    </IonContent>
</IonPage>
</IonApp>  



    );
};



export default UsuariosDetails;