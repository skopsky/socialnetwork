import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Profileinfo from "./Profileinfo/Profileinfo";



function Profile(props) {
    return (
        <div >
            <Profileinfo />
            <MyPosts postData={props.state.postData} />
            </div>

    );
}

export default Profile;
