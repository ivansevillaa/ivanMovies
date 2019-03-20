import React, { Component } from 'react'
import Movie from './Movie.jsx'
import { connect } from 'react-redux'

class MovieContainer extends Component {
    render() {
        return(
            <Movie 
                title={this.props.data.get('title')}
                type={this.props.data.get('type')}
                cover={this.props.data.get('cover')}
                src={this.props.data.get('src')}
                id={this.props.data.get('id')}
            />
        )
    }
}

function mapStateToProps(state, props) {
    return {
        data: state.get('data').get('entities').get('movie').get(props.id)
    }
}

export default connect(mapStateToProps)(MovieContainer)

