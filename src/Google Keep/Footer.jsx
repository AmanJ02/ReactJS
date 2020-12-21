import React from 'react';


const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <>
            <footer>
                <h4> Copyright © Reapers Keep {year}</h4>
                <p> Version 1.0.0 </p>
            </footer>

        </>
    );
};


export default Footer;