import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Usuarios from './pages/Usuarios';
import UsuariosDetails from './pages/UsuariosDetails';
import AddUsuarios from './components/AddUsuarios';
import UsuariosCreate from './pages/UsuariosCreate';
import UsuariosEdit from './pages/UsuariosEdit';
import UsuariosDelete from './pages/UsuariosDelete';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />

        <Route path="/Usuarios" component={Usuarios} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/Usuarios" />} />

        <Route path="/UsuariosCreate" component={UsuariosCreate} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/UsuariosCreate;" />} />

        <Route path="/UsuariosDetails" component={UsuariosDetails} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/UsuariosDetails" />} />

        <Route path="/UsuariosEdit" component={UsuariosEdit} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/UsuariosEdit" />} />

        <Route path="/UsuariosDelete" component={UsuariosDelete} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/UsuariosDelete" />} />

        
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;

