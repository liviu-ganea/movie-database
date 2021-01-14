import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './components/navbar/navbar.css'

class Navbar extends Component {
    render () {
        const isLoggedIn = this.props.isLoggedIn;
        const loginButton = isLoggedIn ? (() => {
            return `Hello ${loginState.nickname}`
        }) : (<Link to='/login'>LOGIN</Link>);
        <nav className='navbar-wrap'>
                <div className='navbar-container'>
                    <ul className='menu-list'>
                        <li><Link exact to='/'>HOME</Link></li>
                        <li><Link to='/about'>ABOUT</Link></li>
                    </ul>
                    {loginButton}
                </div>
        </nav>
    }
}

export default Navbar