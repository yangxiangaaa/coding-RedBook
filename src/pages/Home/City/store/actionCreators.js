import { getCardlist } from "../../../../api/request";

const changeCardList = (data) => ({
    type: 'SEC_DATA',
    data
})

const changeShow = (data) => ({
    type: 'SEC_SHOW',
    data
})

export const getCardList = () => {
    return (dispatch) => {
        getCardlist()
            .then(data => {
                let list = data.data
                dispatch(changeCardList(list))
                dispatch(changeShow(false))
            })
    }
}