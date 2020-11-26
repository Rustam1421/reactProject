
let initialState = {
    friends: [
        {id: 1, name: 'Rosie', src: 'https://i.pinimg.com/236x/04/11/7e/04117ec9d9f93d895076b8d520983798.jpg'},
        {id: 2, name: 'Freya', src: 'https://i.pinimg.com/600x315/01/78/5d/01785d22523659c4ab626d9508492e71.jpg'},
        {id: 3, name: 'Aurelia', src: 'https://i.pinimg.com/236x/e3/03/db/e303dbbba3613ca79739f22dc2b5afaa.jpg'}
    ]
}

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;