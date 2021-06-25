const redux = require('redux');

function addContactInfo(contactInfo){
    return {
        type: 'ADD_CONTACTINFO',
        payload: contactInfo 
    }
}

function delContactInfo(contactInfo){
    return {
        type: 'DEL_CONTACTINFO',
        payload: contactInfo 
    }
}

const initialState ={
    contactList:  [],
    contactInfo:
    {
        name:  '',
        phone:  '',
        email:  ''
    }

}

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_CONTACTINFO':
            return {
                ...state,
                contactsInfo:  action.payload,
                contactList:  [...state.contactList, action.payload]
            }
        case 'DEL_CONTACTINFO': {
            const updatedArr = state.contactList.filter( contactInfo =>contactInfo.name !== action.payload.name )
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

store.dispatch(addContactInfo({name:  'Gordon Ramsey', phone: '555-HELL-SKIT',email: 'ramsey.gordon@hells.com'}))
store.dispatch(addContactInfo({name:  'Michael Jackson', phone: '866-467-7851',email: 'michael.jackson@yahoo.com'}))
store.dispatch(addContactInfo({name:  'Jerome Blackwell', phone: '443-810-7221',email: 'blackwell.jerome@gmail.com'}))
store.dispatch(addContactInfo({name:  'Bill Cosby', phone: 'GET-MEE-OUTT',email: 'jellopuddingpops@jail.org'}))

store.dispatch(delContactInfo({name:  'Gordon Ramsey', phone: '555-HELL-SKIT',email: 'ramsey.gordon@hells.com'}))
store.dispatch(delContactInfo({name:  'Michael Jackson', phone: '866-467-7851',email: 'michael.jackson@yahoo.com'}))
