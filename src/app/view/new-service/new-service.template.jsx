import React from 'react';

import './new-service.scss';
import CreateFormService from './create-form-service/create-form-service';

export default (props) => {
    return (
        <div className="container-new-service">
            <CreateFormService />
        </div>
    );
};
