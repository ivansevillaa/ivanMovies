import React from 'react'
import './progress-bar.css'

function ProgessBar(props) {
    return(
        <div className="ProgressBar">
            <input 
                type="range"
                min={0}
                max={props.duration}
                value={props.currentTime}
                onChange={props.handleChange}
            />
        </div>
    )
}

export default ProgessBar