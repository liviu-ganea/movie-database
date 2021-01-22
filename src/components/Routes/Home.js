import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './routes.less'

class Home extends Component{
    render() {
        const { movies } = this.props;
        const movieList = movies.length ? ( movies.map(movie => {
                return (
                    <Link to={'/' + movie.key} key={movie.key}>
                        <div className='movie-container'>
                            <img src={process.env.PUBLIC_URL + movie.cover} alt={movie.title} className='movie-cover home-page-movie-cover'/>
                            <div className='movie-container-content'>
                                <h2 className='movie-title'>{movie.title}</h2>
                                <p className='movie-description'>{movie.summary}</p>
                                <div className='movie-data home-page-movies'>
                                    <p className='movie-year'>{movie.year}</p>
                                    <p className='movie-actor'>{movie.main_actor}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            }
        , )) : (<div className='waiting-for-movies'>Loading. Please wait</div>)
        return (
            <div className='container page-container'>
                {movieList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      movies: state.movies
    }
  }

export default connect(mapStateToProps)(Home)