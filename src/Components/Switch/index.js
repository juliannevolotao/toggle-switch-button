import React, { useState } from 'react';
import './styles.sass';

export default function Switch(props) {
    const [isDay, setIsDay] = useState(true);

    const handleClick = (e) => {
        e.preventDefault();
        setIsDay(!isDay);
        
        props.callBackParent()
    }



    return (
        <div className="switch-container displayFlex">
            <div className={` switch-body displayFlex ${ + isDay ? "bg-day" : "bg-night"} `}>
                <button className={`switch  ${ + isDay ? 'switch-light': 'switch-dark'} `} onClick={handleClick}></button>
            </div>
        </div>
    )

}