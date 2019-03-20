import React, { Component } from 'react'
import MovieContainer from '../Movie/MovieContainer.jsx'
import './playlist.css'

function Playlist(props) {
    return(
        <div className="Playlist">
            {
                props.playlist.map((movieId) => {
                    return <MovieContainer handleOpenModal={props.handleOpenModal} id={movieId} key={movieId}/>
                })
            }
        </div>
    )
}

export default Playlist