const movieReducers = (movies = [], action) => {
    switch(action.type) {
        case 'GET_MOVIE':
            return movies
        case 'ADD_MOVIE':
            return [...movies, action.payload]
        case 'DEL_MOVIE': {
            const anyMovies = [...movies]
            if (action.payload !== -1) {
                anyMovies.splice(action.payload, 1)
            }
            return anyMovies
        }
        default:
            return movies
    }
}

export default movieReducers