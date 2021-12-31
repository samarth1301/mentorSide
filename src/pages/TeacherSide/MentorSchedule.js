import React, { useState } from 'react'
import TeacherCountCard from '../../components/TeacherCountCard'
import { FaPaw } from "react-icons/fa";
import { MdOutlineLiveTv } from "react-icons/md";
import "./MentorDashboard.css"
import TeacherClassCard from '../../components/TeacherClassCard';
import Calendar from 'react-calendar';
import { IonContent, IonPage } from '@ionic/react';
import TeacherScheduleClasses from '../../components/TeacherScheduleClasses';
const MentorSchedule = () => {
    const [value, onChange] = useState(new Date());
    return (
        <IonPage>
            <IonContent>


                <div className='mainContainer'>
                    <div className='flexContainer spaceBetween alignItems'>
                        <div>
                            <h3 className='title'> <strong>My Schedule</strong> </h3>
                            <h6 className='batch'>Create and Manage Your Schedule</h6>
                        </div>
                        <div>
                            <button className='btn'>
                                Create a New Event
                            </button>
                        </div>
                    </div>
                        <div>
                            <hr className='grayLine' />
                        </div>
                    <div className='flexContainer marginTop'>
                        <div className='column' >
                            <TeacherScheduleClasses date="Aug 04, Today"/>
                            <TeacherScheduleClasses date="Aug 05, Tomorrow"/>
                        </div>
                        <div className='halfWidth'>
                            <Calendar
                                onChange={onChange}
                                value={value}
                            />
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default MentorSchedule;
