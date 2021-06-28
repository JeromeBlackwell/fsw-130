export const addContact = (contact) => {
    return {
        type: 'ADD_CONTACT',
        payload:  contact
    }
}

export const delContact =(contact) => {
    return {
        type: 'DEL_CONTACT',
        payload: contact
    }
}