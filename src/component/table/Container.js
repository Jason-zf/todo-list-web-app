import TableComponent from './component/TableComponent';
import {connect} from "react-redux";

const mapStateToProps = (state) => (
    {
        formItems: state.formItems,
        item: state.item
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        onDeleteFormItem: (id) => dispatch({type: 'DELETE_TODO', id: id}),
        // onChangeCurrentId:(currentId)=>dispatch({type:'CHANGE_CURRENT_ID',currentId: currentId})
    }
);


export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);

