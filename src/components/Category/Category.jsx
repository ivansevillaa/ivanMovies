import React from 'react'
import Playlist from '../Playlist/Playlist.jsx'
import './category.css'

function Category(props) {
    return(
        <div className="Category">
            <h2 className="Category-title">{props.title}</h2>
            <Playlist 
                playlist={props.playlist}
                handleOpenModal={props.handleOpenModal}
            />
        </div>
    )
}

export default Category