import React from 'react'
import './spinner.css'

function Spinner(props) {
    if(!props.loading) return null
    return(
        <div className="Spinner">
            <img src="./images/Spinner-2s-20px.svg"/>
        </div>
    )
}

export default Spinner