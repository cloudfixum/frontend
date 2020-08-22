import React from 'react';

import './nav-bar.scss';
import { Link } from 'react-router-dom';

const handleStateMenu = () => {
    if (window.screen.width >= 600) {
        return;
    }
    let element = document.querySelector('.container-items-nav-bar');
    console.log(element.style.display)

    if (element.style.display === 'none' || !element.style.display) {
        element.style.display = 'flex';
    console.log(element.style.display)

    } else {
        element.style.display = 'none';
    }
}

export default (props) => {
    return (
        <div className="container-nav-bar">
            <nav>
                <div className="container-logo flex-column-center-center">
                    <p>CloudFixum</p>
                </div>
                <div onClick={handleStateMenu} className="button-menu flex-column-center-center">
                    <span className="material-icons">dehaze</span>
                </div>
                <div className="container-items-nav-bar">
                    <Link onClick={handleStateMenu} to="/">
                        <li><span className="material-icons">house</span>Home</li>
                    </Link>
                    <div className="divider-items"></div>
                    <Link onClick={handleStateMenu} to="/new-service">
                        <li><span className="material-icons">add</span>New Service</li>
                    </Link>
                </div>
            </nav>
        </div>
    )
}
