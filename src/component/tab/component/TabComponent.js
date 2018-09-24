import React from "react";
import TabController from "./TabControl";
import ToDoListComponent from "../../toDoList/";
import View from '../../statistic'
import {Redirect} from "react-router-dom";

class TabComponent extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentWillMount() {

    }

    render() {
        this.props.initState(this.props.authorization);
        return (
            <div>
                {
                    this.props.logged &&
                    <TabController>
                        <div name="To dos">
                            <ToDoListComponent/>
                        </div>
                        <div name="Statistic">
                            <View/>
                        </div>
                    </TabController>
                }
                {
                    !this.props.logged && <Redirect to='/login'/>
                }
            </div>
        )
    }
}

export default TabComponent;

