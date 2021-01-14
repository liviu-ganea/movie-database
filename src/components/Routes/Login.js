import React, { Component } from 'react'
import './routes.css'

class Login extends Component {
    render () {
        return (
            <div className='container'>
                <h3 className='page-title'>About Us</h3>
                <div className='login-box'>
                    <label className='login-labels' htmlFor='nickname'>Login </label>
                    <input type='text' className='nickname-box' name='nickname'/>
                    <label className='login-labels' htmlFor='password'>Password </label>
                    <input type='password' className='password-box' name='password'/>
                </div>
            </div>
        )
    }
}

export default Login