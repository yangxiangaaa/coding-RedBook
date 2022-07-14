const defaultState = {
    shopinfoList: [],
    shopList: [],
    bannersList: [],
    isShow: true
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'SEL_SHOPINFO':
            return {
                ...state,
                shopinfoList: action.data
            }
        case 'SEL_SHOP':
            return {
                ...state,
                shopList: action.data
            }
        case 'SEL_BANNERS':
            return {
                ...state,
                bannersList: action.data
            }
        case 'SEL_SHOW':
            return {
                ...state,
                isShow: action.data
            }
        default:
            return state
    }
}