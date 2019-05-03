import {createStore, combineReducers, applyMiddleware} from 'redux'
import {UserReducer} from './UserReducer'
import {SelectReducer} from './UserReducer'
import {RejectReducer} from './UserReducer'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    UserReducer, SelectReducer, RejectReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store; 