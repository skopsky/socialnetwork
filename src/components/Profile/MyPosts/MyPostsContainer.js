import React from "react";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addNewPostTextAC, updateNewPostTextAC} from "../../../redux/profile-reducer";


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
            let action = updateNewPostTextAC(text)
            dispatch(action)
         },
        addPost: ()=>{
            dispatch( addNewPostTextAC())
        }
    }
};


const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
