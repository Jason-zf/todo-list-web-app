import React from "react";
import ReactSvgPieChart from 'react-svg-piechart'

class PieChartComponent extends React.Component {

    render() {
        return (
            <div>
                <ReactSvgPieChart data={this.props.statisticData.totalStatisticData} viewBoxSize={0.05} expandOnHover expandSize={0.005} strokeWidth={0}
                                  onSectorHover={(d, i, e) => {
                                      if (d) {
                                          console.log("Mouse enter - Index:", i, "Data:", d, "Event:", e)
                                      } else {
                                          console.log("Mouse leave - Index:", i, "Event:", e)
                                      }
                                  }}/>
                <ReactSvgPieChart data={this.props.statisticData.outOfDateStatisticData} viewBoxSize={0.05} expandOnHover expandSize={0.005} strokeWidth={0}
                                  onSectorHover={(d, i, e) => {
                                      if (d) {
                                          console.log("Mouse enter - Index:", i, "Data:", d, "Event:", e)
                                      } else {
                                          console.log("Mouse leave - Index:", i, "Event:", e)
                                      }
                                  }}/>
            </div>
        )
    }
}

export default PieChartComponent;