import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {followAc, unfollowAc} from "../../redux/users-reducer";


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
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;