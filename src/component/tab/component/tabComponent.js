import React from "react";
import TabController from "./tabControl";
import TableComponent from '../../table'

class TabComponent extends React.Component {
    render() {
        return (
            <div>
                <TabController>
                    <div name="To dos">
                        <TableComponent>{[{
                            action: '1',
                            tags: 'meeting',
                            date: '9.9/2018',
                            status: 'in ding',
                        }]}</TableComponent>
                    </div>
                    <div name="Statistic">

                    </div>
                </TabController>
            </div>
        )
    }
}

export default TabComponent;