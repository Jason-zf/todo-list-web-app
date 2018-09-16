import SelectorComponent from './component/SelectorComponent';
import {connect} from "react-redux";

const mapStateToProps = (state) => (
    {
        item: state.item
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        onChangeStatus: (status) => dispatch({type: 'CHANGE_STATUS', status: status})
    }
);


export default connect(mapStateToProps)(SelectorComponent);