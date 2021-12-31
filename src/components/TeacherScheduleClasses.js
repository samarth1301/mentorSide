import React from 'react'
import TeacherClassCard from './TeacherClassCard'

const TeacherScheduleClasses = ({date,}) => {
    return (
        <>
            <h4 className='lgFont'>{date}</h4>
            <TeacherClassCard />
            <TeacherClassCard />
            <TeacherClassCard />
                              
        </>
    )
}

export default TeacherScheduleClasses