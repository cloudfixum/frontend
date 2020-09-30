import React from 'react';

import './container-service-provider-summary.scss';
import TextField from '@material-ui/core/TextField';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

export default function ContainerServiceProviderSummary() {
    return (
        <div className="container-form-user-provider-summary">
            <h1>User Provider Summary</h1>
            <div className="flex-row-center-center">
                <div className="container-form-double">
                    <div className="container-img-user-provider" />
                </div>
                <div className="flex-column-center-start">
                    <div className="container-form-double">
                        <TextField
                            id="name"
                            label="Name"
                            defaultValue="Juan"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            id="last_name"
                            label="Last Name"
                            defaultValue="Perez"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </div>
                    <TextField
                        id="ubication"
                        label="Ubication"
                        defaultValue="San Rafael"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        id="price"
                        label="Price"
                        defaultValue="200"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <div className="tittle-rating">
                        <Box
                            component="fieldset"
                            mb={3}
                            borderColor="transparent">
                            <h6>Calification</h6>
                            <Rating name="read-only" value={4} readOnly />
                        </Box>
                    </div>
                </div>
            </div>
            <div className="container-data-descriptions">
                <h5>Description</h5>
                <h6>
                    Qui qui ea laborum commodo consequat occaecat culpa Lorem
                    sunt incididunt nisi do. Consequat proident sint id anim
                    excepteur sunt et. Minim id commodo eiusmod laboris amet
                    anim adipisicing nisi occaecat voluptate quis id excepteur
                    culpa. Ullamco anim ut nisi pariatur do minim. Dolor eu ea
                    qui cupidatat excepteur duis id elit ad do aliquip.
                </h6>
            </div>
        </div>
    );
}
