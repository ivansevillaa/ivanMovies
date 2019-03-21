import React from 'react'
import Category from '../Category/Category.jsx'
import './categories.css'
import MovieContainer from '../Movie/MovieContainer.jsx'

function Categories(props) {
    return(
        <div className="Categories">
        {
            props.search.map((item) => {
                return <MovieContainer
                            id={item.get('id')} 
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
                        />
                    ) 
                })
            }
        </div>
    )
}

export default Categories