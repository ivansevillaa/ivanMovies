function data (state, action) {
    switch (action.type) {
        case 'SEARCH_MOVIE': {
            const results = []
            if (action.payload.query) {
                state.data.categories.map((item) => {
                    return item.playlist.filter((item) => {
                        return item.title.toLowerCase().includes(action.payload.query.toLowerCase()) && results.push(item)
                    })
                })
            }
            return {
                ...state,
                search: results
            }
        }
        default:
            return state
    }
}

export default data