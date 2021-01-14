import { createStore } from 'redux'

const initialState = {
    movies: [
        { id: '1', movie_title: 'John Wick Chapter 2', year: '2017', main_actor: 'Keanu Reeves', summary: `The hitman that's been retired then back then retired strikes again, this time against the Mafia.`, cover: '%PUBLIC_URL%/john_wick_2.png' },
        { id: '2', movie_title: 'Star Wars Revenge of the Sith', year: '2005', main_actor: 'Ewan McGregor', summary: `Anakin betrays Space Jesus so General Kenobi is forced to Mustafar Anakin.`, cover: '%PUBLIC_URL%/sw_rots.png' },
        { id: '3', movie_title: 'Star Wars The Clone Wars', year: '2008 - 2020', main_actor: 'Ewan McGregor, Hayden Christensen', summary: `Yoda has finally overdosed on Ketamine, Mace Window hasn't been defenestrated yet and The Negotiator has proven himself incapable of falling to the Dark Side`, cover: '%PUBLIC_URL%/sw_tcw.png' }
    ],
    user: {
        isLoggedIn: 'false',
        nickname: 'obi_wan',
        password: '12345'
    }
}

const rootReducer = (state = initState, action) => {
    switch(action.type){ 
        case(action.type === 'DELETE_MOVIE'):
            let newMovieList = state.movies.filter(movie => {
            return action.id !== movie.id
        })
            return {
                ...state,
                movies: newMovieList
            }
        case(action.type === 'LOG_IN'):
            let newUser = ...user, action.isLoggedIn
            return (
                ...state, 
                user: Object.assign(user, action.isLoggedIn);
            )
    }
    return state;
}