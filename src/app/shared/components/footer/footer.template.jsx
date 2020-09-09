import React from 'react';

import './footer.scss';
import { Grid } from '@material-ui/core';

export default (props) => {
    return (
        <div className="container-footer">
            <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={4} className="footer-about-us">
                    <h1>About us?</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Atque dolores deserunt nulla, beatae esse nihil
                        impedit quis nesciunt ducimus odio sequi sed fuga totam
                        voluptatum aspernatur dolor delectus numquam nam.
                    </p>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <h1>Find us in:</h1>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center">
                        <a href="https://www.instagram.com/?hl=es-la">
                            <span className="icon-instagram icon-footer" />
                            Instagram
                        </a>
                    </Grid>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center">
                        <a href="https://es-la.facebook.com">
                            <span className="icon-facebook2 icon-footer" />
                            Facebook
                        </a>
                    </Grid>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center">
                        <a href="https://ar.linkedin.com/">
                            <span className="icon-linkedin icon-footer" />
                            LinkedIn
                        </a>
                    </Grid>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center">
                        <a href="https://twitter.com/?lang=es">
                            <span className="icon-twitter icon-footer" />
                            Twitter
                        </a>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <h1>Contact</h1>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center">
                        <p>
                            <span className="material-icons">call</span>
                            0800-5658-7896
                        </p>
                    </Grid>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center">
                        <p>
                            <span className="material-icons">
                                alternate_email
                            </span>
                            info@cloudfixum.com
                        </p>
                    </Grid>
                    <Grid
                        container
                        className="footer-location"
                        direction="column"
                        justify="center"
                        alignItems="center">
                        <p>
                            <span className="material-icons">location_on</span>
                            Av Int Crovara 249-Buenos Aires
                        </p>
                    </Grid>
                </Grid>
            </Grid>
            <div className="footer-copyright">
                <h6>
                    Copyright © 2013-2019 Avents Company S.L. All rights
                    reserved.
                </h6>
            </div>
        </div>
    );
};
