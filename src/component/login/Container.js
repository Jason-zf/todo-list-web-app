import LoginComponent from './component/LoginComponent';
import {connect} from "react-redux";

const mapStateToProps = ({login}) => ({
        logged: login.isAuthenticated
    }
);

const mapDispatchToProps = (dispatch) => ({
    onLogin: (username, password) => dispatch({type: 'LOGIN', isSucceed: true, username: username, password: password}),
    onRegister: (username, password) => dispatch({type: 'REGISTER', username: username, password: password})
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);