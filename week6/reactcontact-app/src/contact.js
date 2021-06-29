import React from 'react'
import { connect } from 'react-redux'
import { addContact, delContact } from './Redux/action.js'

function Contact (props) {
    return (
        <div>
            <h3></h3>
            {/* <button onClick ='{()=>{}}'>Contact</button> */}
            <button onClick =''>Submit</button>
        </div>
    )
}

const mapStateToProps = state => {
    return { addContact: state.Contact.addContact }
const mapDispatchToProps = dispatch => {
    return { delContact: () => dispatch(delContact()) }
}}
export default connect; {
    mapStateToProps},
    mapDispatchToProps(Contact)