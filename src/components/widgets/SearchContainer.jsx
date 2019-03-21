import React, { Component } from 'react'
import Search from './Search.jsx'
import { connect } from 'react-redux' 

class SearchContainer extends Component {
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.dispatch({
            type: 'SEARCH_MOVIE',
            payload: {
                query: this.input.value
            }
        })
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

export default connect()(SearchContainer)