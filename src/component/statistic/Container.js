import StatisticComponent from "./component/StatisticComponent";
import {connect} from "react-redux";

const mapDispatchToProps = (dispatch) => (
    {
        onChangeStatisticData: (currentDate) => dispatch({type: 'CHANGE_STATISTIC_DATA',currentDate:currentDate})
    }
);

export default connect(null,mapDispatchToProps)(StatisticComponent);