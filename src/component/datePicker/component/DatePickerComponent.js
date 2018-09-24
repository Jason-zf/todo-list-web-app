import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../css/datepicker.css'

class DatePickerComponent extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            startDate: null,
            endDate: null
        };
        if (this.props.item !== undefined && this.props.item.dueDate !== undefined) {
            this.state.startDate = this.props.item.dueDate;
        }
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
        this.props.item.dueDate = date;
    }

    handleChangeStart(date) {
        this.setState({
            startDate: date
        });
        this.props.advSearch.startDate = date;
    }

    handleChangeEnd(date) {
        this.setState({
            endDate: date
        });
        this.props.advSearch.endDate = date;
    }

    render() {
        return (
            <div>
                {
                    !this.props.dateRange &&
                    <div className='startDatePickerBox'>
                        <DatePicker
                            dateFormat='YYYY/MM/DD'
                            selected={this.state.startDate}
                            onChange={this.handleChange.bind(this)}
                            isClearable={false}
                            withPortal={false}
                            placeholderText='Select...'
                        />
                    </div>
                }
                {
                    this.props.dateRange === true &&
                    <div>
                        <div className='startDatePickerBox'>
                            <DatePicker
                                selected={this.state.startDate}
                                selectsStart
                                startDate={this.state.startDate}
                                endDate={this.state.endDate}
                                onChange={this.handleChangeStart.bind(this)}
                                placeholderText='Select startDate...'
                            />

                        </div>
                        <div className='endDatePickerBox'>
                            <DatePicker
                                selected={this.state.endDate}
                                selectsEnd
                                startDate={this.state.startDate}
                                endDate={this.state.endDate}
                                onChange={this.handleChangeEnd.bind(this)}
                                placeholderText='Select endDate...'
                            />
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default DatePickerComponent;