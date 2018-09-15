import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import '../css/datepicker.css'

class DatePickerComponent extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
        this.state = {
            startDate: moment(),
            endDate: moment().add(1, 'd')
        };
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    handleChangeStart(date) {
        this.setState({
            startDate: date
        })
    }

    handleChangeEnd(date) {
        this.setState({
            endDate: date
        })
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
                            onChange={this.handleChange}
                            isClearable={false}
                            withPortal={false}
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
                                onChange={this.handleChangeStart}
                            />

                        </div>
                        <div className='endDatePickerBox'>
                            <DatePicker
                                selected={this.state.endDate}
                                selectsEnd
                                startDate={this.state.startDate}
                                endDate={this.state.endDate}
                                onChange={this.handleChangeEnd}
                            />
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default DatePickerComponent;