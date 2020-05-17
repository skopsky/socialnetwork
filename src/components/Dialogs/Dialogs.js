import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./Dialogitem/Dialogitem";
import Message from "./Message/Message";

function Dialogs(props) {
    let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messageElements = props.state.messagesData.map(message => <Message message={message.message} id={message.id}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
            </div>
        </div>
    );
}

export default Dialogs;
