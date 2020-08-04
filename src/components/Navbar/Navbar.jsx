import React from 'react';
import {Link} from 'react-router-dom';
import {routes} from '../router/Routes'
import './Navbar.css'
export default function Navbar() {

    return(
        <nav className="navbar">
            {
            routes.map(
                route =>
                <Link className="navbar__Link" to={route.endpoint} key={route.title}>{route.title}</Link>        
                )
            }
        </nav>
    );
}