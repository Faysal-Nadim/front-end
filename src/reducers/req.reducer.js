import { reqConst } from "../actions/constants"

const initState = {
    requestListA: [],
    requestListP: [],
    requestListR: []
}

export default (state = initState, action) => {
    switch (action.type) {
        case reqConst.REQA_SUCCESS:
            state = {
                ...state,
                requestListA: action.payload.requestListA
            }
            break;
        case reqConst.REQP_SUCCESS:
            state = {
                ...state,
                requestListP: action.payload.requestListP
            }
            break;
        case reqConst.REQR_SUCCESS:
            state = {
                ...state,
                requestListR: action.payload.requestListR
            }
            break;
    }

    return state;
}