import React from "react";
import '../css/search.css'
import DatePickerComponent from '../../datePicker/'
import SelectorComponent from "../../selector/";
import {Button} from "react-bootstrap";

class AdvSearchComponent extends React.Component {
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
                    <Button onClick={this.onClickOk()}>Ok</Button><Button onClick={this.onClickCancel()}>Cancel</Button>
                </div>
            </div>
        )
    }

    onClickOk() {
        return undefined;
    }

    onClickCancel() {
        return undefined;
    }
}

export default AdvSearchComponent;