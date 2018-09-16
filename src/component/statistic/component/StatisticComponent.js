import React from "react";
import SearchComponent from "../../search";
import PieChart from "../../chart";
import moment from "moment";

class StatisticComponent extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.props.onChangeStatisticData(moment());
    }


    render() {
        return (
            <div>
                <div className='searchContainer'>
                    <SearchComponent/>
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