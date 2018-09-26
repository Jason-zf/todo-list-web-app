const searchFormItems = (dispatch, keywords, authorization) => {
    fetch(`/api/todos/search/${keywords}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'token': authorization
        }
    }).then(function (response) {
        return response.json();
    }).then(function (myJson) {
        debugger
        if (myJson.content !== undefined) {
            let items = myJson.content.map(item => ({
                id: item.id,
                name: item.name,
                tags: item.tags.map(tag => tag.name),
                dueDate: new Date(item.dueDate),
                status: item.status
            }));
            debugger
            dispatch({type: 'INIT', items: items});
        } else {
            alert("empty todo list");
            dispatch({type: 'INIT', items: []});
        }
    });
};

export default searchFormItems;