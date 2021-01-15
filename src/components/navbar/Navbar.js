import React, { Component } from 'react'
import { Link, withRouter, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import './navbar.css'

class Navbar extends Component {
    render () {
        const isLoggedIn = this.props.isLoggedIn;
        const loginButton = isLoggedIn ? (() => {
            return `Hello ${this.props.user.nickname}`
        }) : (<NavLink to='/login' activeClassName='links-active'>LOGIN</NavLink>);
        return (
            <nav className='navbar-wrap'>
                    <div className='navbar-container'>
                        <ul className='menu-list'>
                            <li><NavLink exact to='/' activeClassName='links-active'>HOME</NavLink></li>
                            <li><NavLink to='/about' activeClassName='links-active'>ABOUT</NavLink></li>
                        </ul>
                        {loginButton}
                    </div>
            </nav>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps)(Navbar)