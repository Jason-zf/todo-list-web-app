import TableComponent from './component/TableComponent';
import {connect} from "react-redux";
import initFormItems from "../reducer/initFormItems";

const mapStateToProps = ({login, data}) => (
    {
        formItems: data.formItems,
        item: data.item,
        searchResult: data.searchResult,
        authorization: login.authorization
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        onDeleteFormItem: (id, authorization) => {
            console.log(id);
            console.log(authorization);
            fetch(`/todos/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'AUTHORIZATION': authorization
                }
            }).then(function (response) {
                debugger
                console.log(response);
                initFormItems(dispatch, authorization);
            });
        },
        onChangeItem: (currentId) => dispatch({type: 'CHANGE_ITEM', currentId: currentId})
    }
);


export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);

