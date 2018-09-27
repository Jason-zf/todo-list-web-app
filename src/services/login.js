const login = (dispatch, username, password) => {
    fetch("/api/users/login", {
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
            console.log(response.headers.get("token"));
            dispatch({type: 'LOGIN', isAuthenticated: true, authorization: response.headers.get("token")});
        } else {
            dispatch({type: 'LOGIN', isAuthenticated: false, authorization: ""});
        }
    })
};

export default login;