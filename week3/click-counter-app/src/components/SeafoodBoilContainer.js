import React from 'react'
import {connect} from 'react-redux'
import {Buy_SeafoodBoil} from '../redux/Boil/Boiltype'

function SeafoodBoilContainer (props) {
    return (
        <div>
            <h3>Number of Seafood Boils - {props.numberOfBoils}</h3>
            <button onClick={props.BoilActions}>Buy Seafood Boils</button>
            </div>
    )
}

const mapStateToProps = state => {
    return {
        numberOfBoils: state.numberOfBoils
    }
}

const mapDispatchToProps =  dispatch => {
    return {
        Buy_SeafoodBoil: () => dispatch(Buy_SeafoodBoil())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(SeafoodBoilContainer)