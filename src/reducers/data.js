function data (state, action) {
    switch (action.type) {
        case 'SEARCH_MOVIE':
            return console.log('Heeey I am an action')
        default:
            return state
    }
}

export default data