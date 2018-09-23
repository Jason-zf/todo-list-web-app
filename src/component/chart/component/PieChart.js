import React from "react";
import ReactSvgPieChart from 'react-svg-piechart'
import './chart_style.css';

class PieChartComponent extends React.Component {

    render() {
        return (
            <div>
                <div><h2>Statistic</h2></div>
                <div className='totalPieChartBox'>
                    <ReactSvgPieChart data={this.props.statisticData.totalStatisticData} viewBoxSize={0.05}
                                      expandOnHover
                                      expandSize={0.005} strokeWidth={0}
                                      onSectorHover={(d, i, e) => {
                                          if (d) {
                                              console.log("Mouse enter - Index:", i, "Data:", d, "Event:", e)
                                          } else {
                                              console.log("Mouse leave - Index:", i, "Event:", e)
                                          }
                                      }}/>
                </div>
                <div><h2>Date</h2></div>
                <div className='datePieChartBox'>
                    <ReactSvgPieChart data={this.props.statisticData.outOfDateStatisticData} viewBoxSize={0.05}
                                      expandOnHover expandSize={0.005} strokeWidth={0}
                                      onSectorHover={(d, i, e) => {
                                          if (d) {
                                              console.log("Mouse enter - Index:", i, "Data:", d, "Event:", e)
                                          } else {
                                              console.log("Mouse leave - Index:", i, "Event:", e)
                                          }
                                      }}/>
                </div>
            </div>
        )
    }
}

export default PieChartComponent;