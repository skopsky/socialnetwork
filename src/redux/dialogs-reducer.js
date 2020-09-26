const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Dimon'},
        {id: 3, name: 'John'},
        {id: 4, name: 'Sergey'}
    ],
    messagesData: [
        {id: 1, message: 'How are you?'},
        {id: 2, message: '3221212122'},
        {id: 3, message: 'Privet'},
        {id: 4, message: 'Poka'}
    ],
    newMessageText: "Enter the new message",
}

const dialogsreducer = (state = initialState, action) => {

    let stateCopy
    let newMessage = {
        id: 3,
        message: state.newMessageText,
    };
    switch (action.type) {
        case ADD_MESSAGE:
            stateCopy = {
                ...state,
                newMessageText: "",
                messagesData: [...state.messagesData, newMessage]
            };
            return stateCopy;

        case  UPDATE_NEW_MESSAGE_TEXT:
            stateCopy = {
                ...state,
                newMessageText: action.newMessageText
            };
            return stateCopy;
        default :
            return state;
    }
}

export const addNewMessageAC = () => ({type: ADD_MESSAGE,});
export const updateNewMessageAC = (newMessageText) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText});


export default dialogsreducer;