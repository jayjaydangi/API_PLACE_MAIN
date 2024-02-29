import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducer/index'


// const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
const middlewareEnhancer = applyMiddleware(thunk)

const store = createStore(
    rootReducer,
    middlewareEnhancer
)
export default store