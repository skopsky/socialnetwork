import {combineReducers, createStore} from "redux";
import profilereducer from "./profile-reducer";
import dialogsreducer from "./dialogs-reducer";
import sidebarreducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    ProfilePage: profilereducer,
    DialogsPage: dialogsreducer,
    Sidebar: sidebarreducer,
    UsersPage: usersReducer

})

let store = createStore(reducers);


export default store;