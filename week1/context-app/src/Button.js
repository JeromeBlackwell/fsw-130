import React from 'react'
import { SupplyContextConsumer } from './SupplyContext.js'

const Mask = () => {
    return (
        <SupplyContextConsumer>
            {(context) => (
                <button onClick={context.switchSupply} className={`${context.supply}-supply`}>Switch Supply</button>
            )}
        </SupplyContextConsumer>
    )
}

export default Mask