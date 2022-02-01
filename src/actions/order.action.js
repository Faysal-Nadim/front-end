import axiosInstance from "../helpers/axios";
import { orderConst } from "./constants"

export const placeOrder = (orders, totalPrice, totalItems) => {
    return async (dispatch) => {
        dispatch({ type: orderConst.ORDER_REQUEST });
        const newOrder = {
            totalPrice: totalPrice,
            totalItems: totalItems,
            orderItems: orders
        }
        console.log(newOrder);
        const res = await axiosInstance.post(`/user/placeorder`, newOrder)

        if (res.status === 201) {
            // const cartItems = res.data;
            dispatch({
                type: orderConst.ORDER_SUCCESS,
                payload: res.data
            })
        } else {
            dispatch({
                type: orderConst.ORDER_FAILURE,
                payload: { error: res.data.error }
            })
        }

    }
}


export const getOrder = () => {
    return async (dispatch) => {
        dispatch({ type: orderConst.GET_ORDER_REQUEST });
        const res = await axiosInstance.get(`/user/getorder`)
        if (res.status === 200) {
            dispatch({
                type: orderConst.GET_ORDER_SUCCESS,
                payload: res.data
            })
        } else {
            dispatch({
                type: orderConst.GET_ORDER_FAILURE,
                payload: { error: res.data.error }
            })
        }

    }
}
