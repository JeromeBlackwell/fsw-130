import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addShow, delShow } from './actions'

function TVShows() {
    const shows = useSelector (state => state.shows)
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')

    return (
        <div className='entvWrapper'>
            <div className='entSpan'>
                <input
                    style={{width:'100%'}}
                    type='text'
                    name='title'
                    value={title}
                    placeholder='Title'
                    onChange={event => setTitle(event.target.value)}
                />
            </div>

            <div className='entCell'>
                <button className='entButtonBig' onClick={() => dispatch(addShow(title))}>+ Show</button>
                </div>

            <div className='entHeader'>TVShows:</div>
            {shows.map((showTitles, index) => (
                <div className='entSpan'id={index} key={index}>
                    {index+1}. {showTitles}
                    <button className='entButtonSmall' onClick={() => dispatch(delShow(index))}>-</button>
                </div>
            ))}
        
        </div>
    )
}
export default TVShows