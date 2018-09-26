import initFormItems from "./initFormItems";

const deleteFormItem = (dispatch,id, authorization) => {
    fetch(`/api/todos/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'token': authorization
        }
    }).then(function (response) {
        debugger
        console.log(response);
        initFormItems("/todos", dispatch, authorization);
    });
};

export default deleteFormItem;