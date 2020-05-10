import React from "react";
import classes from './Header.module.css';

const IMG_URL = 'https://cdn.shopify.com/shopifycloud/hatchful-web/assets/6fcc76cfd1c59f44d43a485167fb3139.png';

function Header() {
    return (
        <header className={classes.header}>
            <img src={IMG_URL}/>
        </header>
    );
}

export default Header;
