import React from 'react'
import './regular-error.css'

function RegularError(props) {
    return(
        <div className="RegularError">
            <div className="RegularError-messagge">
                <h1>Oh No! Something is not working right</h1>
                <p>Please, try again later</p>
            </div>
        </div>
    )
}

export default RegularError