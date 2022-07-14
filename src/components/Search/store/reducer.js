import * as actionTypes from './constants'

const defalutState = {
    value: '',
    searchHistory: []
}

export default (state = defalutState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_VALUE:
            return {
                ...state,
                value: action.data
            }
        case actionTypes.CHANGE_SEARCH:
            if (state.value !== '') {
                return {
                    ...state,
                    searchHistory: [state.value, ...state.searchHistory]
                }
            } else {
                return {
                    ...state
                }
            }

        case actionTypes.CHANGE_CLEAR_SEARCH:
            return {
                ...state,
                searchHistory: []
            }
        default:
            return state
    }
}