import React from 'react';

import { ServiceCategories }  from '../../../shared/utils/constant/service-categories'

import './card-services.scss'

export default (props) => {
    const image = 'url(' + props.image_url + ')';
    const serviceCategories = new ServiceCategories().getCategories();
    return (
        <div className='card-container' style={{backgroundImage: image}}>
            <div style={{display: 'none'}} className='image-background-container'>
            </div>
            <div className='card-data-container'>
                <div className='card-header-container'>
                    <h3>{props.title}</h3>
                    <p>{serviceCategories[props.category]}</p>
                </div>
                <div className='card-body-container'>
                    <p>{props.description}</p>
                </div>
                <p><span>Base Price:</span> ${props.base_price}</p>
            </div>
        </div>
    )
}