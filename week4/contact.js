const redux = require('redux');

function addContact(contact){
    return {
        type: 'ADD_CONTACT',
        payload: contact 
    }
}

function delContact(contact){
    return {
        type: 'DEL_CONTACT',
        payload: contact 
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

function reducer(state = initialState, action) {
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

const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addContact({name:  'Gordon Ramsey', phone: '555-HELL-SKIT',email: 'ramsey.gordon@hells.com'}))
// store.dispatch(addContact({name:  'Michael Jackson', phone: '555-HELL-SKIT',email: 'ramsey.gordon@hells.com'}))
// store.dispatch(addContact({name:  'Gordon Ramsey', phone: '555-HELL-SKIT',email: 'ramsey.gordon@hells.com'}))
// store.dispatch(addContact({name:  'Gordon Ramsey', phone: '555-HELL-SKIT',email: 'ramsey.gordon@hells.com'}))

store.dispatch(addContact({name:  'Gordon Ramsey', phone: '555-HELL-SKIT',email: 'ramsey.gordon@hells.com'}))
// store.dispatch(addContact({name:  'Michael Jackson', phone: '555-HELL-SKIT',email: 'ramsey.gordon@hells.com'}))
