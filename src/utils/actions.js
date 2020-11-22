import axiosWithAuth from './axiosWithAuth'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const REGISTER_START = 'REGISTER_START'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'


export const postLogin = credentials => dispatch => {
    dispatch({ type: LOGIN_START })

    axiosWithAuth()
        .post('/auth/login', credentials)
        .then(res => {
            console.log('login successful', res)
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('userId', res.data.id)
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.id })
        })
        .catch(err => {
            console.log(err)
            localStorage.removeItem('token')
            dispatch({ type: LOGIN_FAILURE, payload: err.data })
        })
}

export const postRegister = credentials => dispatch => {
    dispatch({ type: REGISTER_START })

    axiosWithAuth()
        .post('/auth/register', credentials)
        .then(res => {
            console.log(res)
            dispatch({ type: REGISTER_SUCCESS })
            postLogin(credentials)
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: REGISTER_FAILURE, payload: err.data })
        })
}