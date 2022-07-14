import * as actionTypes from './constants'

const changeisShow = () => ({
    type: actionTypes.CHANGE_SHOW,

})
const changequanselect = (data) => ({
    type: actionTypes.CHANGE_QUANSELECT,
    data
})

export const getisShowList = () => {
    return (dispatch) => {
        dispatch(changeisShow())
    }
}

export const getquanselect = (data) => {
    return (dispatch) => {
        dispatch(changequanselect(data))
    }
}