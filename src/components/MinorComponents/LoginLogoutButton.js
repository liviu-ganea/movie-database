import { Button } from 'antd'
import LoginButton from './LoginButton'
import '../Routes/routes.less'

export const LoginLogoutButton = (props) => {
    const isAuthenticated = props.isAuthenticated;
    const loginWithRedirect = props.loginWithRedirect;
    const user = props.user;
    const logout = props.logout;
    return isAuthenticated ? (<Button 
        onClick={() => logout({ returnTo: window.location.origin })} 
        htmlType='submit' size='large' type='text'>Log Out {user.name}</Button>) : (<LoginButton loginWithRedirect={loginWithRedirect} />);
}