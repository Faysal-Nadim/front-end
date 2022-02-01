import { authConstant } from "../actions/constants";

const initState = {
    token: null,
    user: {
        firstName: '',
        lastName: '',
        email: '',
        profilePicture: [],
    },
    authenticate: false,
    authenticating: false,
    loading: false,
    error: null,
    message: '',
    getUser: []
};

export default (state = initState, action) => {

    switch (action.type) {
        case authConstant.LOGIN_REQUEST:
            state = {
                ...state,
                authenticating: true
            }
            break;
        case authConstant.LOGIN_SUCCESS:
            state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                authenticate: true,
                authenticating: false
            }
            break;
        case authConstant.LOGOUT_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case authConstant.LOGOUT_SUCCESS:
            state = {
                ...initState
            }
            break;
        case authConstant.LOGOUT_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                loading: false
            }
            break;
        case authConstant.SIGNUP_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case authConstant.SIGNUP_SUCCESS:
            state = {
                ...state
            }
            break;
        case authConstant.SIGNUP_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                loading: false
            }
            break;
        case authConstant.UPDATE_REQUEST:
            state = {
                ...state
            }
            break;
        case authConstant.UPDATE_SUCCESS:
            state = {
                ...state,
                getUser: action.payload
            }
            break;
        case authConstant.GET_REQUEST:
            state = {
                ...state
            }
            break;
        case authConstant.GET_SUCCESS:
            state = {
                ...state,
                getUser: action.payload.getUser
            }
            break;
        case authConstant.GET_FAILURE:
            state = {
                ...state,
                error: action.payload.error
            }
            break;
    }

    return state;
}