import axiosInstance from "../helpers/axios";
import { cartConstants } from "./constants"

export const addToCart = (request, qty) => {
    return async (dispatch) => {
        dispatch({ type: cartConstants.ADD_TO_CART_REQUEST });
        const newCart = {
            cartItems: {
                request: request._id,
                freightCat: request.freightCat,
                price: request.price,
                quantity: qty
            }
        }
        console.log(newCart);
        const res = await axiosInstance.post(`/cart/create`, newCart)

        if (res.status === 201) {
            // const cartItems = res.data;
            dispatch({
                type: cartConstants.ADD_TO_CART_SUCCESS,
                payload: res.data
            })
        } else {
            dispatch({
                type: cartConstants.ADD_TO_CART_FAILURE,
                payload: { error: res.data.error }
            })
        }

    }
}

export const updateCart = (newcart, qty) => {
    return async (dispatch) => {
        dispatch({ type: cartConstants.ADD_TO_CART_REQUEST });
        const newCart = {
            cartItems: {
                request: newcart._id,
                freightCat: newcart.freightCat,
                price: newcart.price,
                quantity: qty
            }
        }
        console.log(newCart);
        const res = await axiosInstance.post(`/cart/create`, newCart)

        if (res.status === 201) {
            // const cartItems = res.data;
            dispatch({
                type: cartConstants.ADD_TO_CART_SUCCESS,
                payload: res.data
            })
            dispatch(getCartItems());
        } else {
            dispatch({
                type: cartConstants.ADD_TO_CART_FAILURE,
                payload: { error: res.data.error }
            })
        }

    }
}

export const getCartItems = () => {
    return async (dispatch) => {
        dispatch({ type: cartConstants.GET_CART_REQUEST });
        const res = await axiosInstance.get(`/cart/get`)

        if (res.status === 200) {
            dispatch({
                type: cartConstants.GET_CART_SUCCESS,
                payload: res.data
            })
        } else {
            dispatch({
                type: cartConstants.GET_CART_FAILURE,
                payload: { error: res.data.error }
            })
        }
    }
}


export const removeCart = ( requestID ) => {
    return async (dispatch) => {
        dispatch({ type: cartConstants.REMOVE_CART_ITEM_REQUEST });
        const res = await axiosInstance.post(`/cart/remove`, requestID);
        if(res.status === 202) {
            dispatch({ type: cartConstants.REMOVE_CART_ITEM_SUCCESS });
            dispatch(getCartItems());
        }else{
            const { error } = res.data
            dispatch({
                type: cartConstants.REMOVE_CART_ITEM_FAILURE,
                payload: { error }
            });
        }

    }
}