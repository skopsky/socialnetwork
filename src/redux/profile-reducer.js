import {profileApi, usersApi} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE_DATA = 'SET_PROFILE_DATA';
const SET_STATUS = 'SET_STATUS';


let initialState =  {
    postData: [
        {id: 1, message: 'Hi,how are u?', likesCount: 13},
        {id: 2, message: 'It is1 my first page', likesCount: 14},
        {id: 3, message: 'It is my 2first page', likesCount: 21},
        {id: 4, message: 'It is my 3first page', likesCount: 34},
        {id: 5, message: 'It is my 4first page', likesCount: 11},
    ],
    newPostText: "it-kamasutra",
    profile: null,
    status: null,
}

const profileReducer =(state = initialState, action)=> {
    switch (action.type) {
        case ADD_POST : {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return{...state,
                newPostText:"",
                postData:[...state.postData, newPost]};
        }
        case UPDATE_NEW_POST_TEXT : {
            return  {...state,
                newPostText : action.text};
        }
        case SET_PROFILE_DATA : {
            return  {...state,
                profile : action.usersData};
        }
        case SET_STATUS : {
            return  {...state,
                status : action.status};
        }
        default :
            return state;

    }
}
export const setProfileDataAC = (usersData) => ({type: SET_PROFILE_DATA, usersData});
export const updateNewPostTextAC = (text) => ({type: UPDATE_NEW_POST_TEXT, text});
export const setStatusAC = (status) => ({type: SET_STATUS, status});
export const addNewPostTextAC = () => ({type: ADD_POST, });

export const getProfileThunkCreator = (userId) =>{
    return (dispatch) =>{
        usersApi.getProfile(userId)
            .then(response => {
                dispatch(setProfileDataAC(response.data))
            });
    }
}
export const getStatus = (userId) =>{
    return (dispatch) =>{
        profileApi.getStatus(userId)
            .then(response => {
                debugger;
                dispatch(setStatusAC(response.data))
            });
    }
}
export const updateStatus = (status) =>{
    return (dispatch) =>{
        profileApi.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0){
                debugger;
                dispatch(setStatusAC(status))
                }
            });
    }
}

export default profileReducer;