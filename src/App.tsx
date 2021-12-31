import { IonApp, IonRouterOutlet, IonSplitPane, IonMenu,useIonRouter } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route, useHistory, useLocation } from 'react-router-dom';

// @ts-ignore
import  "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import './global.css';
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
import React,{useContext,useEffect,useState} from "react";
import MentorSideBar from "./components/MentorSideBar";

import MentorDashboard from './pages/TeacherSide/MentorDashboard';
import ProjectReview from './pages/TeacherSide/ProjectReview';
import MentorSchedule from './pages/TeacherSide/MentorSchedule';
const App: React.FC = () => {

  
  return (
    <IonApp>
      <IonReactRouter>
       
        <IonSplitPane contentId="main" style={{}}>
          <IonMenu>
            <MentorSideBar />
          </IonMenu>
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/mentor-dashboard"/>
            </Route>
            <Route path='/mentor-dashboard' exact={true}>
             <MentorDashboard/>
            </Route>
            <Route path='/projects' exact={true}>
             <ProjectReview/>
            </Route>
            <Route path='/schedule' exact={true}>
             <MentorSchedule/>
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
