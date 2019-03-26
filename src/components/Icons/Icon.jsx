import React from 'react'

function Icon(props) {
    return(
        <svg
            fill={props.color}
            width={props.size}
            height={props.size}
            viewBox={props.viewBox}
        >
            {props.children}
        </svg>
    )
}

export default Icon