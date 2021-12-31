import React from 'react'
import "./ProjectReview.css";
import TeacherCountCard from '../../components/TeacherCountCard'
import {FaShapes,FaRocket} from "react-icons/fa";
import {BsFillPenFill} from "react-icons/bs";
import {MdOutlineLiveTv} from "react-icons/md";
import TeacherClassCard from '../../components/TeacherClassCard';
import { IonContent, IonPage } from '@ionic/react';
import Table from '../../components/tables/tables';
const ProjectReview = () => {
    return (
       <IonPage>
           <IonContent>
             <div className='mainContainer'>
            <div>
                <h3 className='title'><strong>Projects</strong> </h3>
                <h6 className='batch'>18 Submissions found </h6>
            </div>
           <div className=' marginTop'>
                    <div className=' fullWidthColumn' >
                        <div className='flexCardContainer'>
                                    <TeacherCountCard title="Total Submissions" count="50" logo={<FaShapes/>} color="blue"/>
                                    <TeacherCountCard title="Projects Due For Review " count="48" countSub="/50" logo={<BsFillPenFill/>} color="green" />
                                    <TeacherCountCard title="Avg Submission Rate" count="3" countSub="%" logo={<FaRocket/>} color="purple" />
                        </div>
                       <div className='widthFull '>
                           <Table/>
                       </div>
                    </div>
           </div>
        </div>
      
           </IonContent>
        </IonPage>
    )
}

export default ProjectReview
