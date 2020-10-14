import React from 'react';

import './card-category.scss';

export default function CardCategory(props) {
    return (
        <div className="card-image">
            <div
                className="mat-card card-category-container"
                style={{
                    backgroundImage: 'url(/src/assets/images/img-user.jpg)',
                }}>
                <div className="mat-card-content">
                    <h3>{props.category}</h3>
                </div>
            </div>
        </div>
    );
}
