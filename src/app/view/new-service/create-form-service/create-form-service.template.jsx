import React from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

import { ServiceCategories } from '../../../shared/utils/constant/service-categories'

import './create-form-service.scss'
import { FormControl, TextareaAutosize, MenuItem } from '@material-ui/core';


export default (props) => {
    const serviceCategories = new ServiceCategories().getCategoriesOrdered();
    const handleChange = (e) => {
        e.preventDefault();
        props.setValuesForm({...props.valuesForm, [e.target.name] : e.target.value});
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        props.createService();
    }

    return (
        <div className="container-form-create-service">
            <h1>Create new service</h1>
            <form className="flex-column-center-center" onSubmit={handleOnSubmit}>
                <TextField className="form-items" fullWidth={true} id="title" label="Service name" variant="outlined" required/>
                <FormControl className="items-min-width form-items" variant="outlined">
                    <InputLabel id="category">Select category *</InputLabel>
                    <Select
                    onChange={handleChange}
                    labelId="category"
                    label="Select category"
                    required>
                        <MenuItem value="">None</MenuItem>
                        {
                            Object.keys(serviceCategories).map((key, i) => {
                                let value = serviceCategories[key]
                                return (<MenuItem key={i} value={key}>{value}</MenuItem>)
                            })
                        }
                    </Select>
                </FormControl>
                <TextField
                    id="description"
                    label="Description"
                    fullWidth={true}
                    multiline
                    rows={10}
                    className="form-items"
                    variant="outlined"
                    required/>
                <TextField className="form-items" fullWidth={true} id="base_price" label="Minimum price" variant="outlined" required/>
                <div className="items-min-width flex-row-flexend-center buttons-create-service">
                    <button className="button-accent">Cancelar</button>
                    <button className="button-primary">Create Service</button>
                </div>
            </form>
        </div>
    );

}