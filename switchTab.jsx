

import React, { useState } from 'react'
import './switchTab.css'
const switchTab = () => {
    const [isSwitchOn, setSwitchOn] = useState(0);



    const loop = [
        {
            id: 1,
        },
        {
            id: 2
        },
        {
            id: 3
        },
        {
            id: 4
        },
        {
            id: 5
        },
        {
            id: 6
        }
    ]



    const handleSwitchTabs = (index) => {
        setSwitchOn(index)
    }



    return (
        <div className='switchContainer'>
            
            <ul className='switchItems  '>


                {loop.map((item, index) => {
                    return <li key={index} className={`switchItem ${isSwitchOn === index ? 'active' : ""}             `} onClick={() => handleSwitchTabs(index)}>{item.id}</li>
                })}


            </ul>
        </div>
    )
}

export default switchTab