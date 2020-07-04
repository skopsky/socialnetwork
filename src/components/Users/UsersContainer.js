import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";

const mapToProps=(state)=>{
    return {
        users: state.UsersPage.users
    };
}
const mapDispatchToProps=(dispatch)=>{
    return{
        follow: (userId)=>{
            dispatch(followAC(userId));
        },
        unfollow: (userId)=>{
            dispatch(unfollowAC(userId));

        },
        setUsers: (users)=>{
            dispatch(setUsersAC(users));

        }

    };
}

const UsersContainer =connect(mapToProps,mapDispatchToProps)(Users)

export default UsersContainer;
