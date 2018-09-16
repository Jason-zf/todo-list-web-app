import PieChart from './component/PieChart';
import {connect} from "react-redux";

const mapStateToProps = (state) => (
    {
        statisticData: state.statisticData
    }
);

export default connect(mapStateToProps)(PieChart);