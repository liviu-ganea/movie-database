import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './routes.css'

class Home extends Component{
    render() {
        const { movies } = this.props;
        const movieList = movies.length ? ( movies.map(movie => {
                return (
                    <Link to={'/home/' + movie.id}>
                        <div className='movie-container'>
                            <img src={movie.coverAddress} alt={movie.title} />
                            <div className='movie-container-content'>
                                <h2 className='movie-title'>{movie.title}</h2>
                                <p className='movie-description'>{movie.description}</p>
                            </div>
                        </div>
                    </Link>
                )
            }
        )) : (<div className='waiting-for-movies'>Loading. Please wait</div>)
        return (
            <div className='container'>
                {movieList}
            </div>
        )
    }
}

export default Home