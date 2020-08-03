import React from 'react';
import './Layout.style.css';
import PropTypes from 'prop-types';
import Header from '../../components/header/Header';

export default function Layout({children, title}) {
    return (
        <div className="Layout">
            <Header title={title} />
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
