import React from 'react';
import style from './Users.module.css'

const Users = ({users}) => {

    // users: [
    //     {id: 1, followed: true, fullName: 'someName', status: 'Yo status', location: {city: 'Minsk', country: 'Belarus'}},
    //     {id: 2, followed: false, fullName: 'someName2', status: 'Yo status2', location: {city: 'Minsk', country: 'Belarus'}},
    //     {id: 3, followed: true, fullName: 'someName3', status: 'Yo status3', location: {city: 'Moscow', country: 'Russia'}},
    //     {id: 4, followed: false, fullName: 'someName4', status: 'Yo status4', location: {city: 'Astana', country: 'KZ'}},
    // ],
    return (
        <div>
            {
                users.map(user =>
                    <div className={style.mainContainer}>
                        <div>
                            <img src={user.avatarUrl} alt="ads"/>
                        </div>
                        <div>
                            {user.fullName}
                        </div>

                        <div>
                            {user.followed}
                        </div>

                        <div>
                            {user.status}
                        </div>

                        <div>
                            {user.location.city}
                        </div>

                        <div>
                            {user.location.country}
                        </div>
                </div>)
            }
        </div>
    )
}

export default Users;