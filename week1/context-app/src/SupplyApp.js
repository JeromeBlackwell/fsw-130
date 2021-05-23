import React from 'react'
import ReactDom from 'react-dom'
import Navbar from './Navbar.js'
import Home from './Home.js'
import Footer from './Footer.js'
import './SupplyApp.css'

import { SupplyContextProvider } from './SupplyContext.js'

function SupplyApp () {
    return (
        <SupplyContextProvider>
            <Navbar />
            <Home />
            <Footer />
        </SupplyContextProvider>
    )
}

export default SupplyApp