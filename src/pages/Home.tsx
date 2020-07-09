import {  IonPage, IonApp, IonImg, IonItem } from '@ionic/react';
import './Home.css';
import React from 'react';
import { Link } from 'react-router-dom';



export const Home: React.FC = () => { 
  return ( 
    <IonApp>

      <IonPage>
             <IonItem>
     
    <Link to='./Usuarios'>
    <IonImg  src={'http://carismartes.com.br/assets/global/images/avatars/avatar1_big.png' } />
    
        <h1>   Usuários</h1>
        </Link>
    
 </IonItem>
 
      </IonPage>
            
        </IonApp>
  )
}

export default Home;





