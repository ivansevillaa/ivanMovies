import React from 'react'
import VolumeIcon from '../Icons/Volume.jsx'
import Mute from '../Icons/Mute.jsx'
import './volume.css'

function Volume(props) {
    return(
        <button className="Volume">
            <div onClick={props.handleVolumeToggle}>
                {
                    props.volume != 0 
                    ? 
                        <VolumeIcon 
                            color="white"
                            size={25}
                            viewBox="0 0 32 32"
                        />
                    :
                        <Mute 
                            color="white"
                            size={25}
                            viewBox="0 0 32 32"
                        />


                }
            </div>
            <div className="Volume-range">
                <input 
                    type="range"
                    min={0}
                    max={1}
                    step={.05}
                    onChange={props.handleVolumeChange}
                    value={props.volume}
                />
            </div>
        </button>
    )
}

export default Volume