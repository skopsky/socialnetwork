import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import Profileinfo from "./Profileinfo/Profileinfo";

function Profile(props) {
    return (
        <div>
            <Profileinfo/>
            <MyPosts postData={props.profilePage.postData}
                     addPost={props.addPost}
                     newPostText={props.profilePage.newPostText}
                     updatePostElement={props.updatePostElement}
            />
        </div>
    );
}

export default Profile;
