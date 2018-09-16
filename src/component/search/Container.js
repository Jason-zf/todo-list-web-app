import SearchComponent from './component/SearchComponent';
import {connect} from "react-redux";

const mapDispatchToProps = (dispatch) => ({
    updateSearchedFormItems: (keywords) => dispatch({
        type: 'SIMPLE_SEARCH',
        keywords: keywords
    })
});

export default connect(null, mapDispatchToProps)(SearchComponent);