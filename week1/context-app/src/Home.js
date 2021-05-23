import React from 'react'
import Button from './Button'
import {SupplyContextProvider} from './SupplyContext'

import "./SupplyApp.css"
import img from "./medsup.jpg"

function Med() {
    return (
        <div>
            <h1>BLACKWELL MEDICAL SUPPLIES</h1>
            <img src={img} style={{width:'300px', padding:'100px'}} alt='Blackwell Medical Supplies '/>
            <br>
            </br>
            <p>Blackwell Medical Supplies When and Wherever You Need It!</p>
            <SupplyContextProvider>          
            <Button />
            </SupplyContextProvider>
        </div>
    )
}

export default Med