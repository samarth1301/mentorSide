import React, { useState } from 'react'
import TeacherCountCard from '../../components/TeacherCountCard'
import { FaPaw } from "react-icons/fa";
import { MdOutlineLiveTv } from "react-icons/md";
import "./MentorDashboard.css"
import TeacherClassCard from '../../components/TeacherClassCard';
import { IonContent, IonPage } from '@ionic/react';
import GraphCard from "../../components/cards/index";

const MentorDashboard = () => {

    return (
        <IonPage>
            <IonContent>

                <div className='mainContainer'>
                    <div>
                        <h3 className='title'>Welcome Back, <strong>Ashish</strong> </h3>
                        <h6 className='batch'>You are assigned Batch of <u>Full Stack Industrial Training Program </u></h6>
                    </div>
                    <div className='flexContainer marginTop noGap'>
                        <div className='column' >
                            <div className='flexCardContainer'>
                                <TeacherCountCard title="Total Students" count="150" logo={<FaPaw />} color="blue" />
                                <TeacherCountCard title="Total Classes This Week" count="5" logo={<MdOutlineLiveTv />} color="green" />
                            </div>
                            <div className='upcomingClass'>
                                <h6>Upcoming Classes</h6>
                                <TeacherClassCard />
                                <TeacherClassCard />
                                <TeacherClassCard />
                                <div className='flexEnd blue margin2' >
                                    See More ➝
                                </div>
                            </div>
                        </div>
                        <div className='halfWidth'>
                            {/*graph bar componet is rendered here */}
                            {/* <Chart data={data} axes={axes} /> */}

                            <GraphCard/>

                            {/*  */}
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default MentorDashboard
