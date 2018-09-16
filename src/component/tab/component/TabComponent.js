import React from "react";
import TabController from "./TabControl";
import ToDoListComponent from "../../toDoList/";
import View from '../../statistic'

class TabComponent extends React.Component {
    render() {
        return (
            <TabController>
                <div name="To dos">
                    <ToDoListComponent/>
                </div>
                <div name="Statistic">
                    <View/>
                </div>
            </TabController>
        )
    }
}

export default TabComponent;

