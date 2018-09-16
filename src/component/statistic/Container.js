import StatisticComponent from "./component/StatisticComponent";
import {connect} from "react-redux";

const mapDispatchToProps = (dispatch) => (
    {
        onChangeStatisticData: () => dispatch({type: 'CHANGE_STATISTIC_DATA'})
    }
);

export default connect(mapDispatchToProps)(StatisticComponent);