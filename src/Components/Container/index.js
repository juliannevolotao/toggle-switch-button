import React from 'react';

import './styles.sass';

export default function Container(props){

    return (
        <div className="containerConfig">
            
            {props.children}
            
        </div>
    )
    
}