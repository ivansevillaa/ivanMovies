import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './movie.css'
import AddRemove from '../widgets/AddRemove.jsx'

class Movie extends Component {
    state = {
        inMyPlaylist: false,
    }
    handleClick = (event) => {
        this.props.openModal(this.props.id)
        console.log(this.props.id)
    }
    handleAddRemoveClick = (event) => {
        this.setState({
            inMyPlaylist: !this.state.inMyPlaylist,
        })
    }
    render() {
        return (
            <div className="Movie">
                <div 
                    className="Movie-cover"
                    onClick={this.handleClick}
                >
                    <img 
                        className="Movie-image"
                        src={this.props.cover}
                        alt="movie-image"
                        width={230}
                        height={130}
                    />
                </div>
                <div className="Movie-description">
                    <h3 className="Movie-title">{this.props.title}</h3>
                    <AddRemove 
                        inMyPlaylist={this.state.inMyPlaylist}
                        handleAddRemoveClick={this.handleAddRemoveClick}
                    />
                </div>
            </div>
        )
    }
}

Movie.propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['video']).isRequired
}

export default Movie