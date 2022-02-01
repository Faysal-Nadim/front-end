import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import reqReducer from "./req.reducer";
import cartReducer from "./cart.reducer";
import getCartReducer from "./getcart.reducer"
import orderReducer from "./order.reducer"

const rootReducer = combineReducers({
    auth: authReducer,
    request: reqReducer,
    cart: cartReducer,
    getCart: getCartReducer,
    userOrder: orderReducer
})

export default rootReducer;