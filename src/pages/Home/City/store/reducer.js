const defaultState = {
    listData: [],
    show: true
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'SEC_DATA':
            return {
                ...state,
                listData: action.data
            }
        case 'SEC_SHOW':
            return {
                ...state,
                show: action.data
            }
        default:
            return state
    }
}