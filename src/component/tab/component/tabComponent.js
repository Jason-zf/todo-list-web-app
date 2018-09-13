import React from "react";
import TabController from "./tabControl";

class TabComponent extends React.Component {
    render() {
        return (
            <div>
                <TabController>
                    <div name="To dos">

                    </div>
                    <div name="Statistic">
                        
                    </div>
                </TabController>
            </div>
        )
    }
}

export default TabComponent;