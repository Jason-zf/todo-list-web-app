import PieChart from './component/PieChart';
import {connect} from "react-redux";

const mapStateToProps = ({data}) => (
    {
        statisticData: data.statisticData
    }
);

export default connect(mapStateToProps)(PieChart);