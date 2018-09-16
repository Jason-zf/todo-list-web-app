import React from "react";
import SearchComponent from "../../search";
import PieChartComponent from "../../chart";

class StatisticComponent extends React.Component {
    constructor() {
        super();
        this.data = [
            {title: "Data 1", value: 100, color: "#22594e"},
            {title: "Data 2", value: 60, color: "#2f7d6d"},
            {title: "Data 3", value: 30, color: "#3da18d"},
            {title: "Data 4", value: 20, color: "#69c2b0"},
            {title: "Data 5", value: 10, color: "#a1d9ce"}
        ];
        // this.props.onChangeStatisticData();
    }


    render() {
        return (
            <div>
                <div className='searchContainer'>
                    <SearchComponent/>
                </div>
                <div className='pieChartContainer'>
                    <div className='pieChart'>
                        <PieChartComponent data={this.data}/>
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