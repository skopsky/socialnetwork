import React from "react";
import {addNewMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps=(state) =>{
   return{
       dialogPage : state.DialogsPage
   };
};

let mapDispatchToProps=(dispatch) =>{
    return{
        addNewMessage: ()=>{
            dispatch(addNewMessageActionCreator());
        },
        updateNewMessageText: (messageText)=>{
            dispatch(updateNewMessageTextActionCreator(messageText));

        }
    };
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;
