import React, { Component } from 'react'
import './routes.css'
import { loginAction } from '../../actions/userActions'
import { connect } from 'react-redux'

class Login extends Component {
    handleCLick = () => {
        let userName = this.props.user.nickname;
        let pw = this.props.user.password;
        const nicknameBox = document.getElementById('nickname').textContent;
        const passwordBox = document.getElementById('password').textContent.trim;
        /*if (nicknameBox === userName && passwordBox === pw) {*/
            this.props.loginUser(this.props.user.isLoggedIn = true);
            this.props.history.push('/');
        //}
    }
    render () {
        console.log(this.props);
        return (
            <div className='container page-container login-page'>
                <h3 className='page-title'>Log In User</h3>
                <div className='login-box'>
                    <div>
                        <label className='login-labels' htmlFor='nickname'>Login </label>
                        <input type='text' className='nickname-box' name='nickname' id='nickname'/>
                    </div>
                    <div>
                        <label className='login-labels' htmlFor='password'>Password </label>
                        <input type='password' className='password-box' name='password' id='pasword'/>
                    </div>
                    <button className='login-button' onClick={this.handleClick}>Login</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (isLoggedIn) => {dispatch(loginAction(isLoggedIn))}
    }
}

export default connect(mapDispatchToProps, mapStateToProps)(Login)