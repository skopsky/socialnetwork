import * as axios from "axios";

let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "6886d00c-487d-4dc9-97d3-a0383ed98797"
    }
})

export const usersApi = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(responese => {
                return responese.data
            })

    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        console.log('Obsolete method.Please use profileApi object')
        return profileApi.getProfile(userId)
    }

}

export const profileApi = {

    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.get(`profile/status/`, {status: status})
    }

}

export const authAPI = {
    me() {
        return instance.get(`auth/me`,)
    }
}






