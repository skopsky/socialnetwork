import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";



function MyPosts(props) {
    const postElements = props.postData.map(post => <Post message={post.message} likecount={post.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let updateNewPostText = () => {
        let text = newPostElement.current.value;
       props.updateNewPostText(text);
    }
    return (
        <div>
            <div className={classes.postsBlock}><h3>my posts</h3>
                <div>
                    <div><textarea onChange={updateNewPostText} ref={newPostElement} value={props.newPostText}/></div>
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
