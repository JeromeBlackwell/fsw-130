const addTvShow = (TvShow) => {
   return {
       type: 'ADD_TVSHOW',
       payload: TvShow
   }
}
const deleteTvShow = (TvShow) => {
    return {
        type: 'DELETE_TVSHOW',
        payload: TvShow
    }
}
const getTvShow = (TvShow) => {
    return {
        type: 'GET_TVSHOW',
        payload: TvShow
    }
}

const TvShowReducer = (TvShows = [], action) => {
    switch (action.type) {
        case 'ADD_TVSHOW':
            return [...TvShows, action.payload];
        case 'DELETE_TVSHOW': {
            const updatedArr = TvShows.filter((TvShow) => TvShow.toLowerCase() !== action.payload.toLowerCase());
            return updatedArr
        }
    case 'GET_TVSHOWS':
    return [...TvShow]
    default:
        return TvShows    
    }
};
module.exports = {addTvShow, deleteTvShow, getTvShow, TvShowReducer}