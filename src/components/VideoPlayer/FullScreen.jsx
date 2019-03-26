import React from 'react'
import FullScreenIcon from '../Icons/FullScreen.jsx'
import './full-screen.css'

function FullScreen(props) {
    return(
        <div 
            className="FullScreen"
            onClick={props.handleFullScreenClick}
        >
            <FullScreenIcon 
                size={25}
                color="white"
                viewBox="0 0 32 32"
            />
        </div>
    )
}

export default FullScreen