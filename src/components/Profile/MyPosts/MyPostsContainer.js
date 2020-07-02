import React from "react";
import {addNewPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/store";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


/*
function MyPostsContainer(props) {
    debugger
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addNewPostActionCreator())
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }
    return (<MyPosts updateNewPostText = {onPostChange} addPost={addPost}
                     postData={state.ProfilePage.postData}
            newPostText={state.ProfilePage.newPostText}/>);
}
*/

let mapStateToProps = (state)=>{
    return{
        postData: state.ProfilePage.postData,
        newPostText : state.ProfilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch)=>{
    return{
        updateNewPostText: (text)=>{
            let action = updateNewPostTextActionCreator(text)
            dispatch(action)
         },
        addPost: ()=>{
            dispatch(addNewPostActionCreator())
        }
    }
};


const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
