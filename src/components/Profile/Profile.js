import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import Profileinfo from "./Profileinfo/Profileinfo";

function Profile(props) {
    return (
        <div>
            <Profileinfo/>
            <MyPosts postData={props.profilePage.postData}
                     dispatch={props.dispatch}
                     newPostText={props.profilePage.newPostText}
            />
        </div>
    );
}

export default Profile;
