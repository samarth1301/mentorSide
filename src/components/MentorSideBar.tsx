import {
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote, useIonRouter,
    IonPage
  } from "@ionic/react";

import { useLocation,NavLink } from 'react-router-dom';
import React, { useContext,useState, useEffect } from "react";

// import { UserContext } from "../context/user-context";

import "./MentorSide.css";
import {ReactComponent as LogOut} from "../Assets/Sidebar and Practice Section/Icon/Log Out.svg";
import {ReactComponent as LiveTraining} from "../Assets/Sidebar and Practice Section/Icon/LiveTraining.svg";
import {ReactComponent as Explore} from "../Assets/Sidebar and Practice Section/Icon/Explore.svg";
import {ReactComponent as Course} from "../Assets/Sidebar and Practice Section/Icon/Course.svg";
import {ReactComponent as MyPrograms} from "../Assets/Sidebar and Practice Section/Icon/MyPrograms.svg";

  
  const MentorSideBar: React.FC = () => {
    const location = useLocation();
    const router = useIonRouter();
    // const user = useContext(UserContext);
    const [navbarConfig, setConfig] = useState<any []>([]);

    interface AppPage {
      title: string;
      url: string;
      icon:any;
    }

    const mentorNavbarConfig: AppPage[] = [
        {
            title: 'Dashboard',
            url: '/mentor-dashboard',
            icon: <LiveTraining />
          },
          {
            title: 'MySchedule',
            url: '/schedule',
            icon: <Course />
          },
          {
            title: 'Projects',
            url: '/projects',
            icon: <MyPrograms />
          },
          {
            title: 'Messages',
            url: '/Messages',
            icon: <Explore />
          }
    ];

    // useEffect(() => {
    //   console.log({user})
    //   if (user && "isMentor" in user) {
    //     if (!user.isMentor) setConfig(studentNavbarConfig);
    //     else setConfig(mentorNavbarConfig);
    //   }
    // }, [user]);

    return ( 
      <div className="navbar-container">
        <div className="logoContainer" >
          <i className="far fa-dot-circle main-logo"></i>
          <h6>SHAPEAI</h6>
        </div>
        <div className="utilityContainer">
            <div>
              { 
                  mentorNavbarConfig.map(page => {
                    return(
                      <li className={`link-item ${location.pathname === page.url ? 'selected' : ''} ${page.title==='Help' && 'help-link'}`}>
                        <NavLink to={page.url} className={`nav-link`}>
                          <p className="nav-icons">{page.icon}</p>
                          <p className="nav-title">{page.title}</p>
                        </NavLink>
                      </li>              
                    )
                  })
              }
            </div>
              <div>
                <li className="nav-link">
                  <button className="logout-btn" >
                  <LogOut />
                    <p className="nav-title">Logout</p>
                  </button>
                </li>
              </div>
      
        </div>
      </div>
    );
  };
  
  export default MentorSideBar;