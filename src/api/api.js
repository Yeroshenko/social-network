import * as axios from 'axios'


const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "df9a07cc-9f4e-42fa-aee2-a20117389c61"
  } 
})

export const usersApi = {
  getUsers(currentPage = 1, pageSize = 9) {
    return (
      instance
        .get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
    )
  },

  follow(userId) {
    return (
      instance
        .post(`follow/${userId}`)
    )
  },

  unfollow(userId) {
    return (
      instance
        .delete(`follow/${userId}`)
    )
  }
} 

export const authApi = {
  auth() {
    return (
      instance
        .get(`auth/me`)
        .then(response => response.data)
    )
  }
}

export const profileApi = {
  getProfile(userId) {
    return (
      instance
        .get(`profile/${userId}`)
    )
  }
}