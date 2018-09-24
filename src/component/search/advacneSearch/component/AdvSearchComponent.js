import React from "react";
import '../../css/search.css'
import DatePickerComponent from '../../../datePicker'
import SelectorComponent from "../../../selector/";
import {Button} from "react-bootstrap";

class AdvSearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className='advSearchBox'>
                <div className='dateBox'>
                    <DatePickerComponent dateRange={true}/>
                </div>
                <div className='selectorBox'>
                    <SelectorComponent/>
                </div>
                <div className='advSearchBtnBox'>
                    <Button onClick={this.onClickOk.bind(this)}>Ok</Button><Button
                    onClick={this.onClickCancel.bind(this)}>Cancel</Button>
                </div>
            </div>
        )
    }

    onClickOk() {
        debugger
        this.props.onClickAdvSearchBtn(true, this.props.authorization, this.props.advSearch);
    }

    onClickCancel() {
        this.props.onClickAdvSearchBtn(false, this.props.authorization, this.props.advSearch);
    }
}

export default AdvSearchComponent;