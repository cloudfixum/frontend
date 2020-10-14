import React, {useState} from 'react';
import { FormControl } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import LayoutCardServices from "../layout-card-services/layout-card-services";
//import axios from "axios";

import './search-filter.scss';

export default function SearchFilter() {
    const value = {
        sub_category: '',
    }
    const [search, setSearch] = useState("");
    const [filteredServices, setFilteredServices] = useState([]);

    const handleChange = (e) => {
        setSearch(e.target.value);
        /*setSearch({
            ...search,
            [e.target.name]: e.target.value,
        }); */
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        //search.toUpperCase();
        //search.toLowerCase();
        setSearch(search);
        LayoutCardServices(search); /* ¿se puede hacer esto? - no funciona pero ¿puede servir?*/
    }

    return(
        <div className="filter-container flex-row-center-center">
            <ValidatorForm onSubmit={handleSubmit}>
                <FormControl>
                    <TextValidator
                        id="searchFilter"
                        name="searchFilter"
                        type="text"
                        placeholder="Look up a service!"
                        variant="outlined"
                        onChange={handleChange}
                    />
                </FormControl>
                <button className="button-primary">Filter</button>
            </ValidatorForm>
        </div>
    );
}

