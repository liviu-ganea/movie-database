import React, { Component } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from '../../../Redux/poketimes/src/components/Home'
import Login from './components/Routes/Login'
import Navbar from './components/navbar/Navbar'

class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <div className='the-app'>
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={Home}>HOME</Route>
                        <Route path='/about' component={About}>ABOUT</Route>
                        <Route path='/login' component={Login}>LOGIN</Route>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App