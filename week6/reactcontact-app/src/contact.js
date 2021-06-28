import React from 'react'
import { connect } from 'react-redux'
import { addContact, delContact } from './Redux/action.js'

function Contact (props) {
    return (
        <div>
            <h3>Chef Jerome's Seafood Boils Togo</h3>
            {/* <button onClick ='{()=>{}}'>Order Up!!!</button> */}
            <button onClick =''>Order Up!!!</button>
        </div>

    )
}

const mapStateToProps = state => {
    return { numOfCrabBoils: state.crabBoil.numOfCrabBoils }

const mapDispatchToProps = dispatch => {
    return { buyCrabBoil: () => dispatch(buyCrabBoil()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)