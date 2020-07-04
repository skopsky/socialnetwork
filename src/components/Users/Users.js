import React from "react";
import * as axios from 'axios';
import userPhoto from '../../assets/5.png';
import classes from './Users.module.css'

const Users = (props) => {

    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            debugger
            props.setUsers(response.data.items)
        })
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <div>{u.name}</div>
                        <div className={classes.images}><img src={u.photos.small != null ? u.photos.small : userPhoto}
                                                             alt=""/></div>
                        <div>{u.id}</div>
                        <div></div>
                    </div>
                </span>
            </div>)
        }
    </div>

}

export default Users;