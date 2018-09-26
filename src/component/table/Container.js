import TableComponent from './component/TableComponent';
import {connect} from "react-redux";
import deleteFormItem from "../../services/deleteFormItem";

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
            deleteFormItem(dispatch, id, authorization);
        },
        onChangeTableItem: (currentId) => dispatch({type: 'CHANGE_ITEM', currentId: currentId})
    }
);


export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);

