import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./Dialogitem/Dialogitem";
import Message from "./Message/Message";
import {addNewMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/store";

function Dialogs(props) {
    debugger
    let dialogsElements = props.dialogPage.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>)
    let messageElements = props.dialogPage.messagesData.map(message => <Message message={message.message} key={message.id} id={message.id}/>)

    let newMessageBody = React.createRef()

    let addNewMessage=()=> {
        props.addNewMessage()

    }

    let onMessageBodyChange=()=> {
        let messageText = newMessageBody.current.value
        props.updateNewMessageText(messageText)
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
