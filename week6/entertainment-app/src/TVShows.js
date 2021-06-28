import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addShow, delShow } from './actions.js'

function TVShows() {
    const shows = useSelector (state => state.shows)
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')

    return (
        <div className='TvWrapper'>
            <div className='mtvSpan'>
                <input
                    style={{width:'100%'}}
                    type='text'
                    name='title'
                    value={title}
                    placeholder='Title'
                    onChange={event => setTitle(event.target.value)}
                />
            </div>

            <div className='mtvCell'>
                <button className='mtvButtonBig' onClick={() => dispatch(addShow(title))}>+ Show</button>
                </div>

            <div className='mtvHeader'>TVShows:</div>
            {shows.map((showTitles, index) => (
                <div className='mtvSpan'id={index} key={index}>
                    {index+1}. {showTitles}
                    <button className='mtvButtonSmall' onClick={() => dispatch(delShow(index))}>-</button>
                </div>
            ))}
        
        </div>
    )
}
export default TVShows