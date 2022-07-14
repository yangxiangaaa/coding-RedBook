import { getshopinfo, getshop, getBanners } from "../../../api/request"


const changeShopinfoList = (data) => ({
    type: 'SEL_SHOPINFO',
    data
})

const changeShopList = (data) => ({
    type: 'SEL_SHOP',
    data
})

const changeBannersList = (data) => ({
    type: 'SEL_BANNERS',
    data
})

const changeIsshow = (data) => ({
    type: 'SEL_SHOW',
    data
})

export const getShopinfoList = () => {
    return (dispatch) => {
        getshopinfo()
            .then(data => {
                let list = data.data
                dispatch(changeShopinfoList(list))
                dispatch(changeIsshow(false))
            })
    }
}

export const getShopList = () => {
    return (dispatch) => {
        getshop()
            .then(data => {
                let list = data.data
                dispatch(changeShopList(list))

            })
    }
}

export const getBannersList = () => {
    return (dispatch) => {
        getBanners()
            .then(data => {
                let list = data.data
                dispatch(changeBannersList(list))

            })
    }
}