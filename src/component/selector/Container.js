import SelectorComponent from './component/SelectorComponent';
import {connect} from "react-redux";

const mapStateToProps = (state) => (
    {
        formItems:state.formItems,
        item: state.item,
        currentId:state.currentId,
        advSearch:state.advSearch
    }
);

export default connect(mapStateToProps)(SelectorComponent);