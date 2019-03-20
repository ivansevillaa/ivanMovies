import React, { Component } from 'react'
import Movie from './Movie.jsx'
import { connect } from 'react-redux'

class MovieContainer extends Component {
    render() {
        return(
            <Movie {...this.props.data}/>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        data: state.data.entities.movie[props.id]
    }
}

export default connect(mapStateToProps)(MovieContainer)

