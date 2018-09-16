import TableComponent from './component/TableComponent';
import {connect} from "react-redux";

const mapStateToProps = (state) => (
    {
        formItems: state.formItems,
        item:state.item
    }
);


export default connect(mapStateToProps)(TableComponent);

