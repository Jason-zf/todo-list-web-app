import React from "react";
import Select from 'react-select'

class SelectorComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null
        }

        this.options = [
            {value: 'c', label: 'C'},
            {value: 'c++', label: 'C++'},
            {value: 'c#', label: 'C#'},
            {value: 'java', label: 'Java'},
            {value: 'javascript', label: 'JavaScript'},
            {value: 'ruby', label: 'Ruby'},
            {value: 'python', label: 'Python'}
        ];
    }

    handleChange = (selectedOption) => {
        this.setState({selectedOption});
        console.log(`Option selected:`, selectedOption);
    }

    render() {
        const {selectedOption} = this.state;
        return (
            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={this.options}
                isMulti={true}
            />
        )
    }
}

export default SelectorComponent;

