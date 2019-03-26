export function openModal(movieId) {
    return {
        type: 'OPEN_MODAL',
        payload: {
            movieId
        }
    }
}

export function closeModal() {
    return {
        type: 'CLOSE_MODAL'
    }
}

export function searchMovie(query) {
    return {
        type: 'SEARCH_MOVIE',
        payload: {
            query
        }
    }
}