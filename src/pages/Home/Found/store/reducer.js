// import * as actionTypes from './constants'


const defaultState = {
    dataList: [],
    show: true
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_FOUND':
            return {
                ...state,
                dataList: action.data
            }
        case 'SET_SHOW':
            return {
                ...state,
                show: action.data
            }
        default:
            return state
    }
}