import axiosInstance from "../helpers/axios";
import { authConstant } from "./constants"

export const login = (user) => {
    return async (dispatch) => {
        dispatch({ type: authConstant.LOGIN_REQUEST });
        const res = await axiosInstance.post(`/signin`, {
            ...user
        });

        if(res.status === 200){
            const {token, user} = res.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            dispatch({
                type: authConstant.LOGIN_SUCCESS,
                payload: {
                    token, user
                }
            });
        }else{
            if(res.status === 400){
                console.log(res.data.error);
                dispatch({
                    type: authConstant.LOGIN_FAILURE,
                    payload: {error: res.data.error}
                })
            }
        }
    }
}


export const signUp = (user) => {
    return async (dispatch) => {
        dispatch({ type: authConstant.SIGNUP_REQUEST });
        const res = await axiosInstance.post(`/signup`, user);
        if(res.status === 201){
            dispatch({ 
                type: authConstant.SIGNUP_SUCCESS,
                payload: res.data
            })
        }else{
            dispatch({
                type: authConstant.SIGNUP_FAILURE,
                payload: { error: res.data.error }
            })
        }
    }
}


export const isUserLoggedIn = () => {
    return async (dispatch) => {
        const token = window.localStorage.getItem('token');
        if(token){
            const user = JSON.parse(localStorage.getItem('user'));
            dispatch({
                type: authConstant.LOGIN_SUCCESS,
                payload: {
                    token, user
                }
            });
        }else{
            dispatch({
                type: authConstant.LOGIN_FAILURE,
                payload: {error: 'Failed to login!'}
            })
        }
    }
}

export const signout = () => {
    return async (dispatch) => {
        
        dispatch({ type: authConstant.LOGOUT_REQUEST });
        const res = await axiosInstance.post(`/signout`);
        
        if(res.status === 200){
            localStorage.clear();
            dispatch({ type: authConstant.LOGOUT_SUCCESS });
        }else{
            dispatch({
                type: authConstant.LOGOUT_FAILURE,
                payload: { error: res.data.error }
            });
        }
    }
}

export const getUser = () => {
    return async (dispatch) => {
        dispatch({ type: authConstant.GET_REQUEST });
        const res = await axiosInstance.get(`user/get`);

        if(res.status === 200){
            const { user } = res.data
            dispatch({
                type: authConstant.GET_SUCCESS,
                payload: { getUser: user }
            });
        }else{
            dispatch({ 
                type: authConstant.GET_FAILURE,
                payload: { error: res.data.error }
             });
        }
    }
}

export const upUser = (form) => {
    return async (dispatch) => {
        dispatch({ type: authConstant.UPDATE_REQUEST });
        const res = await axiosInstance.post(`/user/update`, form);

        if(res.status === 201){
            dispatch({ 
                type: authConstant.UPDATE_SUCCESS,
                payload: res.data
            })
            dispatch(getUser());
        }else{
            dispatch({
                type: authConstant.UPDATE_FAILURE,
                payload: { error: res.data.error }
            })
        }
    }
}