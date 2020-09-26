import React from "react";
import {connect} from "react-redux";
import * as axios from "axios";
import {getProfileThunkCreator, getStatus, setProfileDataAC, updateStatus} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {Redirect, withRouter} from "react-router-dom";
import {usersApi} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {


    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 9030;
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);

    }

    render() {


        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                         status ={this.props.status}
                         updateStatus = {this.props.updateStatus}
                />

            </div>
        );
    }

}


let mapStateToProps = (state) => {
    return {
        profile: state.ProfilePage.profile,
        status: state.ProfilePage.status
    }

}

let mapDispatchToProps = (dispatch) => {
    return {
        getProfile: (userId) => {
            dispatch(getProfileThunkCreator(userId));
        },
        getStatus: (userId) => {
            dispatch(getStatus(userId));
        },
        updateStatus: (status) => {
            dispatch(updateStatus(status));
        },
    }
}

/*let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent);*/

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    /*withAuthRedirect*/)(ProfileContainer)