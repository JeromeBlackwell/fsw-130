import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addMovie, delMovie } from './actions'

function Movies() {
    const movies = useSelector(state => state.movies)
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')

    return (
        <div className='mWrapper'>
            <div className='mtvSpan'>
                <input
                    style={{width:'100%'}}
                    type='text'
                    name='title'
                    value={title}
                    placeholder='TITLE'
                    onChange={event => setTitle(event.target.value)}
                />
            </div>

            <div className='mtvCell'>
                <button className='mtvButtonBig' onClick={() => dispatch(addMovies(title))}>+ Movie</button>
            </div>

            <div className='mtvHeader'>Movies</div>
            {movies.map((movieTitles, index) => (
                   <div className='mtvSpan' id={index} key={index}>
                        {index+1}. {movieTitles}
                        <button className='mtvButtonSmall' onClick={() => dispatch(delMovie(index))}>-</button>
                    </div>
            ))}

        </div>
    )
}

export default Movies