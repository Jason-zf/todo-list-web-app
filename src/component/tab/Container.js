import TabComponent from './component/TabComponent';
import {connect} from "react-redux";
import initFormItems from "../reducer/initFormItems";

const mapStateToProps = ({login}) => ({
        logged: login.isAuthenticated,
        authorization: login.authorization
    })
;

const mapDispatchToProps = (dispatch) => ({
    initState: (authorization) => {
        console.log(authorization);
        initFormItems(dispatch, authorization);
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TabComponent);