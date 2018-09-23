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
            {value: 'todo', label: 'To do'},
            {value: 'in progress', label: 'In progress'},
            {value: 'blocked', label: 'Blocked'},
        ];
    }

    handleChange = (selectedOption) => {
        this.setState({selectedOption});
        if (this.props.isStatus) {
            this.props.item.status = selectedOption.label;
        } else {
            this.props.item.tags = selectedOption.map(value => value.label);
            this.props.advSearch.tags = selectedOption.map(value => value.label);
        }
    };

    render() {
        const {selectedOption} = this.state;
        let statusPlaceholder = 'Select...', tagPlaceholder = 'Select...';
        if (this.props.currentId !== undefined && this.props.formItems[this.props.currentId] !== undefined) {
            tagPlaceholder = this.props.formItems[this.props.currentId].tags.join(", ");
            statusPlaceholder = this.props.formItems[this.props.currentId].status;
        }
        return (
            <div>
                {
                    !this.props.isStatus && <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={this.tagsOptions}
                        isMulti={true}
                        placeholder={tagPlaceholder}
                    />
                }
                {
                    this.props.isStatus === true && <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={this.statusOptions}
                        placeholder={statusPlaceholder}
                    />
                }
            </div>
        )
    }
}

export default SelectorComponent;

