import {Buy_SeafoodBoil} from './Boiltype'



const initialState = {
    numberOfBoils: 10
}

const BoilReducer = (state = initialState, action) => {
    switch(action.type) {
        case Buy_SeafoodBoil: return {
            ...state,
            numberOfBoils: state.numberOfBoils - 1
        }
        default: return state
    }
}

export default BoilReducer