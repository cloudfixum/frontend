import React from 'react';

import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

import './create-form-user-provide.scss';

export default (props) => {
    const handleChange = (e) => {
        e.preventDefault();
        props.setValuesForm({...props.valuesForm, [e.target.name] : e.target.value})
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log("El mati Navarro lo hace")
    }

return (
    <div className= "container-form-user-provide">
        <h1>Register User Provider</h1>
        <form className="flex-column-center-center" onSubmit={handleOnSubmit}>
            <div className="flex-row-center-center container-form-double">
                <TextField name="name" className="form-items" fullWidth={true} id="name" label="Name" variant="outlined" required/>
                <TextField name="last_name" className="form-items form-second" fullWidth={true} id="last_name" label="Lastname" variant="outlined" required/>
            </div>
            <TextField name="email" className="form-items" fullWidth={true} id="email" label="Email" variant="outlined" required/>
            <div className="flex-row-center-center container-form-double">
                <TextField name="birth_date" className="form-items" type="date" fullWidth={true} id="birth_date" variant="outlined" required/>
                <TextField name="phone_number" className="form-items form-second" fullWidth={true} id="phone_number" label="Phone Number" variant="outlined" required/>
            </div>
            <TextField name="dni" className="form-items" fullWidth={true} id="dni" label="DNI Number" type="number" variant="outlined" required/>

            <div className="flex-row-center-center container-form-double">
                <TextField name="address" className="form-items" fullWidth={true} id="address" label="Address" variant="outlined" required/>
                <TextField name="location" className="form-items form-second" fullWidth={true} id="location" label="Location" variant="outlined" required/>
            </div>
            <TextField name="profession" className="form-items" fullWidth={true} id="profession" label="Profession" variant="outlined" required/>

            <div className="flex-row-center-center container-form-double">
                <TextField name="password" className="form-items" fullWidth={true} id="password" label="Password" type="password" variant="outlined" required/>
                <TextField name="confirm-password" className="form-items form-second" fullWidth={true} id="confirm-password" label="Confirm Password" type="password" variant="outlined" required/>        
            </div>           

            <div className="items-min-width flex-row-flexend-center buttons-create-service">
                    <button className="button-accent">Cancel</button>
                    <button className="button-primary">Create Service</button>
                </div>
        </form>
    </div>
);
}