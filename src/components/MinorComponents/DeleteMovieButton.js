import { Button } from 'antd'
import '../Routes/routes.less'

export const DeleteMovieButton = (props) => {
    const isAuthenticated = props.isAuthenticated;
    return isAuthenticated ? ( <Button type='primary' size='large' onClick={props.handleClick}>Delete</Button>) : (null)
}