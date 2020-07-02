import profilereducer from "./profile-reducer";
import dialogsreducer from "./dialogs-reducer";
import sidebarreducer from "./sidebar-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {

    _state : {

        ProfilePage: {
            postData: [
                {id: 1, message: 'Hi,how are u?', likesCount: 13},
                {id: 2, message: 'It is1 my first page', likesCount: 14},
                {id: 3, message: 'It is my 2first page', likesCount: 21},
                {id: 4, message: 'It is my 3first page', likesCount: 34},
                {id: 5, message: 'It is my 4first page', likesCount: 11},
            ],
            newPostText: "it-kamasutra"
        },
        DialogsPage: {
            dialogsData: [
                {id: 1, name: 'Ivan'},
                {id: 2, name: 'Dimon'},
                {id: 3, name: 'John'},
                {id: 4, name: 'Lox'}
            ],
            messagesData: [
                {id: 1, message: 'Pizda'},
                {id: 2, message: '3221212122'},
                {id: 3, message: 'Privet'},
                {id: 4, message: 'Poka'}
            ],
            newMessageText: "it-kamasutra",
        },
        Sidebar: {},

    },
    _callSubscriber(){

    },

    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    addPost(){
        let newPost = {
            id: 5,
            message: this._state.ProfilePage.newPostText,
            likesCount: 0
        };
        this._state.ProfilePage.postData.push(newPost);
        this._state.ProfilePage.newPostText = "";
        this._callSubscriber(this._state);

    },
    updatePostElement(newText){
        this._state.ProfilePage.newPostText = newText;
        this._callSubscriber(this._state);

    },
    dispatch(action){

        this._state.ProfilePage = profilereducer(this._state.ProfilePage,action)
        this._state.DialogsPage = dialogsreducer(this._state.DialogsPage,action)
        this._state.Sidebar = sidebarreducer(this._state.Sidebar,action)

        this._callSubscriber(this._state);

        }


}

export const addNewPostActionCreator = () =>{
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) =>{
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText : text
    }

}
export const addNewMessageActionCreator = () =>{
    return {
        type: ADD_MESSAGE
    }
}
export const updateNewMessageTextActionCreator = (message) =>{
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText : message
    }

}


window.store = store;
export default store;
