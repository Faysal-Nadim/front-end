import { cartConstants } from "../actions/constants";

const initState = {
    getCartItems: {
        
    }
}

export default (state = initState, action) => {
    switch (action.type) {
        case cartConstants.GET_CART_REQUEST:
            state = {
                ...state,
            }
            break;
        case cartConstants.GET_CART_SUCCESS:
            state = {
                ...state,
                getCartItems: action.payload
            }
            break;
        case cartConstants.GET_CART_FAILURE:
            state = {
                ...state,
                error: action.payload.error
            }
            break;

    }
    return state;
}