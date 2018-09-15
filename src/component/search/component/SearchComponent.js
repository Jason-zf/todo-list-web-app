import React from "react";
import {FormControl, FormGroup, InputGroup} from "react-bootstrap";
import '../css/search.css'
import AdvSearchComponent from "./AdvSearchComponent";

class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            advSearch: false
        }
    }

    render() {
        return (
            <div className='searchContainer'>
                <div className='searchBox'>
                    <FormGroup>
                        <InputGroup>
                            <InputGroup.Addon><span className='glyphicon glyphicon-search'/></InputGroup.Addon>
                            <FormControl type="text" placeholder='Search...'/>
                        </InputGroup>
                    </FormGroup>
                </div>
                <div className='advSearchLink'>
                    <a onClick={()=>{this.onClickAdvSearchLink()}}>advance</a>
                </div>
                <div>
                    {this.state.advSearch===true && <AdvSearchComponent/>}
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