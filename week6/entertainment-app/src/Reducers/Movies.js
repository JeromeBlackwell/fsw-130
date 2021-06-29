const movieReducers = (movies = [], action) => {
    switch(action.type) {
        case 'GET_MOVIE':
            return movies
            break
        case 'ADD_MOVIE':
            return [...movies, action.payload]
            break
        case 'DEL_MOVIE': {
            const aryMovies = [...movies]
            if (action.payload !== -1) {
                aryMovies.splice(action.payload, 1)
            }
            return aryMovies
            break
        }
        default:
            return movies
            break
    }
}

export default movieReducers