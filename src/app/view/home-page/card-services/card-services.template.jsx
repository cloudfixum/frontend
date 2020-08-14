import React from 'react';

import './card-services.scss'

export default (props) => {
    return (
        <div className='card-container' style={{backgroundImage:'url(https://img.freepik.com/foto-gratis/desarrollo-programadores-desarrollo-tecnologias-diseno-codificacion-sitios-web_18497-1019.jpg?size=626&ext=jpg)'}}>
            <div style={{display: 'none'}} className='image-background-container'>
            </div>
            <div className='card-data-container'>
                <div className='card-header-container'>
                    <h3>{props.title}</h3>
                    <p>{props.category}</p>
                </div>
                <div className='card-body-container'>
                    <p>{props.description}</p>
                </div>
                <p>Base Price: ${props.base_price}</p>
            </div>
        </div>
    )
}