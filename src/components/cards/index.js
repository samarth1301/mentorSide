import React from 'react'
import styles from './style.css'
import {
    BarChart,
    Tooltip,

    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Bar,
} from "recharts";
const Card = () => {
    const data = [
        { name: "Mon", users: 20 },
        { name: "Tues", users: 15 },
        { name: "Wed", users: 10 },
        { name: "Thurs", users: 50 },
        { name: "Fri", users: 20 },
    ];

    return (
        <div className='cardcontainer halfWidth'>
            <div className='upperHeading bold'>Attendence Overview</div>
            <p className='subHeading'>Avg Attendence</p>
            <h1 className='bold'>75%</h1>
            <p className='subHeading'><span style={{color: 'green', fontWeight: 'bold'}}>13% </span>increase in 7 days</p>
            <div className='fullWidth'>
            <BarChart
                                width={400}
                                height={300}
                                data={data}
                                margin={{
                                    top: 10,
                                    right: 30,
                                    left: -35,
                                    bottom: 5,
                                }}
                                barSize={20}
                            >
                                <XAxis
                                    dataKey="name"
                                    scale="point"
                                    padding={{ left: 10, right: 10 }}
                                />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Bar dataKey="users" fill="#8884d8" background={{ fill: "#eee" }}  />
                            </BarChart>
            </div>
           
            <h4 className='lowerHeading bold'>See Detailed Attendence</h4>
        </div>
    )
}

export default Card