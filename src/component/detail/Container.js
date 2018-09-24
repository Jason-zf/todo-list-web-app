import {connect} from "react-redux";
import DetailComponent from "./component/DetailComponent";

const mapStateToProps = ({login, data}) => ({
    formItems: data.formItems,
    item: data.item,
    authorization: login.authorization
});

const initState = (dispatch, authorization) => {
    fetch("/todos", {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AUTHORIZATION': authorization
        }
    }).then(function (response) {
        return response.json();
    }).then(function (myJson) {
        if (myJson.content !== undefined) {
            let items = myJson.content.map(item => ({
                id: item.id,
                name: item.name,
                tags: item.tags.map(tag => tag.name),
                dueDate: new Date(item.dueDate),
                status: item.status
            }));
            dispatch({type: 'INIT', items: items});
        } else {
            alert("empty todo list");
            dispatch({type: 'INIT', items: []});
        }
    });
};

const mapDispatchToProps = (dispatch) => ({
    onAddNewFormItem: (item, currentId, authorization) => {
        if (currentId === -1) {
            fetch("/todos", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'AUTHORIZATION': authorization
                },
                body: JSON.stringify({
                    "name": item.name,
                    "status": item.status,
                    "dueDate": item.dueDate,
                    "tags": item.tags.map(tag => ({name: tag}))
                })
            }).then(function (response) {
                // debugger
                initState(dispatch, authorization);
            });
        } else {
            fetch("/todos", {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'AUTHORIZATION': authorization
                },
                body: JSON.stringify({
                    "id": currentId,
                    "name": item.name,
                    "status": item.status,
                    "dueDate": item.dueDate,
                    "tags": item.tags.map(tag => ({name: tag}))
                })
            }).then(function (response) {
                // debugger
                initState(dispatch, authorization);
            });
        }
    },
    onChangeItem: (currentId) => dispatch({type: 'CHANGE_ITEM', currentId: currentId})
});


const app = connect(mapStateToProps, mapDispatchToProps)(DetailComponent);
export default app;