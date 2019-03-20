import React from 'react'
import { render } from 'react-dom'
import HomeContainer from '../pages/Home/HomeContainer.jsx'
import data from '../api.json'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers/data.js'
import normalizedData from '../schemas/index.js'
console.log(normalizedData)

const initialState = {
    data: {
        ...data
    },
    search: []
}
const store = createStore(
reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const $homeContainer = document.getElementById('home-container')
render(
    <Provider store={store}>
        <HomeContainer />
    </Provider>,
    $homeContainer
)