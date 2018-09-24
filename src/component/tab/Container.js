import TabComponent from './component/TabComponent';
import {connect} from "react-redux";
import moment from "moment";

const mapStateToProps = ({login}) => ({
        logged: login.isAuthenticated,
        authorization: login.authorization
    })
;

const mapDispatchToProps = (dispatch) => ({
    initState: (authorization) => {
        console.log(authorization);
        fetch("/todos", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'AUTHORIZATION': authorization
            }
        }).then(function (response) {
            return response.json();
        }).then(function (myJson) {
            if (myJson.content !== undefined) {
                let items = myJson.content.map(item => ({
                    id: item.id,
                    name: item.name,
                    tags: item.tags.map(tag => tag.name),
                    dueDate: moment(item.dueDate),
                    status: item.status
                }));
                dispatch({type: 'INIT', items: items});
                dispatch({type: 'CHANGE_STATISTIC_DATA', currentDate: moment()})
            } else {
                // alert("empty todo list");
                // dispatch({type: 'INIT', items: []});
                // dispatch({type: 'CHANGE_STATISTIC_DATA', currentDate: moment()})
            }
        });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TabComponent);