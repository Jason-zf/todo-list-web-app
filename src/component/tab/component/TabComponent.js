import React from "react";
import TabController from "./TabControl";
import TableComponent from '../../table'
import SearchComponent from '../../search'
import PieChartComponent from '../../chart'

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
                        <div className='searchContainer'>
                            <SearchComponent/>
                        </div>
                        <div className='pieChartContainer'>
                            <div className='pieChart'>
                                <PieChartComponent/>
                            </div>
                            <div className='pieChart'>
                                <PieChartComponent/>
                            </div>
                        </div>
                    </div>
                </TabController>
            </div>
        )
    }
}

export default TabComponent;