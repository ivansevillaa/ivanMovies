import data from './data.js'
import modal from './modal.js'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    data,
    modal
})

export default rootReducer