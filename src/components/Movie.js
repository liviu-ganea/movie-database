import React, {Component} from 'react'
import { connect } from 'react-redux';
import { deleteMovieAction } from '../actions/movieActions'
import './Routes/routes.css'

class Movie extends Component {
    handleClick = () => {
        this.props.deleteMovie(this.props.movie.id);
        this.props.history.push('/');
    }

    render () {

        console.log(this.props);
        const isUser = this.props.user.isLoggedIn ? ( <button className='delete-movie-button' onClick={this.handleClick}>Delete</button> ) : (null)
        const theMovie = this.props.movie ? (
            <div className='movie-container'>
                <img src={this.props.movie.cover} alt={this.props.movie.title} className='movie-cover'/>
                <div className='movie-container-content'>
                    <h2 className='movie-title'>{this.props.movie.title}</h2>
                    <p className='movie-description'>{this.props.movie.summary}</p>
                    <div className='movie-data'>
                        <p className='movie-year'>{this.props.movie.year}</p>
                        <p className='movie-actor'>{this.props.movie.main_actor}</p>
                    </div>
                </div>
                {isUser}
            </div>
        ) : ( <div className="center">Getting data about the movie. Please wait.</div> );
        return (
            <div className='container page-container'>
                {theMovie}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.movie_id;
    return {
        user: state.user,
        movie: state.movies.find(movie => movie.id === id),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteMovie: (id) => { dispatch(deleteMovieAction(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie)