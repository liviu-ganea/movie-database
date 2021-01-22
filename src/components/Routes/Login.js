import React from 'react'
import './routes.less'
import { loginAction } from '../../actions/userActions'
import { connect } from 'react-redux'
import { Button} from 'antd'
import { useAuth0 } from "@auth0/auth0-react"

const Login = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <div className='container page-container login-page'>
            <h3 className='page-title'>Log In User</h3>
            <div className='login-box'>
                <Button onClick={() => loginWithRedirect()} htmlType='submit' size='large' type='primary'>Login</Button>
            </div>
        </div>
    )
}

/*const layout = {
    labelCol: {
      span: 7,
    },
    wrapperCol: {
      span: 16,
    },
};

/*class Login extends Component {
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
        const { loginWithRedirect } = useAuth0();
        return (
            <div className='container page-container login-page'>
                <h3 className='page-title'>Log In User</h3>
                <div className='login-box'>
                    {/*<Form layout='horizontal' labelAlign='right' onFinish={this.handleCLick} >
                        <Form.Item {...layout} label="User Name" name="nickname" id='nickname' onChange={this.handleChange}>
                            <Input type='text'/>
                        </Form.Item>
                        <Form.Item {...layout} label="Password" name="password" id='password'  onChange={this.handleChange}>
                            <Input.Password/>
                        </Form.Item>
                        <Form.Item> }
                            <Button onClick={() => loginWithRedirect()} htmlType='submit' size='large' type='primary'>Login</Button>
                </div>
            </div>
        )
    }
}*/

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