import dialogReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
     _state : {
        profilePage: {
            posts: [
                {
                    id: 1,
                    message: 'random msg',
                    src: "data:image/jpeg;base64,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",
                    likeCount: 12
                },
                {
                    id: 2,
                    message: 'some msg',
                    src: "https://i.pinimg.com/originals/e6/b9/f6/e6b9f6b6a16e58c3d970225e5abbe5f6.jpg",
                    likeCount: 5
                }
            ],
            newPostText: 'asd', src: ''
        }, dialogsPage: {
            messages: [
                {id: 1, message: 'Some message'},
                {id: 2, message: 'whasup'},
                {id: 3, message: 'whasup 2'},
                {id: 4, message: 'Rosie <3'},
                {id: 5, message: 'Rosie <3'},
            ],
             newMessageText : '',
             dialogs: [
                {id: 1, name: 'Rosie', src: 'https://i.pinimg.com/236x/04/11/7e/04117ec9d9f93d895076b8d520983798.jpg'},
                {id: 2, name: 'freya', src: 'https://i.pinimg.com/600x315/01/78/5d/01785d22523659c4ab626d9508492e71.jpg'},
                {id: 3, name: 'Sveta', src: 'https://i.pinimg.com/236x/e3/03/db/e303dbbba3613ca79739f22dc2b5afaa.jpg'},
            ]
        }, sideBar: {
            friends: [
                {id: 1, name: 'Rosie', src: 'https://i.pinimg.com/236x/04/11/7e/04117ec9d9f93d895076b8d520983798.jpg'},
                {id: 2, name: 'Freya', src: 'https://i.pinimg.com/600x315/01/78/5d/01785d22523659c4ab626d9508492e71.jpg'},
                {id: 3, name: 'Aurelia', src: 'https://i.pinimg.com/236x/e3/03/db/e303dbbba3613ca79739f22dc2b5afaa.jpg'}
            ]
        }
    },
    _callSubscriber() {
        console.log('changed')
    },

    getState() {
         return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
       this._state.profilePage = profileReducer(this._state.profilePage, action);
       this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
       this._state.sideBar = sidebarReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
};


window.store = store;

export default store;