import React from "react";
import userPhoto from '../../assets/5.png';
import classes from './Users.module.css'
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {toggleFollowingProgressAC} from "../../redux/users-reducer";
import {usersApi} from "../../api/api";


function Users(props) {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>{pages.map(p => {
            return <span className={props.currentPage === p && classes.selectedPage}
                         onClick={(e) => props.onPageChanged(p)}>{p}</span>
        })}</div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <div>{u.name}</div>
                        <NavLink to={"/profile/" + u.id}>
                        <div className={classes.images}><img src={u.photos.small != null ? u.photos.small : userPhoto}
                                                             alt=""/></div>
                            </NavLink>
                        <div>{u.id}</div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress} onClick={() => {
                                    props.unfollowThunkCreator(u.id);
                                }}>Unfollow</button>
                                : <button disabled={props.followingInProgress} onClick={() => {
                                    props.followThunkCreator(u.id);

                                }}>Follow</button>}
                                    </div>
                                   </div>
                                    </span>
            </div>)
        }
    </div>


}

export default Users;