import React from "react";
import TabController from "./tabControl";

class TabComponent extends React.Component {
    render() {
        return (
            <div>
                <TabController>
                    <div name="tabA">
                        tabA is very good
                    </div>
                    <div name="tabB">
                        tabB is very good
                    </div>
                </TabController>
            </div>
        )
    }
}

export default TabComponent;