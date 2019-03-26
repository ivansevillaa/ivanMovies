import React from 'react'
import Add from '../Icons/Add.jsx'
import Checkmark from '../Icons/Checkmark.jsx'
import './add-remove.css'

function AddRemove(props) {
    return(
        <div className="AddRemove">
        {
            props.inMyPlaylist ?
                <button 
                    title="Remove from my playlist"
                    onClick={props.handleAddRemoveClick}
                >
                    <Checkmark 
                        size={20}
                        color="white"
                        viewBox="0 0 20 20"
                    />
                </button>
            :
                <button 
                    title="Add to my playlist"
                    onClick={props.handleAddRemoveClick}
                >
                    <Add 
                        size={20}
                        color="white"
                        viewBox="0 0 20 20"
                    />
                </button>
        }
        </div>
    )
}

export default AddRemove