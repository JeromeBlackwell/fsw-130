export const addMovie = (movieTitle) => {
    return {
        type: 'ADD_MOVIE',
        payload: movieTitle
    }
}

export const delMovie = (MovieID) => {
    return {
        type:  'DEL_MOVIE',
        payload: MovieID
    }
}

export const addShow = (ShowTitle) => {
    return {
        type: 'ADD_SHOW',
        payload: ShowTitle
    }
}

export const delShow = (ShowTitle) => {
    return {
        type: 'DEL_SHOW',
        payload: ShowTitle
    }
}