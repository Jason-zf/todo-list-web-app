import React from "react";
import {Button} from "react-bootstrap";
import '../css/table.css'

class SortBtn extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            up: true
        }
    }

    onClickBtn() {
        this.setState({up: !this.state.up});
        this.props.onClickSortBtn(this.props.title, this.state.up);
    }

    render() {
        const symbol = (this.state.up === true ? '▲' : '▼');
        return (
            <Button bsClass='headerSortBtn' onClick={() => {
                this.onClickBtn();
            }}>{symbol}{this.props.children}</Button>
        )
    }
}

export default SortBtn;