import { getCardlist } from "../../../../api/request"

const changeFoundList = (data) => ({
    type: 'SET_FOUND',
    data
})

const changeShow = (data) => ({
    type: 'SET_SHOW',
    data
})

export const getFoundList = () => {
    return (dispatch) => {
        getCardlist()
            .then(data => {
                let action = data.data
                dispatch(changeFoundList(action))
                dispatch(changeShow(false))
            })

    }
}