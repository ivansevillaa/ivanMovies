import React from 'react'
import './search.css'
import SearchIcon from '../Icons/Search.jsx'

function Search(props) {
    return(
        <div className="Search-container">
            <form 
                className="Search"
                onSubmit={props.handleSubmit}
            >
                <i className="Search-icon">
                    <SearchIcon 
                        color="white"
                        size={18}
                        viewBox="0 0 32 32"
                    />
                </i>
                <input
                    ref={props.setRef} 
                    className="Search-input"
                    type="text"
                    placeholder="Search a movie"
                    name="search"
                />
            </form>
        </div>
    )
}

export default Search