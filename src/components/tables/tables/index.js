import React, { useState } from 'react'
import './style.css'
import { FaUserCircle, FaFilter } from 'react-icons/fa'
import { BsSearch, BsThreeDotsVertical } from 'react-icons/bs'
import { BiSort } from 'react-icons/bi'
import studentData from './data'

const Table = () => {
    const [fullTable,setFullTable] = useState(false);
    return (
        <div className='tableContainer'>
            <div className='upperTableContainer'>
                <h3 className='smFont bold'>Project Submission</h3>
                <div className='tableIconsContainer'>
                    <BsSearch />
                    <FaFilter />
                    <BiSort />
                </div>
            </div>
            <div className='tableHead'>
                <name>Name</name>
                <email>Email</email>
                <project>Project Name</project>
                <date    >Date of Submission</date>
                <status>Status</status>
            </div>
            <div className='tableContent'>

                {studentData.map((data, i) => {
                    if (!fullTable && i > 4) {
                        return ;
                    }
                    return (
                        <div className='tableColumn'>
                            <p><FaUserCircle className='userIcon' />{data.name}</p>
                            <p style={{ width: '14rem' }}>{data.email}</p>
                            <p>{data.project}</p>
                            <p>{data.date}</p>
                            {data.status === 'pending' && <status style={{ backgroundColor: '#ffffb3', color: '#ff9933' }}>{data.status}</status>}
                            {data.status === 'accepted' && <status style={{ backgroundColor: '#adebad', color: '#29a329' }}>{data.status}</status>}
                            {data.status === 'rejected' && <status style={{ backgroundColor: '#ffb3b3', color: '#cc0000' }}>{data.status}</status>}
                            <BsThreeDotsVertical style={{ marginLeft: '45px' }} />
                        </div>
                    )
                })}
            </div>
            <div onClick={()=>{setFullTable(!fullTable)}} className='flexEnd blue margin2 bold padding pointer' >
                View {!fullTable?"All":"Less"} Submissions
            </div>
        </div>
    )
}

export default Table