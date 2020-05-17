import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import Profileinfo from "./Profileinfo/Profileinfo";

function Profile(props) {
    return (
        <div>
            <Profileinfo/>
            <MyPosts postData={props.state.postData} addPost={props.addPost}/>
        </div>
    );
}

export default Profile;
