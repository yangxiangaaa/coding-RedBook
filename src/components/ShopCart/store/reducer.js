import * as actionTypes from './constants'

const defaultState = {
    isShow: false,
    quanselect: false
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_SHOW:
            return {
                ...state,
                isShow: !state.isShow
            }
        case actionTypes.CHANGE_QUANSELECT:
            return {
                ...state,
                quanselect: action.data
            }
        default:
            return state
    }
}