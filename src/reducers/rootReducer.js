import { createStore } from 'redux'

const initialState = {
    movies: [
        { id: '1', title: 'John Wick Chapter 2', year: '2017', main_actor: 'Keanu Reeves', summary: `The hitman that's been retired then back then retired strikes again, this time against the Mafia.`, cover: '../john_wick_2.jpg' },
        { id: '2', title: 'Star Wars Revenge of the Sith', year: '2005', main_actor: 'Ewan McGregor', summary: `Anakin betrays Space Jesus so General Kenobi is forced to Mustafar Anakin.`, cover: '../sw_rots.png' },
        { id: '3', title: 'Star Wars The Clone Wars', year: '2008 - 2020', main_actor: 'Ewan McGregor, Hayden Christensen', summary: `Yoda has finally overdosed on Ketamine, Mace Window hasn't been defenestrated yet and The Negotiator has proven himself incapable of falling to the Dark Side`, cover: '../sw_tcw.jpg' }
    ],
    user: {
        isLoggedIn: 'false',
        nickname: 'obi_wan',
        password: '12345'
    }
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){ 
        case('DELETE_MOVIE'):
            let newMovieList = state.movies.filter(movie => {
            return action.id !== movie.id
        })
            return {
                ...state,
                movies: newMovieList
            }
        case('LOG_IN'):
            let newUserState = action.isLoggedIn;
            return {
                ...state,
                user: {...state.user, newUserState}
            }
        default: return state;
    }
    return state;
}

export default rootReducer