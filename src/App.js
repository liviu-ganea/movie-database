import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import Home from './components/Routes/Home'
import About from './components/Routes/About'
import Navbar from './components/navbar/Navbar'
import Movie from './components/Movie'
import Addon from './components/Routes/Addon'
import { PublicRoute, PrivateRoute } from 'react-private-public-route'
import { withAuth0 } from '@auth0/auth0-react'

class App extends Component {
    render () {
        const { isAuthenticated } = this.props.auth0;
        return (
            <Router>
                <div className='the-app'>
                    <Navbar />
                    <Switch>
                        <PublicRoute restricted={false} exact path='/' component={Home}></PublicRoute>
                        <Route path='/about' component={About}></Route>
                        <PrivateRoute isAuthenticated={isAuthenticated} restricted={false} path='/add' component={Addon} redirect='/' exact></PrivateRoute>
                        <Route path='/:movie_id' component={Movie} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default withAuth0(connect(mapStateToProps)(App))