import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './movie.css'

class Movie extends Component {
    // state = {
    //     image: "./images/covers/Fast-and-Furious.jpg",
    // }
    // handleMouseOn = (event) => {
    //     this.setState({
    //         width: 330,
    //         height: 200
    //     })
    // }
    // handleMouseOut = (event) => {
    //     this.setState({
    //         width: 230,
    //         height: 130
    //     })
    // }
    handleClick = (event) => {
        this.props.openModal(this.props.id)
    }
    render() {
        return (
            <div 
                className="Movie"
                onClick={this.handleClick}
            >
                <div className="Movie-cover">
                    <img 
                        className="Movie-image"
                        src={this.props.cover}
                        alt="movie-image"
                        width={230}
                        height={130}
                    />
                    <h3 className="Movie-title">{this.props.title}</h3>
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