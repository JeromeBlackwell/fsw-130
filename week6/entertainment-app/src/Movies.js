import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addMovie, delMovie } from './actions'

function Movies() {
    const movies = useSelector(state => state.movies)
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')

    return (
        <div className='mWrapper'>
            <div className='entSpan'>
                <input
                    style={{width:'100%'}}
                    type='text'
                    name='title'
                    value={title}
                    placeholder='TITLE'
                    onChange={event => setTitle(event.target.value)}
                />
            </div>

            <div className='entCell'>
                <button className='mtvButtonBig' onClick={() => dispatch(addMovie(title))}>+ Movie</button>
            </div>

            <div className='entHeader'>Movies</div>
            {movies.map((movieTitles, index) => (
                   <div className='entSpan' id={index} key={index}>
                        {index+1}. {movieTitles}
                        <button className='entButtonSmall' onClick={() => dispatch(delMovie(index))}>-</button>
                    </div>
            ))}

        </div>
    )
}

export default Movies