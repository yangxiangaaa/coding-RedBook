import * as actionTypes from './constants'

const changecartstore = (data) => ({
    type: actionTypes.CHANGE_CARTSTORE,
    data
})

const changeisshow = (data) => ({
    type: actionTypes.CHANGE_ISSHOW,
    data
})

export const getcartstoreList = (data) => {
    return (dispatch) => {
        dispatch(changecartstore(data))
    }
}

export const getisshowList = (data) => {
    return (dispatch) => {
        dispatch(changeisshow(data))
    }
}