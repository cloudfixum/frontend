import React, { useCallback } from 'react';

import './signin.scss';
import FormSignin from './create-form-signin/form-signin';

export default function Signin() {
    return (
        <div className="container-login">
            <FormSignin />
        </div>
    );
}
