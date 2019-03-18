import React from 'react'
import './video-title.css'

function VideoTitle(props) {
    return(
        <div className="Title">
            <h2>
                {props.title}
            </h2>
        </div>
    )
}

export default VideoTitle