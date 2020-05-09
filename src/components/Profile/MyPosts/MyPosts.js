import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";






function MyPosts(props) {

    let postElements = props.postData.map(post => <Post message={post.message} likecount={post.likesCount}/>)

    return (
        <div>
            <div className={classes.postsBlock}><h3>my posts</h3>
                <div>
                    <div><textarea name="" id="" cols="30" rows="10"></textarea></div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
                <div className={classes.posts}>

                    {postElements}

                </div>
            </div>

        </div>
    );
}

export default MyPosts;