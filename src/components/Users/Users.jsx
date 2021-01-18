import React from 'react';
import style from "./Users.module.css";
import userPng from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {/*className={style.mainContainer}*/}
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && style.selectedPage}
                                 onClick={() => props.onPageChanged(p)}
                    >{p}</span>
                })}
            </div>
            {
                props.users.map(user =>
                    <div key={user.id}>
                        <div>
                            <NavLink to={`/profile/${user.id}`}>
                                <img src={user.photos.small != null ? user.photos.small : userPng} alt=""/>
                            </NavLink>
                        </div>
                        <div>
                            {
                                user.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                        props.unfollow(user.id)
                                    }
                                    }>Unfollow</button>
                                    : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                        props.follow(user.id)
                                    }
                                    }>Follow</button>
                            }
                        </div>
                        <div>
                            {user.name}
                        </div>
                        <div>
                            {user.status}
                        </div>
                        <div>
                            {/*{user.location.country}*/}
                        </div>
                        <div>
                            {/*{user.location.city}*/}
                        </div>

                    </div>
                )
            }
        </div>
    )

}

export default Users;