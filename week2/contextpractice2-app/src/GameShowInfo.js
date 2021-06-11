import React from 'react'
import { GameShowContextConsumer } from './GameShowContext.js'
import './GameShowApp.css'

function Show() {
    return (
        <GameShowContextConsumer>
            {context => ( 
                context.gameShow.map((gameShowInfo, index) => 
                    <div className='gameShows' id={index} key={index}>
                        <div className='td'>{gameShowInfo.title}</div>
                        <div className='td'>{gameShowInfo.host}</div>
                        <div className='td'>{gameShowInfo.creator}</div>
                        <div className='td'>{gameShowInfo.year}</div>
                    </div>
                )
            )}
        </GameShowContextConsumer>
    )
}

export default Show