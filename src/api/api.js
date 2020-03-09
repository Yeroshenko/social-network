import * as axios from 'axios'


const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": 'e853de96-5272-4070-982b-8726497158cc'
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
  login(email, password, rememberMe = false) {
    return (
      instance
        .post('auth/login', { email, password, rememberMe })
        .then(response => response.data)
    )
  },
  logout() {
    return (
      instance
        .delete('auth/login')
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