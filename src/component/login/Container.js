import LoginComponent from './component/LoginComponent';
import {connect} from "react-redux";

const mapStateToProps = ({login}) => ({
        logged: login.isAuthenticated
    }
);

const mapDispatchToProps = (dispatch) => ({
    onLogin: (username, password) => {
        fetch("/login", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "name": username,
                "password": password
            })
        }).then(function (response) {
            if (response.status === 200) {
                dispatch({type: 'LOGIN', isAuthenticated: true, authorization: response.headers.get("Authentication")});
            } else {
                dispatch({type: 'LOGIN', isAuthenticated: false, authorization: ""});
            }
        })
    },
    onRegister: (username, password) => {
        fetch("/registration", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "name": username,
                "password": password
            })
        }).then(function (response) {
            if (response.status === 200) {
                alert("Register successfully!!!");
                dispatch({type: 'REGISTER'});
            } else {
                alert("Register failed!!!");
                dispatch({type: 'REGISTER'});
            }
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);