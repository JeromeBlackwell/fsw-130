const store = require('./Redux/index')

const {addFilm, deleteFilm, getFilms} = require('./Redux/films.js')

const {addTvShow, deleteTvShow, getTvShow} = require('./Redux/tvshows.js')

store.dispatch(addFilm('Tenet'))
store.dispatch(addFilm('Tron'))
store.dispatch(addFilm('Beetle Juice'))

store.dispatch(addTvShow('The Jeffersons'))
store.dispatch(addTvShow('Mork and Mendy'))
store.dispatch(addTvShow('The Brady Bunch'))

store.dispatch(deleteFilm('Tron'))
store.dispatch(deleteTvShow('The Brady Bunch'))


store.dispatch(getFilms())
store.dispatch(getTvShow())