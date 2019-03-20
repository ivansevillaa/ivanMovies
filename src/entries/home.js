import React from 'react'
import { render } from 'react-dom'
import HomeContainer from '../pages/Home/HomeContainer.jsx'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers/index.js'
import { Map as map} from 'immutable'

const store = createStore(
    reducer,
    map(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const $homeContainer = document.getElementById('home-container')
render(
    <Provider store={store}>
        <HomeContainer />
    </Provider>,
    $homeContainer
)