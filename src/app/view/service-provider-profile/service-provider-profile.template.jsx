import React from 'react';

import '../home-page/card-services/card-services.scss'
import './service-provider-profile.scss';

const values = [
    'Id',
    'Dni',
    'Name',
    'Last Name',
    'Email',
    'Phone Number',
    'Address',
    'Location',
    'Birthday'
]

export default (user) => {
    return(
        <div className='provider-profile'>
            <div className='flex-column-center-center title-background'>
                <h3 className='title profile-title'> My Profile </h3>
            </div>
            <div className='container-user-values'>
                {
                    Object.keys(user).map( (key, i) => {
                        return(
                            <div className="card-header-container">
                                <h3>{values[i]}</h3>
                                <p>{user[key]}</p>
                            </div>
                        )
                    })
                }
                    <button id='edit' name='edit' className='button-primary'>Edit Profile</button>
            </div>
        </div>
    );
}
