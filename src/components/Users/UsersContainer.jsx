import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {followAc, setUsersAc, unfollowAc} from "../../redux/users-reducer";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAc(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAc(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAc(users))
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;