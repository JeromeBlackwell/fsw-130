const redux = require('redux');

function addContact(Contact){
    return {
        type: 'ADD_CONTACT',
        payload: Contact 
    }
}

function delContact(Contact){
    return {
        type: 'DEL_CONTACT',
        payload: Contact 
    }
}

const initialState ={
    contactList:  [],
    contact:
    {
        name:  '',
        phone:  '',
        email:  ''
    }

}

function Reducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts:  action.payload,
                contactList:  [...state.contactList, action.payload]
            }
        case 'DEL_CONTACT': {
            const updatedArr = state.contactList.filter( contact =>contact.name !== action.payload.name )
            return {
                ...state,
                contactList: updatedArr
            }
        }
        default:
            return state
    }
}

// const store = redux.createStore(reducer)
// store.subscribe(() => {
//     console.log(store.getState())
// })

// store.dispatch(addContact({name:  'Gordon Ramsey', phone: '555-HELL-SKIT',email: 'ramsey.gordon@hells.com'}))
// store.dispatch(addContact({name:  'Michael Jackson', phone: '866-467-7851',email: 'michael.jackson@yahoo.com'}))
// store.dispatch(addContact({name:  'Jerome Blackwell', phone: '443-810-7221',email: 'blackwell.jerome@gmail.com'}))
// store.dispatch(addContact({name:  'Bill Cosby', phone: 'GET-MEE-OUTT',email: 'jellopuddingpops@jail.org'}))

// store.dispatch(addContact({name:  'Gordon Ramsey', phone: '555-HELL-SKIT',email: 'ramsey.gordon@hells.com'}))
// store.dispatch(addContact({name:  'Michael Jackson', phone: '866-467-7851',email: 'michael.jackson@yahoo.com'}))

export default Reducer