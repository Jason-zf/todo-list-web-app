import TableComponent from './component/TableComponent';
import {connect} from "react-redux";

const mapStateToProps = ({data}) => (
    {
        formItems: data.formItems,
        item: data.item,
        searchResult: data.searchResult
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        onDeleteFormItem: (id) => dispatch({type: 'DELETE_TODO', id: id}),
    }
);


export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);

