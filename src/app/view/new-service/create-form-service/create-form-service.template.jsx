import React from 'react';

import 'react-bulma-components/dist/react-bulma-components.min.css';

import { serviceCategories } from '../../../shared/utils/constant/service-categories'
import './create-form-service.scss'

export default (props) => {
    return (
        <div className="container-form-create-service">
            <form className="form-horizontal" enctype="multipart/form-data">
                <fieldset>

                    <h1>New Service</h1>
                    <div className="field">
                        <label className="label" for="serviceProviderName">Name</label>
                        <div className="control">
                            <input id="serviceProviderName" name="serviceProviderName" type="text" placeholder="Insert your service name"v className="input " required minLength="5" maxLength="50" />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label" for="service">Service / Job Category</label>
                        <div className="control">
                            <div className="select">
                                <select id="service" name="service" className="option-category" required>
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
                        <label className="label" for="description">Description</label>
                        <div className="control">
                            <textarea className="textarea" id="description" name="description" placeholder="Description of the service you provide" required maxLength="256"></textarea>
                            <p className="help">Ingrese su nombre, metodo de contacto</p>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label" for="precioMinimo">Precio Minimo</label>
                        <div className="control">
                            <input id="precioMinimo" name="precioMinimo" type="text" placeholder="$000" className="input" pattern="\d*" required />
                            <p className="help">Ingrese un precio minimo por sus servicios</p>
                        </div>
                    </div>

                    <div className="field container-button-submit">
                        <label className="label" for="submit"></label>
                        <div className="control">
                            <button id="submit" name="submit" className="button-primary create-service-button">Submit</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    );

}