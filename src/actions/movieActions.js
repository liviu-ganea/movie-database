export const deleteMovieAction = (key) => {
    return {
        type: 'DELETE_MOVIE',
        key
    }
}

export const addMovieAction = (movie) => {
    return {
        type: 'ADD_MOVIE',
        payload: movie
    }
}