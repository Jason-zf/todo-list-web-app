const initTags = (dispatch, authorization) => {
    fetch("/api/tags", {
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
        if (myJson !== undefined) {
            let tags = myJson.map(tag => ({
                value: tag.name,
                label: tag.name
            }));
            dispatch({type: 'INIT_TAGS', tags: tags});
        }
    });
};

export default initTags;