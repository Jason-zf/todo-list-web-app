import React from "react";
import TabController from "./tabControl";
import TableComponent from '../../table'
import SearchComponent from '../../search'

class TabComponent extends React.Component {
    render() {
        return (
            <div>
                <TabController>
                    <div name="To dos">
                        <div className='searchContainer'>
                            <SearchComponent/>
                        </div>
                        <div className='tableContainer'>
                            <TableComponent>{[{
                                action: '1',
                                tags: 'meeting',
                                date: '9.9/2018',
                                status: 'in ding',
                            }]}</TableComponent>
                        </div>
                    </div>
                    <div name="Statistic">

                    </div>
                </TabController>
            </div>
        )
    }
}

export default TabComponent;