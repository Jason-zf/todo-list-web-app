import React from "react";
import Select from 'react-select'

class SelectorComponent extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            selectedOption: null
        }

        this.tagsOptions = [
            {value: 'c', label: 'C'},
            {value: 'c++', label: 'C++'},
            {value: 'c#', label: 'C#'},
            {value: 'java', label: 'Java'},
            {value: 'javascript', label: 'JavaScript'},
            {value: 'ruby', label: 'Ruby'},
            {value: 'python', label: 'Python'}
        ];
        this.statusOptions = ['To Do', 'Doing', 'Finished', 'Out of Date'];
    }

    handleChange = (selectedOption) => {
        this.setState({selectedOption});
    };

    render() {
        const {selectedOption} = this.state;
        return (
            <div>
                {
                    !this.props.isStatus && <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={this.tagsOptions}
                        isMulti={true}
                    />
                }
                {
                    this.props.isStatus === true && <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={this.statusOptions}
                    />
                }
            </div>
        )
    }
}

export default SelectorComponent;

