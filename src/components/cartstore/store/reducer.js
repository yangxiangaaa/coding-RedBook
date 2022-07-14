import * as actionTypes from './constants'

const defaultState = {
    shopCart: []
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_CARTSTORE:
            return {
                ...state,
                shopCart: [...state.shopCart, action.data]
            }
        case actionTypes.CHANGE_ISSHOW:
            return {
                ...state,
                shopCart: [...action.data]
            }
        default:
            return state
    }
}