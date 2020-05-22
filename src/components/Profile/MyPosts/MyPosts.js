import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {addNewPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";



function MyPosts(props) {
    const postElements = props.postData.map(post => <Post message={post.message} likecount={post.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addNewPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.dispatch(updateNewPostTextActionCreator(text))
    }
    return (
        <div>
            <div className={classes.postsBlock}><h3>my posts</h3>
                <div>
                    <div><textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/></div>
                    <div>
                        <button onClick={addPost}>Add post</button>
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
