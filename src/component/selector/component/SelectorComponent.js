import React from "react";
import Select from 'react-select'

class SelectorComponent extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            selectedOption: null
        };

        this.tagsOptions = [
            {value: 'c', label: 'C'},
            {value: 'c++', label: 'C++'},
            {value: 'c#', label: 'C#'},
            {value: 'java', label: 'Java'},
            {value: 'javascript', label: 'JavaScript'},
            {value: 'ruby', label: 'Ruby'},
            {value: 'python', label: 'Python'}
        ];
        this.statusOptions = [
            {value: 'todo', label: 'To Do'},
            {value: 'doing', label: 'Doing'},
            {value: 'finished', label: 'Finished'},
            {value: 'out of date', label: 'Out of Date'},
        ];
    }

    handleChange = (selectedOption) => {
        this.setState({selectedOption});
        if (this.props.isStatus) {
            this.props.item.status = selectedOption.label;
        } else {
            this.props.item.tags = selectedOption.map(value => value.label);
        }
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
                        placeholder={this.props.currentId !== -1 ? this.props.formItems[this.props.currentId].tags.join(', ') : 'Select...'}
                    />
                }
                {
                    this.props.isStatus === true && <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={this.statusOptions}
                        placeholder={this.props.currentId !== -1 ? this.props.formItems[this.props.currentId].status : 'Select...'}
                    />
                }
            </div>
        )
    }
}

export default SelectorComponent;

