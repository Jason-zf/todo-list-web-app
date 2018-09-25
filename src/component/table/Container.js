import TableComponent from './component/TableComponent';
import {connect} from "react-redux";
import initFormItems from "../../services/initFormItems";

const mapStateToProps = ({login, data}) => (
    {
        formItems: data.formItems,
        item: data.item,
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
                initFormItems("/todos",dispatch, authorization);
            });
        },
        onChangeTableItem: (currentId) => dispatch({type: 'CHANGE_ITEM', currentId: currentId})
    }
);


export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);

