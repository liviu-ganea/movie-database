import { Button } from 'antd'
import { withAuth0 } from '@auth0/auth0-react'
import '../Routes/routes.less'

const LoginButton = (props) => {
    const { loginWithRedirect } = props.auth0;
    return <Button onClick={() => loginWithRedirect()} htmlType='submit' size='large' type='text'>Login</Button>
}

export default withAuth0(LoginButton);