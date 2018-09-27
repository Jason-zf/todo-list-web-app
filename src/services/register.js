const register = (dispatch, username, password) => {
    fetch("/api/users/registration", {
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
};

export default register;
