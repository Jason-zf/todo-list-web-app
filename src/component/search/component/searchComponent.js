import React from "react";
import {FormControl, FormGroup, InputGroup} from "react-bootstrap";

class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <FormGroup>
                    <InputGroup>
                        <InputGroup.Addon><span className='glyphicon glyphicon-search'></span></InputGroup.Addon>
                        <FormControl type="text" bsSize='small'/>
                    </InputGroup>
                </FormGroup>
            </div>
        )
    }

}

export default SearchComponent;