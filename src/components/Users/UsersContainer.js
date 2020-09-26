import React from "react";
import {connect} from "react-redux";
import {
    followAC, followThunkCreator, getUsersThunkCreator,
    isFetchingAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC, toggleFollowingProgressAC,
    unfollowAC, unfollowThunkCreator,

} from "../../redux/users-reducer";
import Users from "./Users";
import preloader    from  '../../assets/preloader.svg'

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber,this.props.pageSize);
        this.props.setCurrentPage(pageNumber)
        console.log(pageNumber)
        ;

    }

    render() {
        return <>
            {this.props.isFetching ? <img src={preloader}/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
                   followThunkCreator={this.props.followThunkCreator}
                   unfollowThunkCreator={this.props.unfollowThunkCreator}
                      />
                      </>

    }
}

const mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching,
        followingInProgress: state.UsersPage.followingInProgress,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        toggleFollowingProgress: (followingInProgress) => {
            dispatch(toggleFollowingProgressAC(followingInProgress))
        },
        getUsers: (currentPage, pageSize) => {
            dispatch(getUsersThunkCreator(currentPage, pageSize))
        },
        unfollowThunkCreator: (userId) => {
            dispatch(unfollowThunkCreator(userId))
        },
        followThunkCreator: (userId) => {
            dispatch(followThunkCreator(userId));
        }


    };
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
