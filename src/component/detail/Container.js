import {connect} from "react-redux";
import DetailComponent from "./component/DetailComponent";
import updateFormItem from "../../services/updateFormItem";
import createFormItem from "../../services/createFormItem";

const mapStateToProps = ({login, data}) => ({
    formItems: data.formItems,
    item: data.item,
    authorization: login.authorization
});


const mapDispatchToProps = (dispatch) => ({
    onAddNewFormItem: (item, currentId, authorization) => {
        if (currentId === -1) {
            createFormItem(dispatch, authorization, item);
        } else {
            updateFormItem(dispatch, authorization, currentId, item);
        }
    },
    onChangeItem: (currentId) => dispatch({type: 'CHANGE_ITEM', currentId: currentId})
});


export default connect(mapStateToProps, mapDispatchToProps)(DetailComponent);