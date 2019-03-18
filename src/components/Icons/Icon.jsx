import React from 'react'

function Icon(props) {
    return(
        <svg
            fill={props.color}
            width={props.size}
            height={props.size}
            viewBox="0 0 32 32"
        >
            {props.children}
        </svg>
    )
}

export default Icon