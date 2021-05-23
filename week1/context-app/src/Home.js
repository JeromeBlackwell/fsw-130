import React from 'react'
import Button from './Button'
import {SupplyContextProvider} from './SupplyContext'
import Navbar from "./Navbar.js"
import "./SupplyApp.css"
import img from "./medsup.jpg"

function Med() {
    return (
        <div>
            <SupplyContextProvider>
            <h1>BLACKWELL MEDICAL SUPPLIES</h1>
            <Navbar />
            <img src={img} style={{width:'200px', padding:'30px'}} alt='Blackwell Medical Supplies '/>
            {/* <br>
            </br> */}
            <p>Blackwell Medical Supplies When and Wherever You Need It!</p>
                      
            <Button />
            </SupplyContextProvider>
        </div>
    )
}

export default Med