import React, { Component } from 'react'
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import Home from './components/Routes/Home'
import About from './components/Routes/About'
import Login from './components/Routes/Login'
import Navbar from './components/navbar/Navbar'
import Movie from './components/Movie'

class App extends Component {
    render () {
        return (
            <Router>
                <div className='the-app'>
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={Home}></Route>
                        <Route path='/about' component={About}></Route>
                        <Route path='/login' component={Login}></Route>
                        <Route path='/:movie_id' component={Movie} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App