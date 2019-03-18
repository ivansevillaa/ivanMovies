import React from 'react'
import { render } from 'react-dom'
import HomeContainer from '../pages/Home/HomeContainer.jsx'
import data from '../api.json'

const $homeContainer = document.getElementById('home-container')

render(<HomeContainer data={data} />, $homeContainer)