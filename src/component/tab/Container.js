import TabComponent from './component/TabComponent';
import {connect} from "react-redux";

const mapStateToProps = ({login}) => ({
    logged: login.isAuthenticated
});

export default connect(mapStateToProps)(TabComponent);