import React from "react";
import {FormControl, FormGroup, InputGroup} from "react-bootstrap";
import '../css/search.css'
import AdvSearchComponent from "../advacneSearch/";

class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            advSearch: false
        }
    }

    onKeyPress(e) {
        if (e.keyCode === 13) {
            console.log(this.input.value);
            debugger
            this.props.updateSearchedFormItems(this.input.value, this.props.authorization);
        }
    }

    render() {
        return (
            <div className='searchContainer'>
                <div className='searchBox'>
                    <FormGroup>
                        <InputGroup>
                            <InputGroup.Addon><span className='glyphicon glyphicon-search'/></InputGroup.Addon>
                            <FormControl type="text" placeholder='Search...' onKeyDown={this.onKeyPress.bind(this)}
                                         inputRef={ref => {
                                             this.input = ref;
                                         }}/>
                        </InputGroup>
                    </FormGroup>
                </div>
                <div className='advSearchLink'>
                    <a onClick={() => {
                        this.onClickAdvSearchLink()
                    }}>advance</a>
                </div>
                <div>
                    {this.state.advSearch === true && <AdvSearchComponent/>}
                </div>
            </div>
        )
    }

    onClickAdvSearchLink() {
        this.setState({
            advSearch: !this.state.advSearch
        })
    }
}

export default SearchComponent;