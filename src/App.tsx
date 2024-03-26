import { Redirect, Route } from 'react-router-dom';
import {
  IonApp, IonButtons, IonContent, IonHeader,
  IonIcon, IonItem,
  IonLabel, IonList, IonMenu, IonMenuButton, IonMenuToggle, IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs, IonTitle, IonToolbar,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {cloud, ellipse, square, triangle} from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

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
import {Browser} from "leaflet";
import android = Browser.android;

setupIonicReact();

const App: React.FC = () => (
    <IonApp>
      <IonReactRouter>
        <IonMenu contentId="main">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              <IonItem routerLink="/tab1" routerDirection="none">Current Weather</IonItem>
              <IonItem routerLink="/tab2" routerDirection="none">Radar</IonItem>

            </IonList>
          </IonContent>
        </IonMenu>

        <IonPage id="main">
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonMenuButton />
              </IonButtons>
              <IonTitle>Whether Weather</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonTabs>
              <IonRouterOutlet>
                <Route exact path="/tab1">
                  <Tab1 />
                </Route>
                <Route exact path="/tab2">
                  <Tab2 />
                </Route>

                <Route exact path="/">
                  <Redirect to="/tab1" />
                </Route>
              </IonRouterOutlet>
              <IonTabBar slot="bottom">
                <IonTabButton tab="tab1" href="/tab1">
                  <IonIcon icon={cloud} />
                  <IonLabel>Current Weather</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab2" href="/tab2">
                  <IonIcon icon={ellipse} />
                  <IonLabel>Radar</IonLabel>
                </IonTabButton>

              </IonTabBar>
            </IonTabs>
          </IonContent>
        </IonPage>
      </IonReactRouter>
    </IonApp>
);

export default App;
