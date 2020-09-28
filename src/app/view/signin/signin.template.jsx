import React from 'react';

import './signin.scss';
import FormSignin from './create-form-signin/form-signin';

export default (props) => {
    return (
        <div className="container-login">
            <FormSignin />
        </div>
    );
};
