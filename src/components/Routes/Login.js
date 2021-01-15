import React, { Component } from 'react'
import './routes.css'
import { loginAction } from '../../actions/userActions'
import { connect } from 'react-redux'

class Login extends Component {
    state = {
        nickname: '',
        password: ''
    }

    handleCLick = () => {
        let userName = this.props.user.nickname;
        let pw = this.props.user.password;
        if (this.state.nickname === userName && this.state.password === pw) {
            this.props.loginUser();
            this.props.history.push('/');
        }
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.id]: event.target.value
        })
    }

    render () {
        console.log(this.props);
        return (
            <div className='container page-container login-page'>
                <h3 className='page-title'>Log In User</h3>
                <div className='login-box'>
                    <div>
                        <label className='login-labels' htmlFor='nickname'>Login </label>
                        <input type='text' className='nickname-box' name='nickname' id='nickname' onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label className='login-labels' htmlFor='password'>Password </label>
                        <input type='password' className='password-box' name='password' id='password' onChange={this.handleChange}/>
                    </div>
                    <button className='login-button' onClick={this.handleCLick}>Login</button>
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
        loginUser: () => {dispatch(loginAction())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)