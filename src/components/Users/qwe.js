import React from 'react';
import style from './Users.module.css'
import * as axios from 'axios'
import userPng from '../../assets/images/user.png'

const Qwe = ({users, follow, unfollow, setUsers}) => {

    let getUsers = () => {
        if (users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    setUsers(response.data.items)
                })
        }
    }

    return (
        <div className={style.mainContainer}>
            <button onClick={getUsers}>get users</button>
            {
                users.map(user =>
                    <div key={user.id}>
                        <div>
                            <img src={user.avatarUrl != null ? user.avatarUrl : userPng} alt=""/>
                        </div>
                        <div>
                            {
                                user.followed
                                    ? <button onClick={() => unfollow(user.id)}>Unfollow</button>
                                    : <button onClick={() => follow(user.id)}>Follow</button>
                            }
                        </div>
                        <div>
                            {user.fullName}
                        </div>
                        <div>
                            {user.status}
                        </div>
                        <div>
                            {"user.location.country"}
                        </div>
                        <div>
                            {"user.location.city"}
                        </div>

                    </div>
                )
            }
        </div>
    )
}

export default Qwe;