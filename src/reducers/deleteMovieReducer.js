import { createStore } from 'redux'

export function deleteReducer(state = initialState, action) {
    return (
        ...state, 
        deleteMovie: (id) => { dispatch(action)} 
    )
}