import * as actionTypes from './constants'


const changevalue = (data) => ({
    type: actionTypes.CHANGE_VALUE,
    data
})

const changesearch = () => ({
    type: actionTypes.CHANGE_SEARCH,

})

const changeclearsearch = () => ({
    type: actionTypes.CHANGE_CLEAR_SEARCH
})

export const getvalueList = (data) => {
    return (dispatch) => {
        dispatch(changevalue(data))
    }
}

export const getsearch = () => {
    return (dispatch) => {
        dispatch(changesearch())
    }
}

export const getclearsearch = () => {
    return (dispatch) => {
        dispatch(changeclearsearch())
    }
}