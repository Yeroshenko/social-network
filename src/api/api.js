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
  me() {
    return (
      instance
        .get('auth/me')
        .then(response => response.data)
    )
  },
  login(email, password, rememberMe, captcha) {
    return (
      instance
        .post('auth/login', { 
          email: email, 
          password: password, 
          rememberMe: rememberMe, 
          captcha: captcha 
        })
    )
  }
}

export const profileApi = {
  getProfile(userId) {
    return (
      instance
        .get(`profile/${userId}`)
    )
  },
  getStatus(userId) {
    return (
      instance
        .get(`profile/status/${userId}`)
    )
  },
  updateStatus(status) {
    return (
      instance
        .put('profile/status', { status: status })
    )
  }
}