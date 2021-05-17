import React, { useContext } from 'react'
import { SupplyContextConsumer } from './SupplyContext.js'

const Mask = () => {
    return (
        <SupplyContextConsumer>
            {(context) => (
                <button onClick={context.switchSupply} className={`${context.Supply}=supply`}>Switch Supply</button>
            )}
        </SupplyContextConsumer>
    )
}

export default Mask