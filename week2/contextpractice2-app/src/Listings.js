import React from 'react'
import { GameShowContextConsumer } from './GameShowContext.js'
import './GameShowApp.css'

function Listings() {
    return (
        <GameShowContextConsumer>
            {context => ( 
                context.GameShow.map((GameShowInfo, index) => 
                    <div className='games' id={index} key={index}>
                        <div className='td'>{GameShowInfo.title}</div>
                        <div className='td'>{GameShowInfo.host}</div>
                        <div className='td'>{GameShowInfo.creator}</div>
                        <div className='td'>{GameShowInfo.year}</div>
                    </div>
                )
            )}
        </GameShowContextConsumer>
    )
}

export default Listings