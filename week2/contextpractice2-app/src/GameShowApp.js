import React from 'react'
import Form from './GameShowForm.js'
import Headings from './Headings.js'
import Listings from './Listings.js'
import {GameShowContextProvider} from './GameShowContext.js'

function GameShowApp() {
  return (
    <div>
      <GameShowContextProvider>
        <Form />
        <Headings />
        <Listings />
      </GameShowContextProvider>
    </div>
  )
}

export default GameShowApp