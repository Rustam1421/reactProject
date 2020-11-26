const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    users: [
        {id: 1, avatarUrl: 'https://static.wikia.nocookie.net/discord-wikia/images/5/5e/Default.png/revision/latest/scale-to-width-down/340?cb=20191215094354&path-prefix=ru', followed: true, fullName: 'someName', status: 'Yo status', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2, avatarUrl: 'https://static.wikia.nocookie.net/discord-wikia/images/5/5e/Default.png/revision/latest/scale-to-width-down/340?cb=20191215094354&path-prefix=ru', followed: false, fullName: 'someName2', status: 'Yo status2', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 3, avatarUrl: 'https://static.wikia.nocookie.net/discord-wikia/images/5/5e/Default.png/revision/latest/scale-to-width-down/340?cb=20191215094354&path-prefix=ru', followed: true, fullName: 'someName3', status: 'Yo status3', location: {city: 'Moscow', country: 'Russia'}},
        {id: 4, avatarUrl: 'https://static.wikia.nocookie.net/discord-wikia/images/5/5e/Default.png/revision/latest/scale-to-width-down/340?cb=20191215094354&path-prefix=ru', followed: false, fullName: 'someName4', status: 'Yo status4', location: {city: 'Astana', country: 'KZ'}},
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

export default usersReducer;
