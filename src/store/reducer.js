import { combineReducers } from "redux";

import { reducer as FoundReducer } from '../pages/Home/Found/store'
import { reducer as ShopinfoReducer } from "../pages/Shop/store";
import { reducer as CardListReducer } from "../pages/Home/City/store";
import { reducer as SearchReducer } from '../components/Search/store';
import { reducer as ShopcartReducer } from '../components/ShopCart/store'
import { reducer as CartstoreReducer } from '../components/cartstore/store'

export default combineReducers({
    Found: FoundReducer,
    Shop: ShopinfoReducer,
    Card: CardListReducer,
    Search: SearchReducer,
    Shopcart: ShopcartReducer,
    Cartstore: CartstoreReducer
})