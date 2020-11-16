import * as actions from './actions'

const initialState = {
    user: {
        id: 0,
    },
    recipes: [],
    isFetching: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actions.LOGIN_START:
            return {
                ...state, isFetching: true, error: ''
            }
        case actions.LOGIN_SUCCESS:
            return {
                ...state, isFetching: false, user: { id: action.payload }
            }
        case actions.LOGIN_FAILURE:
            return {
                ...state, isFetching: false, error: action.payload,
            }
        case actions.REGISTER_START:
            return {
                ...state, isFetching: true, error: ''
            }
        case actions.REGISTER_SUCCESS:
            return {
                ...state, isFetching: false
            }
        case actions.REGISTER_FAILURE:
            return {
                ...state, isFetching: false, error: action.payload,
            }
        default:
            return state
    }
}

export default reducer