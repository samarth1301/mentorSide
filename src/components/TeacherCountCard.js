import React from 'react'
import "./TeacherCountCard.css"
const TeacherCountCard = ({ title, count,countSub, logo,color }) => {
    return (
        <div className='cardContainer'>
            <div className=' noGap alignItems' >
                <div className={'logoCardContainer' + " " + color+"bg"}>
                    {logo}
                </div>
                <div className='flexColumn'>
                    <div className='titleContainer'>
                        {title}
                    </div>
                    <div className='lgFont'>
                        <strong>
                            {count}
                        </strong>
                        <span className='gray smFont'>
                            {countSub}
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TeacherCountCard;
