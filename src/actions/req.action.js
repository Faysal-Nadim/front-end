import axiosInstance from "../helpers/axios"
import { reqConst } from "./constants"

export const userPendingRequest = (_id) => {
    return async (dispatch) => {

        dispatch({ type: reqConst.REQP_REQUEST });

        const res = await axiosInstance.get(`/user/requests/pending`, _id);
        console.log(res);
        if(res.status === 200){

            const { requests } = res.data;
            dispatch({
                type: reqConst.REQP_SUCCESS,
                payload: { requestListP: requests }
            });
        }else{
            dispatch({
                type: reqConst.REQP_FAILURE,
                payload: { error: res.data.error }
            });
        }
    }
}

export const userApprovedRequest = (_id) => {
    return async (dispatch) => {

        dispatch({ type: reqConst.REQA_REQUEST });

        const res = await axiosInstance.get(`/user/requests/approved`, _id);
        console.log(res);
        if(res.status === 200){

            const { requests } = res.data;
            dispatch({
                type: reqConst.REQA_SUCCESS,
                payload: { requestListA: requests }
            });
        }else{
            dispatch({
                type: reqConst.REQA_FAILURE,
                payload: { error: res.data.error }
            });
        }
    }
}

export const userRejectedRequest = (_id) => {
    return async (dispatch) => {

        dispatch({ type: reqConst.REQR_REQUEST });

        const res = await axiosInstance.get(`/user/requests/rejected`, _id);
        console.log(res);
        if(res.status === 200){

            const { requests } = res.data;
            dispatch({
                type: reqConst.REQR_SUCCESS,
                payload: { requestListR: requests }
            });
            dispatch(userPendingRequest());
        }else{
            dispatch({
                type: reqConst.REQR_FAILURE,
                payload: { error: res.data.error }
            });
        }
    }
}


export const userSubmitReq = (newReq) => {
    return async (dispatch) => {
        dispatch({ type: reqConst.REQS_REQUEST });
        const res = await axiosInstance.post(`/request`, newReq)
        if(res.status === 201){
            dispatch({
                type: reqConst.REQS_SUCCESS,
                payload: res.data
            })
        }else{
            dispatch({
                type: reqConst.REQS_FAILURE,
                payload: {error: res.data.error}
            }) 
        }
    }
}