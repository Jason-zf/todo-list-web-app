import AdvSearchComponent from './component/AdvSearchComponent';
import {connect} from "react-redux";

const mapDispatchToProps = (dispatch) => ({
    onClickAdvSearchBtn: (isClickOkBtn) => dispatch({type: 'ADVANCE_SEARCH',isClickOkBtn:isClickOkBtn})
});

export default connect(null, mapDispatchToProps)(AdvSearchComponent);