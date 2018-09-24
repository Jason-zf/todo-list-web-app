import SelectorComponent from './component/SelectorComponent';
import {connect} from "react-redux";
import moment from "moment";

const mapStateToProps = ({login, data}) => (
    {
        formItems: data.formItems,
        item: data.item,
        advSearch: data.advSearch,
        authorization: login.authorization,
        tags: data.tags
    }
);


export default connect(mapStateToProps)(SelectorComponent);