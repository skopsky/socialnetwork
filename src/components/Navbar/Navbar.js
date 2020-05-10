import React from "react";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

function Nav() {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="profile" activeClassName={classes.activeLink}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="dialogs" activeClassName={classes.activeLink}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                News
            </div>
            <div className={classes.item}>
                Music
            </div>
            <div className={classes.item}>
                Settings
            </div>
        </nav>
    );
}

export default Nav;
