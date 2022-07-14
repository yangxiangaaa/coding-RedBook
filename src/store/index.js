import { applyMiddleware, createStore, compose } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
    // 比如在Dispatch一个Action之后，到达reducer之前，进行一些额外的操作，就需要用到middleware（中间件）


export default store