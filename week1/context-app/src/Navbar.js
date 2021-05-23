import React from 'react'
import { SupplyContextConsumer } from './SupplyContext.js'


function Navbar() {
    return (
        <SupplyContextConsumer>
        { context => (
                <nav className={`${context.supply}-supply`}>
                    <ul className='nav-links'>
                        <li>About</li>
                        <li>Order</li>
                        <li>Parts</li>
                        <li>Contact</li>
                    </ul>
                </nav>
        )}
    </SupplyContextConsumer>
)}