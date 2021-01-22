import { NavLink } from 'react-router-dom'

export const AddonButton = (props) => {
    const isAuthenticated = props.isAuthenticated;
    return isAuthenticated ? (<NavLink to='/add'>ADD MOVIE</NavLink>) : (null);
}