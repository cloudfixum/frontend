import React from 'react';
import { Link } from 'react-router-dom';

import './nav-bar.scss';
import logo from '../../../../assets/images/cloudfixum.svg';

export default (props) => {
    return (
        <div className="container-nav-bar">
            <nav>
                <div className="container-logo">
                    <img src={logo} alt="CloudFixum"/>
                </div>
                <div className="container-items-nav-bar">
                    <Link to="/">
                        <li><span className="material-icons">house</span>Home</li>
                    </Link>
                    <Link to="/new-service">
                        <li><span className="material-icons">add</span>New Service</li>
                    </Link>
                </div>
            </nav>
        </div>
    )
}
