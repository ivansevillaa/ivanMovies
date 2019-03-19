import React from 'react'
import Category from '../Category/Category.jsx'
import './categories.css'
import Movie from '../Movie/Movie.jsx'

function Categories(props) {
    return(
        <div className="Categories">
        {
            props.search.map((item) => {
                return <Movie key={item.id} {...item}/>
            })
        }
            {
                props.categories.map((item) => {
                    return(
                        <Category 
                            key={item.id} 
                            {...item}
                            handleOpenModal={props.handleOpenModal}
                        />
                    ) 
                })
            }
        </div>
    )
}

export default Categories