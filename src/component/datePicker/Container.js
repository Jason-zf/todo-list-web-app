import {connect} from "react-redux";
import DatePickerComponent from "./component/DatePickerComponent";

const mapStateToProps = ({data}) => (
    {
        formItems: data.formItems,
        item: data.item,
        currentId: data.currentId,
        advSearch: data.advSearch
    }
);

export default connect(mapStateToProps)(DatePickerComponent);