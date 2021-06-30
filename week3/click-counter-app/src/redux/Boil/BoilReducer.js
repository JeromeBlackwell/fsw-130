const buy_SeafoodBoil from './Boil/BoilActions.js'

const initialState = {
    numberOfBoils: 10
}

const BoilReducer = (state = initialState, action) => {
    switch(action.type) {
        case const buy_SeafoodBoil from './Boil/BoilActions.js'
        : return {
            ...state,
            numberOfBoils: state.numberOfBoils -1
        }
        default: return state
    }
}

export default BoilReducer