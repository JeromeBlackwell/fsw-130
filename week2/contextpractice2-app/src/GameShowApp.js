import React from 'react'
import Form from './EntertainmentForm.js'
import Headings from './Headings.js'
import Listings from './Listings.js'
import {MovieContextProvider} from './EntertainmentContext.js'

function EntertainmentApp() {
  return (
    <div>
      <MovieContextProvider>
        <Form />
        <Headings />
        <Listings />
      </MovieContextProvider>
    </div>
  )
}

export default EntertainmentApp