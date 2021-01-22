const initialState = {
    movies: [
        { key: 'jw2', title: 'John Wick 2', year: '2017', main_actor: 'Keanu Reeves', summary: `The hitman that's been retired then back then retired strikes again, this time against the Mafia.`, cover: '/john_wick_2.jpg' },
        { key: 'swrots', title: 'Star Wars Revenge of the Sith', year: '2005', main_actor: 'Ewan McGregor', summary: `Anakin betrays Space Jesus so General Kenobi is forced to Mustafar Anakin.`, cover: '/sw_rots.png' },
        { key: 'swtcw', title: 'Star Wars The Clone Wars', year: '2008 - 2020', main_actor: 'Ewan McGregor, Hayden Christensen', summary: `Yoda has finally overdosed on Ketamine, Mace Window hasn't been defenestrated yet and The Negotiator has proven himself incapable of falling to the Dark Side`, cover: '/sw_tcw.jpg' }
    ]
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){ 
        case('DELETE_MOVIE'):
            let newMovieList = state.movies.filter(movie => {
            return action.key !== movie.key
        })
            return {
                ...state,
                movies: newMovieList
            }
        case('LOG_IN'):
            let newUserState = action.isLoggedIn;
            return {
                ...state,
                user: {...state.user, isLoggedIn: newUserState}
            }
        case('ADD_MOVIE'):
            let newMovie = action.payload;
            return {
                ...state,
                movies: [...state.movies, newMovie]
            }            
        default: return state;
    }
}

export default rootReducer