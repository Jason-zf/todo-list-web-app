import SearchComponent from './component/SearchComponent';
import {connect} from "react-redux";
import initFormItems from "../../services/initFormItems";
import searchFormItems from "../../services/searchFormItems";

const mapStateToProps = ({login}) => ({
    authorization: login.authorization
});

const mapDispatchToProps = (dispatch) => ({
    updateSearchedFormItems: (keywords, authorization) => {
        if (keywords !== '') {
            searchFormItems(dispatch, keywords, authorization);
        } else {
            initFormItems("/todos", dispatch, authorization);
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);