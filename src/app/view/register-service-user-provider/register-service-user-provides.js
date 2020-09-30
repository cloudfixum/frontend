import React from 'react';

import CreateFormUserProvider from './create-form-user-provide/create-form-user-provide';
import './register-service-user-provides.scss';

export default function NewUserProvider() {
    return (
        <div className="container-new-user-provider">
            <CreateFormUserProvider />
        </div>
    );
}
