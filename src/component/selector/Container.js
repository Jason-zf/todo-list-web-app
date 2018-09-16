import SelectorComponent from './component/SelectorComponent';
import {connect} from "react-redux";

const mapStateToProps = (state) => (
    {
        formItems:state.formItems,
        item: state.item,
        currentId:state.currentId
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        onChangeStatus: (status) => dispatch({type: 'CHANGE_STATUS', status: status})
    }
);


export default connect(mapStateToProps)(SelectorComponent);