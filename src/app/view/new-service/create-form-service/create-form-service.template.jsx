import React from 'react';

import 'react-bulma-components/dist/react-bulma-components.min.css';

import { serviceCategories } from '../../../shared/utils/constant/service-categories'
import './create-form-service.scss'


export default (props) => {

    const handleOnChange = (e) => {
        e.preventDefault()
        props.setValuesForm({...props.valuesForm, [e.target.name] : e.target.value})
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        props.createService()
        setTimeout( () => {
            window.location = '/'
        }, 1)
    }

    return (
        <div className="container-form-create-service">
            <form className="form-horizontal" onSubmit={handleOnSubmit}>
                <fieldset>

                    <h1>New Service</h1>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input onChange={handleOnChange} id="title" name="title" type="text" placeholder="Insert your service name"v className="input " required minLength="5" maxLength="50" />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Service / Job Category</label>
                        <div className="control">
                            <div className="select">
                                <select onChange={handleOnChange} id="category" name="category" className="option-category" required>
                                    <option value="">Select category</option>
                                    {
                                        Object.keys(serviceCategories).map((key) => {
                                            let value = serviceCategories[key]
                                            return (<option value={key}>{value}</option>)
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Description</label>
                        <div className="control">
                            <textarea onChange={handleOnChange} className="textarea" id="description" name="description" placeholder="Description of the service you provide" required maxLength="256"></textarea>
                            <p className="help">Insert your name, method contact.</p>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Price Min.</label>
                        <div className="control">
                            <input onChange={handleOnChange} id="base_price" name="base_price" type="text" placeholder="$000" className="input" pattern="\d*" required />
                            <p className="help">Insert a base price.</p>
                        </div>
                    </div>

                    <div className="field container-button-submit">
                        <label className="label"></label>
                        <div className="control">
                            <button id="submitForm" name="submitForm" className="button-primary create-service-button">Submit</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    );

}