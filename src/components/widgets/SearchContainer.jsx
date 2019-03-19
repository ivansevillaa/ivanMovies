import React, { Component } from 'react'
import Search from './Search.jsx'

class SearchContainer extends Component {
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.input.value)
    }
    setInputRef = (element) => {
        this.input = element
    }
    render() {
        return(
            <div>
                <Search 
                    handleSubmit={this.handleSubmit}
                    setRef={this.setInputRef}
                />
            </div>
        )
    }
}

export default SearchContainer