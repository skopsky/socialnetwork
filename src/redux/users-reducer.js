import {usersApi} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOOGLED_FETCH = 'TOOGLED_FETCH';
const TOOGLED_IS_FOLLOWING_PROGRESS = 'TOOGLED_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    profile: null,
    followingInProgress: false,

}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: true
                        }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: false
                        }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCount}
        case  TOOGLED_FETCH:
            return {...state, isFetching: action.isFetching}
        case  TOOGLED_IS_FOLLOWING_PROGRESS:
            return {...state, followingInProgress: action.followingInProgress}
        default :
            return state;

    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCountAC = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount});
export const isFetchingAC = (isFetching) => ({type: TOOGLED_FETCH, isFetching});
export const toggleFollowingProgressAC = (followingInProgress) => ({
    type: TOOGLED_IS_FOLLOWING_PROGRESS,
    followingInProgress
});

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(isFetchingAC(true))
        usersApi.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(isFetchingAC(false))
                dispatch(setUsersAC(data.items))
                dispatch(setTotalUsersCountAC(data.totalCount))
            });
    }
}

export const followThunkCreator = (userId) => {
    console.log(userId)
    return (dispatch) => {
        dispatch(toggleFollowingProgressAC(true,userId));
        usersApi.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followAC(userId));
                }
                dispatch(toggleFollowingProgressAC(false,userId));
            })
    };
}
export const unfollowThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgressAC(true,userId));
        usersApi.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowAC(userId));
                }
                dispatch(toggleFollowingProgressAC(false,userId));
            });
    }
}

export default usersReducer;