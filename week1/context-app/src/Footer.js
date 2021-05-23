import React from 'react'
import { SupplyContextConsumer } from './SupplyContext.js'

function Footer() {
    return (
        <SupplyContextConsumer>
            { context => (
                <div className={`${context.supply}-footer-supply`}>
                    <p className ={`${context.supply}-p-supply`}>&copy; Blackwell Medical Supplies 2021</p>
                </div>
        )}
        </SupplyContextConsumer>
    )
}

export default Footer