import React from "react";
import classes from './Footer.module.css';

function Footer({ children, ...props }) {
    return ( 
        <footer className={classes.footer}>
            ©2026 Alazar Studio. All right reserved.
        </footer>
     );
}

export default Footer;