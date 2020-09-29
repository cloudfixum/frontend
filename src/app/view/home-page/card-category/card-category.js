import React from 'react';

import './card-category.scss';

export default function CardCategory(props) {
    const image = 'url(' + props.image + ')';
    return (
        <div
            className="mat-card card-category-container"
            style={{ backgroundImage: image }}>
            <div className="mat-card-content">
                <h3>{props.category}</h3>
            </div>
        </div>
    );
}
