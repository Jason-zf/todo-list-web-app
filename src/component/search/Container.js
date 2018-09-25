import SearchComponent from './component/SearchComponent';
import {connect} from "react-redux";
import initFormItems from "../../services/initFormItems";

const mapStateToProps = ({login}) => ({
    authorization: login.authorization
});

const mapDispatchToProps = (dispatch) => ({
    updateSearchedFormItems: (keywords, authorization) => {
        if (keywords !== '') {
            fetch(`/todos/search/${keywords}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'AUTHORIZATION': authorization
                }
            }).then(function (response) {
                return response.json();
            }).then(function (myJson) {
                debugger
                if (myJson.content !== undefined) {
                    let items = myJson.content.map(item => ({
                        id: item.id,
                        name: item.name,
                        tags: item.tags.map(tag => tag.name),
                        dueDate: new Date(item.dueDate),
                        status: item.status
                    }));
                    debugger
                    dispatch({type: 'INIT', items: items});
                } else {
                    alert("empty todo list");
                    dispatch({type: 'INIT', items: []});
                }
            });
        } else {
            initFormItems("/todos",dispatch, authorization);
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);