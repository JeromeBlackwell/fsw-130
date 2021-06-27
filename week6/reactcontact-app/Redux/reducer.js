const initialState ={
    contactList: [],
    contacts:
    {
        name: '',
        phone: '',
        mail: ''
    }
}

function Reducer(state =initialState, action) {
    switch(action.type) {
        case 'ADD_CONTACT':
            return {
                ...state,
                contact: action.payload,
                contactList: [...state.contactList,action.payload]
            }
        case 'DEL_CONTACT': {
        const updateArr = state.contactList.filter(contact => contact.name !== action.payload.name)
            return {
                ...state,
                contactList: updateArr
            }
        }
    default:
        return state
    }
}

export default Reducer