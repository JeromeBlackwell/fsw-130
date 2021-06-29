import { combineReducers } from "redux"
import movieReducer from "./Movies"
import showReducer from "./Shows"

const allReducers = combineReducers({
    movies:  movieReducer,
    shows: showReducer
})

export default allReducers
