import { USER_LOADED, LOGIN, LOGOUT } from './Types';
import jwt from 'jwt-decode';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
        case LOGIN:
            const token = action.payload;
            window.localStorage.setItem('token', token);
            window.localStorage.setItem('user', JSON.stringify(jwt(token)));
            return {
                ...state,
                isAuthenticated: true,
                user: JSON.parse(window.localStorage.getItem('user'))
            };
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                user: JSON.parse(window.localStorage.getItem('user'))
            };
        case LOGOUT:
            window.localStorage.removeItem('token');
            window.localStorage.removeItem('user');
            return {
                isAuthenticated: false,
                user: null
            };
        default:
            return state;
    }
};