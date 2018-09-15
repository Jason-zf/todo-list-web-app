import React from "react";
import '../css/tab.css'
import {Tab, Tabs} from "react-bootstrap";

class TabController extends React.Component {
    constructor() {
        super();
        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
            currentIndex: 0
        }
    }

    handleSelect(key) {
        console.log(key);
        this.setState({currentIndex: key});
    }

    render() {
        console.log(this.props.children);
        return (
            <div className='tabContainer'>
                <Tabs
                    activeKey={this.state.currentIndex}
                    onSelect={this.handleSelect}
                    id="controlled-tab-example">
                    {
                        React.Children.map(this.props.children, (element, index) => {
                            return (
                                <Tab eventKey={index} title={element.props.name}>
                                    {element}
                                </Tab>
                            )
                        })
                    }
                </Tabs>
            </div>
        )
    }
}

export default TabController;