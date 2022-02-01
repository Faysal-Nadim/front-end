import { orderConst } from "../actions/constants"

const initState = {
    order: '',
    getOrders: '',
    orderPlaced: false
}

export default (state = initState, action) => {
    switch (action.type) {
        case orderConst.ORDER_REQUEST:
            state = {
                ...state,
                orderPlaced: false
            }
            break;
        case orderConst.ORDER_SUCCESS:
            state = {
                ...state,
                order: action.payload,
                orderPlaced: true
            }
            break;
        case orderConst.ORDER_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                orderPlaced: false
            }
            break;
        case orderConst.GET_ORDER_REQUEST:
            state = {
                ...state,
                orderPlaced: false
            }
            break;
        case orderConst.GET_ORDER_SUCCESS:
            state = {
                ...state,
                getOrders: action.payload,
                orderPlaced: false
            }
            break;
        case orderConst.GET_ORDER_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                orderPlaced: false
            }
            break;

    }

    return state;
}