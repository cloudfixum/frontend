import React from 'react';
import { ServiceCategories } from '../../../shared/utils/constant/service-categories';

import './card-services.scss';

export default function CardServices(props) {
    // const image = 'url(' + props.service.image_url + ')';
    const serviceCategories = new ServiceCategories().getCategoriesByType(
        'sub_categories'
    );

    return (
        <div
            className="mat-card card-service-container">
            <div className="mat-card-header">
                {/* <h3>{props.service.title}</h3>
                <p>{serviceCategories[props.service.category]}</p> */}
                <h3>Aca va un titulo super largo para probar bien</h3>
                <p>Aca va la categoria</p>
            </div>
            <div className="mat-card-content">
                {/* <p>{props.service.description}</p>
                <p>
                    <span>Base Price:</span> ${props.service.base_price}
                </p> */}
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, assumenda molestias in quasi magni illo consequuntur laboriosam pariatur sunt temporibus consequatur blanditiis officiis, necessitatibus corrupti natus ea esse amet iusto.</p>
                {/* <p>
                    <span>Base Price:</span> ${props.service.base_price}
                </p> */}
                <p>
                    <span>Base Price:</span> $500
                </p>
            </div>
            <div>
                <button className="button button-primary">More Details</button>
            </div>
        </div>
    );
}
