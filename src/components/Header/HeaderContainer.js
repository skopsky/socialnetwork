import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import { getAuthDataThunkCreator, } from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authMe()
    }

    render() {
        return (
            <Header {...this.props}/>
        )

    }

}


let mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth,
        login: state.auth.login,

    }

}

let mapDispatchToProps = (dispatch) => {
    return {

        authMe: () => {
            dispatch(getAuthDataThunkCreator());
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
