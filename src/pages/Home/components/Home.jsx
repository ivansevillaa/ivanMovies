import React from 'react'
import './home.css'

function Home(props) {
    return(
        <section className="Home">
            {props.children}
        </section>
    )
}

export default Home