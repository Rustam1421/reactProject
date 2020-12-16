import React from 'react';
import {connect} from "react-redux";
import {
    followAc,
    setCurrentPageAc,
    setToggleIsFetchingAc,
    setUsersAc,
    setUsersTotalCountAc,
    unfollowAc
} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setToggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setToggleIsFetching(false);
                this.props.setUsers(response.data.items)
                this.props.setUsersTotalCount(response.data.totalCount >= 25 ? 50 : response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setToggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setToggleIsFetching(false);
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader/> : ''}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    onPageChanged={this.onPageChanged}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                />
            </>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAc(currentPage))
        },
        setUsersTotalCount: (totalCount) => {
            dispatch(setUsersTotalCountAc(totalCount))
        },
        setToggleIsFetching: (isFetching) => {
            dispatch(setToggleIsFetchingAc(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);