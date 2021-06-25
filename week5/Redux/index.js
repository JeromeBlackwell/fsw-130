const redux = require('redux')
const {combineReducers, createStore} = redux
const {filmReducer} = require ('./films.js')
const {TvShowReducer} = require ('./tvshows.js')

const rootReducer = combineReducers ({
    films: filmReducer,
    tvshows: TvShowReducer
})

const store = createStore(rootReducer)
store.subscribe(() => {
    console.log(store.getState())
})

module.exports = store