import { connect } from 'react-redux'

const isLogin = () => {
    if(this.props.user.isLoggedIn) {
        return true;
    }
    console.log('isLogin' + isLogin);
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(isLogin)