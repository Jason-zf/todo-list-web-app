import {connect} from "react-redux";
import DatePickerComponent from "./component/DatePickerComponent";

const mapStateToProps = (state) => (
    {
        formItems:state.formItems,
        item: state.item,
        currentId:state.currentId
    }
);

export default connect(mapStateToProps)(DatePickerComponent);