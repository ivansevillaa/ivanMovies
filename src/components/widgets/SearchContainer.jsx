import React, { Component } from 'react'
import Search from './Search.jsx'
import { connect } from 'react-redux' 
import { searchMovie } from '../../actions/index.js'

class SearchContainer extends Component {
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.dispatch(searchMovie(this.input.value))
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