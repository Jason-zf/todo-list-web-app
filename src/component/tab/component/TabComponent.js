import React from "react";
import TabController from "./TabControl";
import ToDoListComponent from "../../toDoList/";
import StatisticComponent from '../../statistic'

class TabComponent extends React.Component {
    render() {
        return (
            <TabController>
                <div name="To dos">
                    <ToDoListComponent/>
                </div>
                <div name="Statistic">
                    <StatisticComponent/>
                </div>
            </TabController>
        )
    }
}

export default TabComponent;

