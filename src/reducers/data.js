import schema from '../schemas/index.js'
import { fromJS } from 'immutable'

const initialState = fromJS({
    entities: schema.entities,
    categories: schema.result.categories,
    search: ''
})

function data (state = initialState, action) {
    switch (action.type) {
        case 'SEARCH_MOVIE': {
            // let results = []
            // if (action.payload.query) {
            //     state.data.categories.map((item) => {
            //         return item.playlist.filter((item) => {
            //             return item.title.toLowerCase().includes(action.payload.query.toLowerCase()) && results.push(item)
            //         })
            //     })
            // }
            // return {
            //     ...state,
            //     search: results
            // }
            return state.set('search', action.payload.query)
        }
        default:
            return state
    }
}

export default data