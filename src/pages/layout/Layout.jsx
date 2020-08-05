import React from 'react';
import './Layout.style.css';
import PropTypes from 'prop-types';
import Header from '../../components/header/Header';
import Navbar from '../../components/Navbar/Navbar';

export default function Layout({children, title}) {
    return (
        <div className="Layout">
            <div className="Layout__navbar">
                <Navbar />
            </div>
            <div className="Layout__header">
                <Header title={title} />
            </div>
            <main className="Layout__main">
                {children}
            </main>
        </div>

    );
}



/**
 * @description children is a react component
 */
Layout.propTypes = {
    children: PropTypes.object,
    title: PropTypes.string,
}
