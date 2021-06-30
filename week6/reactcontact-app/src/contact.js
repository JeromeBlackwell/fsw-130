import React from 'react'
import { connect } from 'react-redux'
import { addContact, delContact } from './Redux/action.js'

function Contact (props) {
    return (
        <div>
            <h3></h3>
            <button onClick ={()=>{}}>Submit</button>
            {/* <button onClick =''>Submit</button>
        //  */}
        {props.contactList.map(contact =>{console.log (contact)
            return (
                <div>
                 name:   {contact.name}
                 <br></br>
                 phone:   {contact.phone}
                 <br></br>
                 email:    {contact.email}

                </div>

            )
        })}
        
        </div>
    )
}

const mapStateToProps = state => {
    return ({ contactList: state.contactList })
}   
// const mapDispatchToProps = dispatch => {
//         return { delContact: () => dispatch(delContact()) 
// }
export default connect(mapStateToProps)(Contact)