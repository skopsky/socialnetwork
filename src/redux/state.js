
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
            ]
        },
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
        if (action.type === 'ADD-POST' ){
                let newPost = {
                    id: 5,
                    message: this._state.ProfilePage.newPostText,
                    likesCount: 0
                };
                this._state.ProfilePage.postData.push(newPost);
                this._state.ProfilePage.newPostText = "";
                this._callSubscriber(this._state);
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT'){
                this._state.ProfilePage.newPostText = action.newText;
                this._callSubscriber(this._state);

        }
    }

}


window.store = store;
export default store;
