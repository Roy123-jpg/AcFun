// 数据管理中心
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'  // A thunk is a function that returns a function. 返回函数  中间件
import reducer from './reducer'

const composeEnhancers = 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

export default store;