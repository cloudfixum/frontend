import React from 'react';

import './service-provider-profile.scss';

export default (props) => {
    return(
        <div className='provider-profile'>
            <div className='flex-column-center-center title-background'>
                <h3 className='title profile-title'> My Profile </h3>
            </div>
            <div className='table-container table-profile'>
                <table className='table is-striped is-bordered is-hoverable is-fullwidth'>
                    <tbody>
                        <tr>
                            <td>Name: </td> <td>{props.getUser.name}</td>
                        </tr>
                        <tr>
                            <td>Last Name: </td> <td>{props.getUser.last_name}</td>
                        </tr>
                        <tr>
                            <td>DNI: </td> <td>{props.getUser.dni}</td>
                        </tr>
                        <tr>
                            <td>Address: </td> <td>{props.getUser.address}</td>
                        </tr>
                        <tr>
                            <td>Birth Date: </td> <td>{props.getUser.birthday}</td>
                        </tr>
                        <tr>
                            <td>Email: </td> <td>{props.getUser.email}</td>
                        </tr>
                        <tr>
                            <td>Phone Number: </td> <td>{props.getUser.phone_number}</td>
                        </tr>
                        <tr>
                            <td>Location: </td> <td>{props.getUser.location}</td>
                        </tr>
                    </tbody>
                    <tfoot> <button id='edit' name='edit' className='button-primary'>Edit Profile</button> </tfoot>
                </table>
            </div>
        </div>
    );
}
