import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const IMG_URL = 'https://cdn.shopify.com/shopifycloud/hatchful-web/assets/6fcc76cfd1c59f44d43a485167fb3139.png';

function Header(props) {
    return (
        <header className={classes.header}>
            <img src={IMG_URL}/>
            <div className={classes.loginBlock}>
                {props.isAuth?  props.login
                    :<NavLink to={'/login'}>Login</NavLink>
                }

            </div>
        </header>
    );
}

export default Header;
