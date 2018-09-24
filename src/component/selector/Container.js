import SelectorComponent from './component/SelectorComponent';
import {connect} from "react-redux";

const mapStateToProps = ({data}) => (
    {
        formItems: data.formItems,
        item: data.item,
        advSearch: data.advSearch
    }
);

export default connect(mapStateToProps)(SelectorComponent);