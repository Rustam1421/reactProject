import React from 'react';
import style from './Users.module.css'

const Users = ({users, follow, unfollow, setUsers}) => {

    if (users.length === 0) {
        setUsers(
            [
                {
                    id: 1,
                    followed: true,
                    avatarUrl: 'https://cdn.cliqueinc.com/posts/289681/rosie-huntington-whiteley-favorite-beauty-products-289681-1603214193519-fb.700x0c.jpg',
                    fullName: 'someName',
                    status: 'Yo status',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    followed: false,
                    avatarUrl: 'https://i0.wp.com/chic101blog.com/wp-content/uploads/2019/06/aX39F2.jpg?w=1080&ssl=1',
                    fullName: 'someName2',
                    status: 'Yo status2',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 3,
                    followed: true,
                    fullName: 'someName3',
                    avatarUrl: 'https://pbs.twimg.com/profile_images/1280584931157200897/r_JFhYkq_400x400.png',
                    status: 'Yo status3',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 4,
                    followed: false,
                    fullName: 'someName4',
                    avatarUrl: 'https://i.dailymail.co.uk/1s/2019/08/08/06/17030918-7336005-image-a-19_1565243709022.jpg',
                    status: 'Yo status4',
                    location: {city: 'Astana', country: 'KZ'}
                },
            ]
        )
    }

    return (
        <div className={style.mainContainer}>
            {
                users.map(user =>
                    <div key={user.id}>
                        <div>
                            <img src={user.avatarUrl} alt=""/>
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
                            {user.location.country}
                        </div>
                        <div>
                            {user.location.city}
                        </div>

                    </div>
                )
            }
        </div>
    )
}

export default Users;