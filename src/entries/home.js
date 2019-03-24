import React from 'react'
import { render } from 'react-dom'
import HomeContainer from '../pages/Home/HomeContainer.jsx'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers/index.js'
import { Map as map} from 'immutable'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

// function logger({ getState, dispatch}) {
//     return (next) => {
//         return (action) => {
//             console.log('OLD STATE -> ', getState().toJS())
//             console.log('ACION TO SEND -> ', action)
//             const value = next(action)
//             console.log('NEW STATE -> ', getState().toJS())
//             return value
//         }
//     }
// }

const store = createStore(
    reducer,
    map(),
    composeWithDevTools (
        applyMiddleware(logger)
    )
)

const $homeContainer = document.getElementById('home-container')
render(
    <Provider store={store}>
        <HomeContainer />
    </Provider>,
    $homeContainer
)