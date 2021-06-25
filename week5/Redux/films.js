const addFilm = (film) => {
    return {
        type: "ADD_FILM",
        payload: film,
    };
};
const deleteFilm = (film) => {
    return {
        type:'DELETE_FILM',
        payload: film,
    };
};
const getFilms = (film) => {
    return {
        type: 'GET_FILMS',
        payload: film,
    };
};

const filmReducer = (films =[], action) => {
    switch (action.type) {
        case 'ADD_FILM':
            return [...films,action.payload];
        case 'DELETE_FILMS': {
            const updatedArr = films.filter((film) => film.toLowerCase() !== action.payload.toLowerCase());
            return updatedArr
        }
        case 'GET_FILMS':
        return [...films]
        default:
           return films
    }
};
module.exports = {addFilm, deleteFilm, getFilms, filmReducer}