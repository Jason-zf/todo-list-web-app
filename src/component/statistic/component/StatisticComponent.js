import React from "react";
import SearchComponent from "../../search";
import PieChartComponent from "../../chart";

class StatisticComponent extends React.Component {
    render() {
        return (
            <div>
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
        )
    }
}

export default StatisticComponent;