import React, { Component } from 'react'
import Movie from '../Movie/Movie.jsx'
import './playlist.css'

function Playlist(props) {
    return(
        <div className="Playlist">
            {
                props.playlist.map((item) => {
                    return <Movie handleOpenModal={props.handleOpenModal} {...item} key={item.id}/>
                })
            }
        </div>
    )
}

export default Playlist