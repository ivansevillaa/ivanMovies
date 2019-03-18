import React from 'react'
import './header.css'
import SearchContainer from '../widgets/SearchContainer.jsx'

function Header(props) {
    return(
        <div className="Header">
            <h1 className="Header-title">ivan<strong>Movies</strong></h1>
            <SearchContainer />
        </div>
    )
}

export default Header