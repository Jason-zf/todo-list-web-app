import moment from "moment";

const initFormItems = (server, dispatch, authorization) => {
    fetch(server, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AUTHORIZATION': authorization
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
                dueDate: moment(item.dueDate),
                status: item.status
            }));
            dispatch({type: 'INIT', items: items});
        } else {
            alert("empty todo list");
            dispatch({type: 'INIT', items: []});
        }
    });
};

export default initFormItems;