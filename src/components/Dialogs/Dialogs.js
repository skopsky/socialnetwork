import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./Dialogitem/Dialogitem";
import Message from "./Message/Message";
import {addNewMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/state";

function Dialogs(props) {
    let dialogsElements = props.dialogPage.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messageElements = props.dialogPage.messagesData.map(message => <Message message={message.message} id={message.id}/>)

    let newMessageBody = React.createRef()

    let addNewMessage=()=> {
        props.dispatch(addNewMessageActionCreator())

    }

    let onMessageBodyChange=()=> {
        let messageText = newMessageBody.current.value
        props.dispatch(updateNewMessageTextActionCreator(messageText))
        console.log(messageText)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
            </div>
            <div>
                <div><textarea onChange={onMessageBodyChange} ref={newMessageBody} value={props.dialogPage.newMessageText}></textarea></div>
                <div><button onClick={addNewMessage}>Send message</button></div>
            </div>
        </div>
    );
}

export default Dialogs;
