const initTags = (dispatch, authorization) => {
    fetch("/tags", {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AUTHORIZATION': authorization
        }
    }).then(function (response) {
        return response.json();
    }).then(function (myJson) {
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