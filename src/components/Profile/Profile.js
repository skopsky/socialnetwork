import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import Profileinfo from "./Profileinfo/Profileinfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile(props) {
    debugger
    return (
        <div>
            <Profileinfo/>
            <MyPostsContainer
                store={props.store}

            />
        </div>
    );
}

export default Profile;
