import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsreducer from "./dialogs-reducer";
import sidebarreducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thinkMiddleware from "redux-thunk"

let reducers = combineReducers({
    ProfilePage: profileReducer,
    DialogsPage: dialogsreducer,
    Sidebar: sidebarreducer,
    UsersPage: usersReducer,
    auth: authReducer

})

const store = createStore(reducers, applyMiddleware(thinkMiddleware));

window.store = store;


export default store;