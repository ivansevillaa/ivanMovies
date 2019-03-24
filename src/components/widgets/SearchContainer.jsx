import React, { Component } from 'react'
import Search from './Search.jsx'
import { connect } from 'react-redux' 
import * as actions from '../../actions/index.js'
import { bindActionCreators } from 'redux'

class SearchContainer extends Component {
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.actions.searchMovie(this.input.value)
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

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(SearchContainer)