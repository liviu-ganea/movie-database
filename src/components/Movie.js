import React, {Component} from 'react'
import { connect } from 'react-redux';
import deleteMovieAction from '../actions/movieActions'
import { connect } from 'react-redux'

class Movie extends Component {

    render () {
        const theMovie = this.props.movie ? (
            <div className='movie-container'>
                <img src={movie.cover} alt={movie.title} />
                <div className='movie-container-content'>
                    <h2 className='movie-title'>{movie.title}</h2>
                    <p className='movie-description'>{movie.description}</p>
                </div>
                <button className='delete-movie-button' onClick={this.handleClick}>Delete</button>
            </div>
        ) : ( <div className="center">Getting data about the movie. Please wait.</div> );
        return (
            <div className='container'>
                {theMovie}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.movie_id;
    return {
        post: state.movies.find(movie => movie.id === id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteMovie: (id) => { dispatch(deleteMovieAction(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie)