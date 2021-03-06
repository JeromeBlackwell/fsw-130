import React, { Component } from 'react'
import { GameShowContextConsumer } from './GameShow.jsext.js'
import './GameShowApp.css'

function Form() {
    return (
      <GameShowContextConsumer>
        {context => ( 
          <div>
            <br /><br />
              <form className="gameShow">
                  <div className='th' style={{gridColumn:"span 4"}}>My Favorite Game Show</div>

                  <input className='input' type='text' name='title' value={context.title} placeholder='Title' onChange={context.handleChange}/>
                  <input className='input' type='text' name='host' value={context.host} placeholder='Host' onChange={context.handleChange}/>
                  <input className='input' type='text' name='creator' value={context.creator} placeholder='Creator' onChange={context.handleChange}/>
                  <input className='input' type='text' name='year' value={context.year} placeholder='Year' onChange={context.handleChange}/>

                  <div style={{gridColumn:"span 3"}}></div>                                                                      
                  <input type='submit' onClick={(context.gameShowUpdate)} value='Submit'/>
              </form>
              <br />
          </div>
        )}
      </GameShowContextConsumer>
    )
}

export default Form