import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    'profilePage': profileReducer,
    'dialogsPage': dialogReducer,
    'sideBar' : sidebarReducer,
    'usersPage' : usersReducer,
});


let store = createStore(reducers);

window.store = store;

export default store;