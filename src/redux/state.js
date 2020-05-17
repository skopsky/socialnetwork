const state = {

    ProfilePage  : {
        postData: [
            {id: 1, message: 'Hi,how are u?', likesCount: 13},
            {id: 2, message: 'It is1 my first page', likesCount: 14},
            {id: 3, message: 'It is my 2first page', likesCount: 21},
            {id: 4, message: 'It is my 3first page', likesCount: 34},
            {id: 5, message: 'It is my 4first page', likesCount: 11},
        ]
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
}

export let addPost = (postMessage) =>{
    debugger;
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.ProfilePage.postData.push(newPost);
}

export default state;
