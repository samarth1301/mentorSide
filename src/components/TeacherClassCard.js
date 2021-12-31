import React from 'react'
import "./TeacherClassCard.css";
import {BsThreeDotsVertical} from "react-icons/bs"
import {MdOutlineLiveTv} from "react-icons/md";
const TeacherClassCard = () => {
    return (
        <div className='card whitebg'>
            <div className='flexCard alignItem ' >
                <div className='logoCardContainer borderRadius'>
                    <MdOutlineLiveTv/>
                </div>
                <div className='fullWidth'>
                    <div className='titleContainer flexCardContainer spaceBetween'>
                        DOUBT CLASS
                        <BsThreeDotsVertical/>
                    </div>
                    <h5>
                        <strong>
                            Full Stack Web Development Project-1 Doubt Session
                        </strong>
                    </h5>
                    <div className='subContainer'>Scheduled on 04 Aug, 8:00PM</div>
                </div>
            </div>
           
        </div>
    )
}

export default TeacherClassCard
