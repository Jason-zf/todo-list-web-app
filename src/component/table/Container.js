import TableComponent from './component/TableComponent';
import {connect} from "react-redux";

const mapStateToProps = (state) => (
    {
        formItems: state.formItems,
        item: state.item,
        searchResult:state.searchResult
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        onDeleteFormItem: (id) => dispatch({type: 'DELETE_TODO', id: id}),
    }
);


export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);

