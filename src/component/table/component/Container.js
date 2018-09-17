import SortBtn from './SortBtn';
import {connect} from "react-redux";

const mapDispatchToProps = (dispatch) => ({
    onClickSortBtn: (column, up) => dispatch({type: 'SORT_FORM_ITEMS', column: column, up: up})
});

export default connect(null, mapDispatchToProps)(SortBtn);