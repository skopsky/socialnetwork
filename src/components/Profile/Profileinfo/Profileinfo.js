import React from "react";
import classes from './Profileinfo.module.css';


function Profileinfo() {
    return (
        <div>
            <div className={classes.test}>
                <img
                    src="https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg"
                    alt=""/>
            </div>

            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>

    );
}

export default Profileinfo;
