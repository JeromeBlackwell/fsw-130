import React from 'react'
import {connect} from 'react-redux'
import {BuyBoil} from '../redux.js'

function SeafoodBoilContainer (props) {
    return (
        <div>
            <h2>Number of Seafood Boils - {props.numberofBoils}</h2>
            <button onClick={props.BuyBoils}>Buy Seafood Boils</button>
            </div>
    )
}

const mapStateToProps = state => {
    return {
        numberofBoils: state.numberofBoils
    }
}

const mapDispatchToProps = dispatch => {
    return {
        BuyBoil: () => dispatch(BuyBoil())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(SeafoodBoilContainer)