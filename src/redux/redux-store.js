import {combineReducers, createStore} from "redux";
import profilereducer from "./profile-reducer";
import dialogsreducer from "./dialogs-reducer";
import sidebarreducer from "./sidebar-reducer";

let reducers = combineReducers({
    ProfilePage: profilereducer,
    DialogsPage: dialogsreducer,
    Sidebar: sidebarreducer

})

let store = createStore(reducers);


export default store;