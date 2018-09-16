import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import '../css/datepicker.css'

class DatePickerComponent extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            startDate: this.props.currentId === -1 ? moment() : this.props.formItems[this.props.currentId].dueDate,
            endDate: moment().add(1, 'd')
        };
        this.props.item.dueDate = this.state.startDate;
    }

    handleChange(date) {
        debugger
        this.setState({
            startDate: date
        });
        this.props.item.dueDate = date;
    }

    handleChangeStart(date) {
        this.setState({
            startDate: date
        });
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
                            onChange={this.handleChange.bind(this)}
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
                                onChange={this.handleChangeStart.bind(this)}
                            />

                        </div>
                        <div className='endDatePickerBox'>
                            <DatePicker
                                selected={this.state.endDate}
                                selectsEnd
                                startDate={this.state.startDate}
                                endDate={this.state.endDate}
                                onChange={this.handleChangeEnd.bind(this)}
                            />
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default DatePickerComponent;