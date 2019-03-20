import React from 'react'
import Category from '../Category/Category.jsx'
import './categories.css'
import Movie from '../Movie/Movie.jsx'

function Categories(props) {
    return(
        <div className="Categories">
        {
            props.search.map((item) => {
                return <Movie 
                            key={item.get('id')} 
                            title={item.get('title')}
                            type={item.get('type')}
                            cover={item.get('cover')}
                            src={item.get('src')}
                        />
            })
        }
            {
                props.categories.map((item) => {
                    return(
                        <Category 
                            key={item.get('id')} 
                            title={item.get('title')}
                            playlist={item.get('playlist')}
                            handleOpenModal={props.handleOpenModal}
                        />
                    ) 
                })
            }
        </div>
    )
}

export default Categories