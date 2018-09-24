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
    },
    onChangeCurrentId: (currentId) => dispatch({type: 'CHANGE_CURRENT_ID', currentId: currentId})
});


const app = connect(mapStateToProps, mapDispatchToProps)(DetailComponent);
export default app;