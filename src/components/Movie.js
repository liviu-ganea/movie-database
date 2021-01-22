import React, {Component} from 'react'
import { connect } from 'react-redux';
import { deleteMovieAction } from '../actions/movieActions'
import { withAuth0 } from '@auth0/auth0-react'
import { DeleteMovieButton } from './MinorComponents/DeleteMovieButton'
import './Routes/routes.less'

class Movie extends Component {
    handleClick = () => {
        this.props.deleteMovie(this.props.movie.key);
        this.props.history.push('/');
    }
    
    render () {
        const { isAuthenticated } = this.props.auth0;
        const theMovie = this.props.movie ? (
            <div className='movie-container'>
                <div className='general-content-container'>
                    <img src={process.env.PUBLIC_URL + this.props.movie.cover} alt={this.props.movie.title} className='movie-cover'/>
                    <div className='movie-container-content'>
                        <h2 className='movie-title'>{this.props.movie.title}</h2>
                        <p className='movie-description'>{this.props.movie.summary}</p>
                        <div className='movie-data'>
                            <p className='movie-year'>{this.props.movie.year}</p>
                            <p className='movie-actor'>{this.props.movie.main_actor}</p>
                        </div>
                    </div>
                </div>
                <DeleteMovieButton isAuthenticated={isAuthenticated} handleClick={this.handleClick}/>
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
    let key = ownProps.match.params.movie_id;
    return {
        movie: state.movies.find(movie => movie.key === key),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteMovie: (key) => { dispatch(deleteMovieAction(key))}
    }
}

export default withAuth0(connect(mapStateToProps, mapDispatchToProps)(Movie))