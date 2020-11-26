const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Some message'},
        {id: 2, message: 'whasup'},
        {id: 3, message: 'whasup 2'},
        {id: 4, message: 'msg'},
        {id: 5, message: 'msg 2'},
    ],
    newMessageText : '',
    dialogs: [
        {id: 1, name: 'Rosie', src: 'https://i.pinimg.com/236x/04/11/7e/04117ec9d9f93d895076b8d520983798.jpg'},
        {id: 2, name: 'freya', src: 'https://i.pinimg.com/600x315/01/78/5d/01785d22523659c4ab626d9508492e71.jpg'},
        {id: 3, name: 'Sveta', src: 'https://i.pinimg.com/236x/e3/03/db/e303dbbba3613ca79739f22dc2b5afaa.jpg'},
    ]
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MESSAGE: {
             return  {
                 ...state,
                 newMessageText: action.body
             };
        }
        case SEND_MESSAGE: {
            let body = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 6, message: body}]
            };
        }
        default:
            return state;
    }

}

export const updateNewMessageCreator = (body) => {
    return {
        type: UPDATE_MESSAGE, body: body
    }
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export default dialogReducer;
