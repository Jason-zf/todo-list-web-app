import SearchComponent from './component/SearchComponent';
import {connect} from "react-redux";

const mapDispatchToProps = (dispatch) => ({
    updateSearchedFormItems: (keywords) => dispatch({
        type: 'UPDATE_SEARCHED_FORM_ITEMS',
        keywords: keywords
    })
});

export default connect(null, mapDispatchToProps)(SearchComponent);