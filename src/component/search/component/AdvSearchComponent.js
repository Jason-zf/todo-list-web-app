import React from "react";
import '../css/search.css'
import DatePickerComponent from '../../datePicker/'
import SelectorComponent from "../../selector/";
import {Button} from "react-bootstrap";

class AdvSearchComponent extends React.Component {
    constructor(props) {
        super(props);
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
                    <Button>Ok</Button><Button>Cancel</Button>
                </div>
            </div>
        )
    }
}

export default AdvSearchComponent;