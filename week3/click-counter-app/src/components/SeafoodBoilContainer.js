import React from 'react'
import {connect} from 'react-redux'
import {Buy_SeafoodBoil} from '../redux/Boil/Boiltype'

function SeafoodBoilContainer (props) {
    return (
        <div>
            <h3>Number of Seafood Boils {props.numberofBoils}</h3>
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
        Buy_SeafoodBoil: () => dispatch(Buy_SeafoodBoil())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(SeafoodBoilContainer)