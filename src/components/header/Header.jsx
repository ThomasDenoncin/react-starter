import React from 'react';
import PropTypes from 'prop-types';

export default function Header({title}) {
    return(
        <header className="Header" title={title}>
            <h1>
                {title}
            </h1>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string,
}