import React, { Component } from 'react'
import Movie from './Movie.jsx'
import { connect } from 'react-redux'
import { openModal } from '../../actions/index.js'

class MovieContainer extends Component {
    openModal = (id) => {
        this.props.dispatch(openModal(id))
    }
    render() {
        return(
            <Movie
                openModal={this.openModal} 
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

