import React from "react";
import '../css/search.css'
import DatePickerComponent from '../../datePicker/'

class AdvSearchComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='advSearchBox'>
                <DatePickerComponent dateRange={true}/>
            </div>
        )
    }
}

export default AdvSearchComponent;