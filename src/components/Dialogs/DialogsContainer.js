import React from "react";
import {addNewMessageActionCreator, updateNewMessageTextActionCreator} from "../../oldStore/store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addNewMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps=(state) =>{
   return{
       dialogPage : state.DialogsPage,
   };
};

let mapDispatchToProps=(dispatch) =>{
    return{
        addNewMessage: ()=>{
            dispatch(addNewMessageAC());
        },
        updateNewMessageText: (messageText)=>{
            dispatch(updateNewMessageAC(messageText));

        }
    };
}

export default compose(connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect)(Dialogs)

/*let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;*/
