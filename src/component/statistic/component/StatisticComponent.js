import React from "react";
import View from "../../search";
import PieChart from "../../chart";
import moment from "moment";

class StatisticComponent extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div>
                <div className='searchContainer'>
                    <View/>
                </div>
                <div className='pieChartContainer'>
                    <div className='pieChart'>
                        <PieChart/>
                    </div>
                    {/*<div className='pieChart'>*/}
                    {/*<View/>*/}
                    {/*</div>*/}
                </div>
            </div>
        )
    }
}

export default StatisticComponent;