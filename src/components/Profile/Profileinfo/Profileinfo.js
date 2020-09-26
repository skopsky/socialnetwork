import React from "react";
import classes from './Profileinfo.module.css';
import Preloader from "../../Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

//TODO: Move img url to constant

function Profileinfo(props) {
    if (!props.profile){
        return  <Preloader/>
    }

    return (
        <div>
            <div className={classes.test}>

              {/*  <img
                    src="https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg"
                    alt=""/>*/}
            </div>

            <div className={classes.descriptionBlock}>
               <div>
                   <img src={props.profile.photos.large} alt=""/>
               </div>

                <div>{props.profile.lookingForAJobDescription}</div>
                <ProfileStatus status={props.status}/>
            </div>
        </div>
    );
}

export default Profileinfo;
