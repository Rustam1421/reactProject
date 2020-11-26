const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
        // {id: 1, avatarUrl: 'https://cdn.cliqueinc.com/posts/289681/rosie-huntington-whiteley-favorite-beauty-products-289681-1603214193519-fb.700x0c.jpg', followed: true, fullName: 'someName', status: 'Yo status', location: {city: 'Minsk', country: 'Belarus'}},
        // {id: 2, avatarUrl: 'https://i0.wp.com/chic101blog.com/wp-content/uploads/2019/06/aX39F2.jpg?w=1080&ssl=1', followed: false, fullName: 'someName2', status: 'Yo status2', location: {city: 'Minsk', country: 'Belarus'}},
        // {id: 3, avatarUrl: 'https://pbs.twimg.com/profile_images/1280584931157200897/r_JFhYkq_400x400.png', followed: true, fullName: 'someName3', status: 'Yo status3', location: {city: 'Moscow', country: 'Russia'}},
        // {id: 4, avatarUrl: 'https://i.dailymail.co.uk/1s/2019/08/08/06/17030918-7336005-image-a-19_1565243709022.jpg', followed: false, fullName: 'someName4', status: 'Yo status4', location: {city: 'Astana', country: 'KZ'}},
    ],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user, followed: true
                        }
                    }
                    return user;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user, followed: false
                        }
                    }
                    return user;
                })
            }

        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }

        default:
            return state;
    }

}

export const followAc = (userId) => {
    return {
        type: FOLLOW, userId
    }
}

export const unfollowAc = (userId) => {
    return {
        type: UNFOLLOW, userId
    }
}

export const setUsersAc = (users) => {
    return {
        type: SET_USERS, users
    }
}

export default usersReducer;
