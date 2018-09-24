import AdvSearchComponent from './component/AdvSearchComponent';
import {connect} from "react-redux";
import initFormItems from "../../reducer/initFormItems";
import moment from "moment";

const mapStateToProps = ({login, data}) => ({
    authorization: login.authorization,
    advSearch: data.advSearch
});

const mapDispatchToProps = (dispatch) => ({
    onClickAdvSearchBtn: (isClickOkBtn, authorization, advSearch) => {
        let server = '/todos';
        if (advSearch.tags.length !== 0) {
            server += '?tag=' + advSearch.tags;
        }
        if (advSearch.startDate !== null && advSearch.endDate !== null) {
            if (advSearch.tags.length === 0)
                server += '?from=' + advSearch.startDate.format('YYYY/MM/DD') + '&to=' + advSearch.endDate.format('YYYY/MM/DD');
            else
                server += '&from=' + advSearch.startDate.format('YYYY/MM/DD') + '&to=' + advSearch.endDate.format('YYYY/MM/DD');
        }
        if (isClickOkBtn === true) {
            fetch(server, {
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
                        dueDate: moment(item.dueDate),
                        status: item.status
                    }));
                    dispatch({type: 'INIT', items: items});
                } else {
                    alert("empty todo list");
                    dispatch({type: 'INIT', items: []});
                }
            });
        } else {
            initFormItems(dispatch, authorization);
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AdvSearchComponent);