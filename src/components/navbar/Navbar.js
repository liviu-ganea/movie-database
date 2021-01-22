import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'antd'
import { withAuth0 } from '@auth0/auth0-react'
import { LoginLogoutButton } from '../MinorComponents/LoginLogoutButton'
import { AddonButton } from '../MinorComponents/AddonButton'
import '../Routes/routes.less'
import './navbar.less'

class Navbar extends Component {
    render () {
        const { user } = this.props.auth0;
        const { isAuthenticated } = this.props.auth0;
        const { logout } = this.props.auth0;

        return (
            <div className='menu-container'>
                <Menu mode='horizontal'>
                    <Menu.Item><NavLink exact to='/'>HOME</NavLink></Menu.Item>
                    <Menu.Item><NavLink to='/about'>ABOUT</NavLink></Menu.Item>
                    <Menu.Item><AddonButton isAuthenticated={isAuthenticated} /></Menu.Item>
                </Menu>
                <Menu mode='horizontal'>
                    <Menu.Item><LoginLogoutButton isAuthenticated={isAuthenticated} logout={logout} user={user} /></Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default withAuth0(Navbar)