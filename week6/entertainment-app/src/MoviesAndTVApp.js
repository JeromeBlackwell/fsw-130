import { createStore } from 'redux'
import { BrowserRouter  as Router, Switch, Route } from 'react-router-dom'
import Nav from './Nav.js'
import TVShows from './TVShows.js'
import allReducers from './Reducers'
import './MoviesAndTVApp.css'

function MoviesAndTVApp() {
    return (
        <Router>
            <Provider store = {myStore}>
                <Nav />
                <div className='mtvContainer'>
                    <Switch>
                        <Route exact path='/Movies'><Movies /></Route>
                        <Route exact path='TvShows'><TVShows /></Route>
                    </Switch>
                </div>
            </Provider>
        </Router>
    )
}

export default MoviesAndTVApp