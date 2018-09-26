import LoginComponent from './component/LoginComponent';
import {connect} from "react-redux";
import login from "../../services/login";
import register from "../../services/register";

const mapStateToProps = ({login}) => ({
        logged: login.isAuthenticated
    }
);

const mapDispatchToProps = (dispatch) => ({
    onLogin: (username, password) => {
        login(dispatch, username, password);
    },
    onRegister: (username, password) => {
        register(dispatch, username, password);
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);