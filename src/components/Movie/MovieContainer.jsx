import React, { Component } from 'react'
import Movie from './Movie.jsx'
import { connect } from 'react-redux'
import * as actions from '../../actions/index.js'
import { bindActionCreators } from 'redux'

class MovieContainer extends Component {
    openModal = (id) => {
        this.props.actions.openModal(id)
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

function mapDisparchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDisparchToProps)(MovieContainer)

