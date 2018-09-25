import {connect} from "react-redux";
import DetailComponent from "./component/DetailComponent";
import initFormItems from "../../services/initFormItems";
import initTags from "../../services/initTags";

const mapStateToProps = ({login, data}) => ({
    formItems: data.formItems,
    item: data.item,
    authorization: login.authorization
});


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
                initFormItems("/todos", dispatch, authorization);
                initTags(dispatch, authorization);
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
                initFormItems("/todos", dispatch, authorization);
                initTags(dispatch, authorization);
            });
        }
    },
    onChangeItem: (currentId) => dispatch({type: 'CHANGE_ITEM', currentId: currentId})
});


export default connect(mapStateToProps, mapDispatchToProps)(DetailComponent);