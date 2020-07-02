const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState =  {
    postData: [
        {id: 1, message: 'Hi,how are u?', likesCount: 13},
        {id: 2, message: 'It is1 my first page', likesCount: 14},
        {id: 3, message: 'It is my 2first page', likesCount: 21},
        {id: 4, message: 'It is my 3first page', likesCount: 34},
        {id: 5, message: 'It is my 4first page', likesCount: 11},
    ],
    newPostText: "it-kamasutra"
}

const profilereducer =(state = initialState,action)=> {

    let stateCopy
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
                newPostText : action.newText};
        }
        default :
            return state;

    }
}
export default profilereducer;